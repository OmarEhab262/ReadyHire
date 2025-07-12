import { useRef, useEffect } from "react";

export default function CameraRecorder() {
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const streamRef = useRef(null);
  const videoRef = useRef(null);

  const startRecording = () => {
    if (!streamRef.current) return;

    recordedChunksRef.current = [];
    mediaRecorderRef.current = new MediaRecorder(streamRef.current, {
      mimeType: "video/webm; codecs=vp8,opus",
    });

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunksRef.current.push(event.data);
      }
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(recordedChunksRef.current, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `camera-recording-${Date.now()}.webm`;
      a.click();
      URL.revokeObjectURL(url);
      console.log("Recording stopped. Video saved.");
    };

    mediaRecorderRef.current.start();
    console.log("Recording started...");
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== "inactive"
    ) {
      mediaRecorderRef.current.stop();
    }
  };

  const stopAndCleanup = () => {
    stopRecording();
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    console.log("Camera stopped and cleaned up.");
  };

  useEffect(() => {
    const init = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }

        startRecording();
      } catch (err) {
        console.error("Error accessing camera or mic:", err);
      }
    };

    init();

    // بعد 5 ثواني مثلا جرب توقف التسجيل وتنظف الكاميرا
    const stopTimeout = setTimeout(() => {
      stopAndCleanup();
    }, 5000);

    return () => {
      clearTimeout(stopTimeout);
      stopAndCleanup();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <video
        ref={videoRef}
        className="h-[300px] w-[300px] object-cover rounded-lg bg-black"
        autoPlay
        playsInline
        muted
      />
    </div>
  );
}

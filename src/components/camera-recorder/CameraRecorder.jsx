import { useRef, useState } from "react";

export default function CameraRecorder() {
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const streamRef = useRef(null);
  const videoRef = useRef(null);

  const handleClick = async () => {
    if (!recording) {
      try {
        // Always ask for both video & audio
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        // ✅ Check that there’s actually an audio track
        const audioTracks = stream.getAudioTracks();
        if (audioTracks.length === 0) {
          console.warn("No audio track detected.");
        }

        streamRef.current = stream;

        // Live preview — keep muted to allow autoplay
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }

        recordedChunksRef.current = [];
        mediaRecorderRef.current = new MediaRecorder(stream, {
          mimeType: "video/webm; codecs=vp8,opus",
        });

        mediaRecorderRef.current.ondataavailable = (event) => {
          if (event.data.size > 0) {
            recordedChunksRef.current.push(event.data);
          }
        };

        mediaRecorderRef.current.onstop = () => {
          const blob = new Blob(recordedChunksRef.current, {
            type: "video/webm",
          });

          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "camera-recording.webm";
          a.click();
          URL.revokeObjectURL(url);

          // Stop all tracks
          stream.getTracks().forEach((track) => track.stop());
          streamRef.current = null;

          if (videoRef.current) {
            videoRef.current.srcObject = null;
          }
        };

        mediaRecorderRef.current.start();
        setRecording(true);
      } catch (err) {
        console.error("Error accessing camera or mic:", err);
      }
    } else {
      // Stop recording
      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state !== "inactive"
      ) {
        mediaRecorderRef.current.stop();
      }
      setRecording(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div>
        <video
          ref={videoRef}
          className="w-full h-300 object-cover rounded-lg bg-black"
          autoPlay
          playsInline
          muted // keep muted for autoplay
        />
      </div>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        {recording ? "Stop Recording" : "Start Recording"}
      </button>
    </div>
  );
}

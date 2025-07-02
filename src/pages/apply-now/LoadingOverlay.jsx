export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white bg-opacity-90">
      <h1 className="text-3xl font-bold mb-4">Submitting your response...</h1>
      <div className="w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

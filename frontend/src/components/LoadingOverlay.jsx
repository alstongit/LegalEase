// LoadingOverlay.jsx
const LoadingOverlay = () => {
  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center bg-white/70 backdrop-blur-sm">
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingOverlay;

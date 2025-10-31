const Loader = ({ fade }) => {
  return (
    <div
      className={`loader fixed inset-0 flex items-center justify-center bg-primary z-50 transition-opacity duration-500 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-20 h-20 border-6 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;

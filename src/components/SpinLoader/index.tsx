type PropsSpinLoader = {
  className?: string;
};

function SpinLoader({ className }: PropsSpinLoader) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <span className="w-8 h-8 border-6 border-t-transparent border-slate-600 rounded-full animate-spin"></span>
    </div>
  );
}

export default SpinLoader;

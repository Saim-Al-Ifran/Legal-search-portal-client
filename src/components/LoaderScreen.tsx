export function LoaderScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-r from-rose-100 via-amber-100 to-slate-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-rose-400 mb-6"></div>
      <h2 className="text-xl font-semibold text-slate-700">Initializing Legal AI...</h2>
      <p className="text-sm text-slate-500 mt-2">Please wait while we prepare your experience</p>
    </div>
  );
}
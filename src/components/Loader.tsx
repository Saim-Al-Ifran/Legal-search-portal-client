export const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <div className="relative w-14 h-14 mb-4">
        <div className="absolute inset-0 rounded-full border-4 border-rose-300 border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center text-3xl text-amber-500">
          <i className="fas fa-scale-balanced"></i> {/* Legal-themed Font Awesome icon */}
        </div>
      </div>
      <h2 className="text-[#F97F93] font-semibold text-lg">Analyzing legal context...</h2>
      <p className="text-slate-500 text-sm mt-2">
        Our AI is reviewing statutes, precedents, and interpretations to generate your answer.
      </p>
    </div>
  );
};

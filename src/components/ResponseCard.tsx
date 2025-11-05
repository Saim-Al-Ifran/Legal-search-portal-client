interface ResponseCardProps {
  response: {
    query: string;
    summary: string;
  };
}

export const ResponseCard: React.FC<ResponseCardProps> = ({ response }) => {
  return (
    <div className="bg-linear-to-br from-amber-50 via-white to-rose-50 border border-slate-200 rounded-xl p-6 shadow-md mt-3">
      <div className="mb-5">
        <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-1">
          <i className="fas fa-question-circle text-rose-400 mr-2"></i>Query
        </h3>
        <div className="bg-white border border-rose-100 rounded-lg p-4 text-slate-700 shadow-sm">
          {response.query}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-1">
          <i className="fas fa-lightbulb text-amber-500 mr-2"></i>AI Summary
        </h3>
        <div className="bg-white border border-amber-100 rounded-lg p-4 text-slate-800 leading-relaxed shadow-sm">
          {response.summary}
        </div>
      </div>
    </div>
  );
};

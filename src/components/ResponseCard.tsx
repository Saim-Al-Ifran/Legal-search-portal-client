import type { ResponseCardProps } from "../types/types";

export const ResponseCard: React.FC<ResponseCardProps> = ({ response, query }) => {
  const highlightText = (text: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, "<mark class='bg-yellow-200 text-black px-1 rounded-sm'>$1</mark>");
  };

  return (
    <div className="bg-linear-to-br from-amber-50 via-white to-rose-50 border border-slate-200 rounded-xl p-6 shadow-md mt-3">
      <div className="mb-5">
        <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-1">
          <i className="fas fa-question-circle text-rose-400 mr-2"></i>Title
        </h3>
        <div
          className="bg-white border border-rose-100 rounded-lg p-4 text-slate-700 shadow-sm"
          dangerouslySetInnerHTML={{ __html: highlightText(response.title) }}
        />
      </div>

      <div>
        <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-1">
          <i className="fas fa-lightbulb text-amber-500 mr-2"></i>Content
        </h3>
        <div
          className="bg-white border border-amber-100 rounded-lg p-4 text-slate-800 leading-relaxed shadow-sm"
          dangerouslySetInnerHTML={{ __html: highlightText(response.content) }}
        />
      </div>
    </div>
  );
};

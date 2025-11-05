import { useEffect,  useState } from "react";
import { Loader } from "./components/Loader";
import { ResponseCard } from "./components/ResponseCard";
import { LoaderScreen } from "./components/LoaderScreen";

const mockResponse = {
  query: "What is the difference between civil and criminal law?",
  summary:
    "Civil law deals with disputes between individuals or organizations, while criminal law involves offenses against the state and carries punishments such as imprisonment or fines.",
};

export default function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState<typeof mockResponse | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);
 
  
useEffect(() => {
  const timer = setTimeout(() => {
    setInitialLoading(false);
  }, 1800); // Slightly longer for realism
  return () => clearTimeout(timer);
}, []);

if (initialLoading) {
  return <LoaderScreen />;
}
  const handleSearch = () => {
    if (!query.trim()) {
      setError("Please enter a query before searching.");
      return;
    }
    setError("");
    setLoading(true);

    setTimeout(() => {
      setResponse(mockResponse);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-amber-100 via-rose-100 to-slate-100 flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-10 border border-rose-200">
      <h1 className="text-3xl font-bold text-center text-slate-800 mb-8 flex items-center justify-center gap-3">
        <i className="fas fa-scale-balanced text-rose-400"></i>
        Ask Legal AI
      </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Ask me anything about law..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 border border-rose-300 rounded-xl px-5 py-3 text-lg shadow-sm bg-white text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-all"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="bg-linear-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white px-6 py-3 rounded-xl text-lg font-medium shadow-md transition-all"
          >
            {loading ? "Thinking..." : "Ask AI"}
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-sm font-medium text-center mb-4">
            {error}
          </p>
        )}

        {loading && <Loader />}
        {response && !loading && <ResponseCard response={response} />}
        {response && !loading && <ResponseCard response={response} />}
      </div>

<p className="text-slate-400 text-xs mt-6 text-center italic">
  Ask Legal AI • Prototype v1.0 • Educational Use Only
</p>

    </div>
  );
}

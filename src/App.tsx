import { useEffect, useState } from "react";
import { axiosInstance } from "./api/axiosInstance";
import { Loader } from "./components/Loader";
import { LoaderScreen } from "./components/LoaderScreen";
import { ResponseCard } from "./components/ResponseCard";
import type { LegalResponse } from "./types/types";



export default function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [responses, setResponses] = useState<LegalResponse[]>([]);
  const [initialLoading, setInitialLoading] = useState(true);

  // Simulated intro loader
  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) return <LoaderScreen />;

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a title before searching.");
      return;
    }

    setError("");
    setLoading(true);
    setResponses([]);

    try {
      const res = await axiosInstance.post<LegalResponse[]>("/generate", { query });
      console.log(res.data);
      setResponses(res.data);
    } catch (err: any) {
      console.error(err);
      setError(
        err.response?.data?.error ||
        "Failed to fetch response from the backend."
      );
    } finally {
      setLoading(false);
    }
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

        {!loading && responses.length > 0 && (
          <div className="space-y-6">
            {responses.map((item, index) => (
              <ResponseCard
                key={index}
                response={{ title: item.title, content: item.summary }}
              />
            ))}
          </div>
        )}
      </div>

      <p className="text-slate-400 text-xs mt-6 text-center italic">
        Ask Legal AI • Prototype v1.0 • Educational Use Only
      </p>
    </div>
  );
}

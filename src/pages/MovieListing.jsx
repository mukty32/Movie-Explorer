import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

export default function MovieListing({ onSelectMovie }) {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDefaultShows = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://api.tvmaze.com/shows');
        const data = await res.json();
        setShows(data.slice(0, 24));
      } catch (err) {
        console.error('Failed to fetch shows', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDefaultShows();
  }, []);

  const handleSearch = async (e) => {
    const val = e.target.value;
    setQuery(val);

    if (!val.trim()) {
      const res = await fetch('https://api.tvmaze.com/shows');
      const data = await res.json();
      setShows(data.slice(0, 24));
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(val)}`);
      const data = await res.json();
      setShows(data.map((item) => item.show));
    } catch (err) {
      console.error('Search failed', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12 max-w-7xl mx-auto space-y-8">
      <div className="max-w-xl mx-auto">
        <input 
          type="text" 
          value={query} 
          onChange={handleSearch} 
          placeholder="🔍 Search for a movie..." 
          className="w-full px-5 py-3 rounded-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 shadow-md"
        />
      </div>

      {loading ? (
        <div className="text-center py-12 text-slate-400">Loading shows...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shows.map((show) => (
            <MovieCard key={show.id} show={show} onSelect={onSelectMovie} />
          ))}
        </div>
      )}
    </div>
  );
}
export default function MovieModal({ show, onClose }) {
  if (!show) return null;

  const { name, image, rating, premiered, summary, genres } = show;
  const poster = image?.original || image?.medium || 'https://via.placeholder.com/400x600?text=No+Image';
  const cleanSummary = summary ? summary.replace(/<[^>]+>/g, '') : 'No overview available.';

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-slate-900 border border-slate-800 text-white rounded-2xl max-w-2xl w-full p-6 relative shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold cursor-pointer"
        >
          ✕
        </button>
        
        <div className="h-64 w-full overflow-hidden rounded-xl">
          <img src={poster} alt={name} className="w-full h-full object-cover" />
        </div>

        <h2 className="text-2xl font-bold">{name}</h2>
        
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          <span>⭐ Rating: {rating?.average || 'N/A'}</span>
          <span>📅 Release: {premiered || 'N/A'}</span>
          {genres && genres.length > 0 && <span>🎭 Genres: {genres.join(', ')}</span>}
        </div>

        <div>
          <h4 className="font-semibold text-indigo-400 mb-1">Overview:</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{cleanSummary}</p>
        </div>

        <div className="flex justify-end pt-2">
          <button 
            onClick={onClose}
            className="px-5 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition text-sm cursor-pointer"
          >
            ❌ Close
          </button>
        </div>
      </div>
    </div>
  );
}
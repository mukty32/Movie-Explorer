export default function MovieCard({ show, onSelect }) {
  const { name, image, rating, premiered } = show;
  const year = premiered ? premiered.split('-')[0] : 'N/A';
  const score = rating?.average || 'N/A';
  const poster = image?.medium || 'https://via.placeholder.com/210x295?text=No+Image';

  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 flex flex-col justify-between border border-slate-700/50">
      <img src={poster} alt={name} className="w-full h-72 object-cover" />
      <div className="p-4 flex flex-col flex-grow justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-white line-clamp-1">{name}</h3>
          <p className="text-slate-400 text-sm mt-1">⭐ {score} • 📅 {year}</p>
        </div>
        <button 
          onClick={() => onSelect(show)}
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition cursor-pointer"
        >
          See Details
        </button>
      </div>
    </div>
  );
}
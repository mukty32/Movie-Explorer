export default function Hero({ onExplore }) {
  return (
    <div className="relative bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">DISCOVER MOVIES</h1>
        <p className="text-lg md:text-xl text-slate-300">
          Explore and discover your favorite movies and TV shows from around the world.
        </p>
        <button 
          onClick={onExplore}
          className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-full font-semibold text-lg shadow-lg hover:shadow-indigo-500/50 transition duration-300 cursor-pointer"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
}
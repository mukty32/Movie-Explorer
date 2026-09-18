export default function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-slate-900 text-white shadow-md">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActivePage('home')}>
        <span className="text-2xl">🎬</span>
        <h1 className="text-xl font-bold tracking-wide">MovieExplorer</h1>
      </div>
      <div className="flex gap-4">
        <button 
          onClick={() => setActivePage('home')}
          className={`px-3 py-1 rounded transition ${activePage === 'home' ? 'bg-indigo-600' : 'hover:text-indigo-400'}`}
        >
          Home
        </button>
        <button 
          onClick={() => setActivePage('movies')}
          className={`px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition ${activePage === 'movies' ? 'ring-2 ring-indigo-400' : ''}`}
        >
          Movies
        </button>
      </div>
    </nav>
  );
}
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MovieListing from './pages/MovieListing';
import MovieModal from './components/MovieModal';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="flex-grow">
        {activePage === 'home' ? (
          <Hero onExplore={() => setActivePage('movies')} />
        ) : (
          <MovieListing onSelectMovie={(movie) => setSelectedMovie(movie)} />
        )}
      </main>

      <MovieModal show={selectedMovie} onClose={() => setSelectedMovie(null)} />
      <Footer />
    </div>
  );
}
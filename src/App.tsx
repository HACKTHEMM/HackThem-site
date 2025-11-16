import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Team from './components/Team';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Hero onNavigate={setCurrentPage} />;
      case 'Team':
        return <Team />;
      case 'Projects':
        return <Projects />;
      case 'Achievements':
        return <Achievements />;
      case 'Contact':
        return <Contact />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_50%)] pointer-events-none" />
      <div className="relative z-10">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
        {renderPage()}
      </div>
    </div>
  );
}

export default App;

import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'Team', 'Projects', 'Achievements', 'Contact'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('Home')}
            className="flex items-center gap-3 group"
          >
            <div className="p-2 accent-border rounded-lg group-hover:bg-white/5 smooth-transition">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              HackThem
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`px-5 py-2.5 rounded-lg smooth-transition ${
                  currentPage === item
                    ? 'bg-white/10 text-white accent-border'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 text-white hover:bg-white/5 accent-border rounded-lg smooth-transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4 page-transition">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  onNavigate(item);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-5 py-3 rounded-lg smooth-transition ${
                  currentPage === item
                    ? 'bg-white/10 text-white accent-border'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

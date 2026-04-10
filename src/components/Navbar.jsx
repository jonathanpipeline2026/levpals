import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ variant = 'light' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isLight = variant === 'light'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isLight ? 'bg-transparent' : 'bg-[#0d0d1a]/90 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <path d="M16 4C12 4 9 6 7 8L4 11c-2 2-3 5-3 8s1 6 3 8 5 3 7 3c2 0 4-1 6-2l4-3c2-1 3-3 3-5s0-4-1-6l-2-3c-1-2-2-3-4-4-1-1-2-2-1-4z" fill={isLight ? '#000' : '#fff'} />
              <path d="M24 3c-2 0-3 1-4 2l-2 2c2 0 3 1 4 3l2 2c1 1 2 3 2 4 1-1 1-2 1-4 0-3-1-5-3-7l-2-2z" fill={isLight ? '#000' : '#fff'} opacity="0.8" />
            </svg>
            <span className={`text-xl font-bold tracking-tight ${isLight ? 'text-black' : 'text-white'}`}>
              Levpals
            </span>
          </Link>

          <div className="flex items-center gap-4">
            {location.pathname !== '/discover' && (
              <Link
                to="/discover"
                className={`hidden sm:block text-sm font-medium ${isLight ? 'text-black/70 hover:text-black' : 'text-white/70 hover:text-white'} transition-colors`}
              >
                Explore
              </Link>
            )}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 rounded-lg transition-colors ${isLight ? 'hover:bg-black/5 text-black' : 'hover:bg-white/10 text-white'}`}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-16 left-0 right-0 ${isLight ? 'bg-white/95' : 'bg-[#0d0d1a]/95'} backdrop-blur-lg border-t ${isLight ? 'border-black/10' : 'border-white/10'} shadow-xl`}
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
              <Link to="/" className={`text-lg font-medium ${isLight ? 'text-black' : 'text-white'}`} onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/discover" className={`text-lg font-medium ${isLight ? 'text-black' : 'text-white'}`} onClick={() => setMenuOpen(false)}>Explore</Link>
              <a href="#" className={`text-lg font-medium ${isLight ? 'text-black' : 'text-white'}`}>Become a Host</a>
              <a href="#" className={`text-lg font-medium ${isLight ? 'text-black' : 'text-white'}`}>Book a Demo</a>
              <a href="#" className={`text-lg font-medium ${isLight ? 'text-black' : 'text-white'}`}>Log In</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

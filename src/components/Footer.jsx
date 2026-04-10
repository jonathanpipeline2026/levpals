import { Link } from 'react-router-dom'

export default function Footer({ variant = 'light' }) {
  const isLight = variant === 'light'

  return (
    <footer className={isLight ? 'gradient-footer' : 'bg-[#0d0d1a]'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {isLight && (
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="flex-1 bg-black text-white rounded-full py-4 px-8 text-lg font-semibold flex items-center justify-center gap-3 hover:bg-black/90 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download iOS
            </button>
            <button className="flex-1 bg-black text-white rounded-full py-4 px-8 text-lg font-semibold flex items-center justify-center gap-3 hover:bg-black/90 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.523 2.226a.75.75 0 0 0-.846.398L14.86 6.588 8.093 3.24a.75.75 0 0 0-.584-.01L3.29 5.125a.75.75 0 0 0-.28 1.222L5.93 9.267l-3.281 6.072a.75.75 0 0 0 .28 1.001l4.217 2.427a.75.75 0 0 0 .585.059l6.503-2.012 1.817 3.967a.75.75 0 0 0 .846.398l3.942-1.1a.75.75 0 0 0 .51-.848L18.424 3.077a.75.75 0 0 0-.51-.848l-.391-.003z"/></svg>
              Download Android
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className={`font-semibold mb-4 ${isLight ? 'text-black' : 'text-white'}`}>For Fitness Businesses</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className={`${isLight ? 'text-black/70 hover:text-black' : 'text-white/60 hover:text-white'} transition-colors`}>Create Your Community</a>
              <a href="#" className={`${isLight ? 'text-black/70 hover:text-black' : 'text-white/60 hover:text-white'} transition-colors`}>Launch An Experience</a>
              <a href="#" className={`${isLight ? 'text-black/70 hover:text-black' : 'text-white/60 hover:text-white'} transition-colors`}>Book A Demo</a>
              <a href="#" className={`${isLight ? 'text-black/70 hover:text-black' : 'text-white/60 hover:text-white'} transition-colors`}>Blog</a>
              <a href="#" className={`${isLight ? 'text-black/70 hover:text-black' : 'text-white/60 hover:text-white'} transition-colors`}>University ↗</a>
            </div>
          </div>
          <div>
            <h4 className={`font-semibold mb-4 ${isLight ? 'text-black' : 'text-white'}`}>Support & Legal</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className={`${isLight ? 'text-black/70 hover:text-black' : 'text-white/60 hover:text-white'} transition-colors`}>Contact Us</a>
              <a href="#" className={`${isLight ? 'text-black/70 hover:text-black' : 'text-white/60 hover:text-white'} transition-colors`}>Help Center</a>
              <a href="#" className={`${isLight ? 'text-black/70 hover:text-black' : 'text-white/60 hover:text-white'} transition-colors`}>Privacy Policy</a>
              <a href="#" className={`${isLight ? 'text-black/70 hover:text-black' : 'text-white/60 hover:text-white'} transition-colors`}>Terms & Conditions</a>
            </div>
          </div>
          <div>
            <h4 className={`font-semibold mb-4 ${isLight ? 'text-black' : 'text-white'}`}>Company</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className={`${isLight ? 'text-black/70 hover:text-black' : 'text-white/60 hover:text-white'} transition-colors`}>Careers</a>
              <a href="#" className={`${isLight ? 'text-black/70 hover:text-black' : 'text-white/60 hover:text-white'} transition-colors`}>Become an Affiliate</a>
              <Link to="/discover" className={`${isLight ? 'text-black/70 hover:text-black' : 'text-white/60 hover:text-white'} transition-colors`}>Explore Experiences</Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <a href="#" className={`${isLight ? 'text-black hover:text-black/70' : 'text-white hover:text-white/70'} transition-colors`}>
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="#" className={`${isLight ? 'text-black hover:text-black/70' : 'text-white hover:text-white/70'} transition-colors`}>
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
          </a>
          <a href="#" className={`${isLight ? 'text-black hover:text-black/70' : 'text-white hover:text-white/70'} transition-colors`}>
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>

        <div className={`text-center ${isLight ? '' : 'border-t border-white/10 pt-8'}`}>
          <h2 className={`text-6xl sm:text-8xl font-black tracking-tighter ${isLight ? 'text-black' : 'text-white'}`}>
            Levpals
          </h2>
          <div className={`flex justify-between items-center mt-4 text-sm ${isLight ? 'text-black/60' : 'text-white/40'}`}>
            <span>Be the movement</span>
            <span>2026</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Search, ChevronDown, ChevronRight, SlidersHorizontal, Map, Bookmark } from 'lucide-react'
import Footer from '../components/Footer'
import { discoverEvents } from '../data/dummy'

function EventCard({ event }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="min-w-[280px] sm:min-w-[320px] flex-shrink-0 cursor-pointer group"
    >
      <div className="flex gap-3">
        <div className="w-[140px] sm:w-[170px] h-[180px] sm:h-[210px] rounded-2xl overflow-hidden flex-shrink-0 relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex flex-col justify-center py-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <img
              src={event.communityAvatar}
              alt={event.community}
              className="w-6 h-6 rounded-full object-cover flex-shrink-0"
            />
            <span className="text-white/70 text-sm truncate">{event.community}</span>
          </div>
          <h3 className="text-white font-bold text-base sm:text-lg leading-snug mb-1 line-clamp-2">
            {event.title}
          </h3>
          <p className="text-white/50 text-sm mb-2">{event.date}</p>
          <p className={`font-semibold text-sm ${event.price === 'Free' ? 'text-green-400' : 'text-white'}`}>
            {event.price}
          </p>
          {event.going && (
            <div className="flex items-center gap-1 mt-2">
              <div className="flex -space-x-1.5">
                {[...Array(Math.min(3, event.going))].map((_, j) => (
                  <div key={j} className="w-5 h-5 rounded-full bg-white/20 border border-[#1a1a2e]" />
                ))}
              </div>
              <span className="text-white/40 text-xs ml-1">{event.going} Going</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function CategoryRow({ title, events, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const scrollRef = useRef(null)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="mb-10"
    >
      <div className="flex items-center gap-2 mb-5 px-4 sm:px-6">
        <h2 className="text-white text-xl sm:text-2xl font-bold">{title}</h2>
        <ChevronRight size={20} className="text-white/50" />
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 pb-2"
      >
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </motion.div>
  )
}

export default function DiscoverPage() {
  const [activeDate, setActiveDate] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const dates = [
    { label: 'Today', id: 'today' },
    { label: 'Tomorrow', id: 'tomorrow' },
    { label: 'Sun 12', id: 'sun' },
    { label: 'Mon 13', id: 'mon' },
    { label: 'Tue 14', id: 'tue' },
    { label: 'Wed 15', id: 'wed' },
    { label: 'Thu 16', id: 'thu' },
    { label: 'Choose Date', id: 'choose' },
  ]

  return (
    <div className="min-h-screen bg-[#0d0d1a]">
      {/* Top Nav */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-50 bg-[#0d0d1a]/95 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex-shrink-0">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                <path d="M16 4C12 4 9 6 7 8L4 11c-2 2-3 5-3 8s1 6 3 8 5 3 7 3c2 0 4-1 6-2l4-3c2-1 3-3 3-5s0-4-1-6l-2-3c-1-2-2-3-4-4-1-1-2-2-1-4z" fill="#fff" />
                <path d="M24 3c-2 0-3 1-4 2l-2 2c2 0 3 1 4 3l2 2c1 1 2 3 2 4 1-1 1-2 1-4 0-3-1-5-3-7l-2-2z" fill="#fff" opacity="0.8" />
              </svg>
            </Link>

            <div className="flex-1 relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Search in your city"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 text-white placeholder-white/40 rounded-full pl-11 pr-10 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60">
                <ChevronDown size={18} />
              </button>
            </div>

            <button className="p-2.5 rounded-full bg-white/10 text-white/60 hover:bg-white/15 hover:text-white transition-colors flex-shrink-0">
              <Bookmark size={18} />
            </button>

            <button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors flex-shrink-0">
              Login
            </button>
          </div>
        </div>
      </motion.header>

      {/* Date Filter Chips */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="sticky top-[65px] z-40 bg-[#0d0d1a]/95 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {dates.map(date => (
              <button
                key={date.id}
                onClick={() => setActiveDate(activeDate === date.id ? null : date.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                  activeDate === date.id
                    ? 'bg-white text-black'
                    : 'bg-white/10 text-white/70 hover:bg-white/15 hover:text-white'
                }`}
              >
                {date.label}
              </button>
            ))}
            <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-white/10 text-white/70 hover:bg-white/15 hover:text-white transition-all flex-shrink-0 flex items-center gap-2">
              <SlidersHorizontal size={14} />
              Filters
            </button>
          </div>
        </div>
      </motion.div>

      {/* Event Categories */}
      <main className="max-w-7xl mx-auto pt-6 pb-24">
        <CategoryRow title="Editor's Picks" events={discoverEvents.editorsPicks} delay={0.1} />
        <CategoryRow title="Retreat and Recharge" events={discoverEvents.retreats} delay={0.15} />
        <CategoryRow title="Online Events" events={discoverEvents.online} delay={0.2} />
        <CategoryRow title="Run Clubs & Outdoor" events={discoverEvents.runClubs} delay={0.25} />
      </main>

      {/* Floating Map Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 rounded-full font-semibold shadow-2xl flex items-center gap-2 z-50 hover:bg-gray-100 transition-colors"
      >
        <Map size={18} />
        Map
      </motion.button>

      <Footer variant="dark" />
    </div>
  )
}

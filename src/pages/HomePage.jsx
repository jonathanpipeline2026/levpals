import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { heroImages, marqueeImages, communityTypes, testimonials, investors } from '../data/dummy'

function FadeInSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function HeroSection() {
  return (
    <section className="gradient-hero min-h-screen flex flex-col items-center pt-20 pb-16 px-4 relative overflow-hidden">
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full max-w-sm sm:max-w-md mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
            <img
              src={heroImages[0]}
              alt="Fitness community"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl sm:text-7xl lg:text-[6.5rem] font-black text-black tracking-tighter text-center uppercase leading-[0.85] -mt-12 sm:-mt-16 relative z-10"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          <span className="block">BE THE</span>
          <span className="block ml-12 sm:ml-20">MOVEMENT</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-black/70 text-base sm:text-lg mt-8 max-w-md mx-auto leading-relaxed italic"
        >
          Turn sweat and movement into community.<br />
          Discover what moves you. Build what moves others.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-black/50 text-sm mt-3 max-w-lg mx-auto"
        >
          Create professional experiences that practically run themselves and reach thousands of ready-to-sweat participants instantly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 mt-8"
        >
          <Link
            to="/discover"
            className="bg-black text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-black/90 transition-all hover:scale-105 text-center"
          >
            Explore experiences
          </Link>
          <button className="border-2 border-black/80 text-black px-8 py-4 rounded-full text-base font-semibold hover:bg-black hover:text-white transition-all text-center">
            Host an experience
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} className="text-black/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function MarqueeSection() {
  const doubledImages = [...marqueeImages, ...marqueeImages]

  return (
    <section className="py-16 bg-white overflow-hidden">
      <FadeInSection>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-black px-4 max-w-3xl mx-auto mb-4">
          A world of movement right outside your door
        </h2>
        <p className="text-center text-black/60 text-lg max-w-2xl mx-auto px-4 mb-12">
          From sunrise yoga to sunset runs, cold plunge socials to pilates classes, fitness festivals to pickleball leagues — your city is alive with movement.
        </p>
      </FadeInSection>

      <div className="relative">
        <div className="flex gap-4 animate-marquee" style={{ width: 'max-content' }}>
          {doubledImages.map((img, i) => (
            <div key={i} className="w-64 h-44 rounded-2xl overflow-hidden flex-shrink-0">
              <img src={img} alt="Fitness activity" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <FadeInSection className="text-center mt-10">
        <Link
          to="/discover"
          className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-black/90 transition-all hover:scale-105"
        >
          Explore nearby
        </Link>
      </FadeInSection>
    </section>
  )
}

function FeaturedInSection() {
  return (
    <section className="py-12 bg-white border-t border-black/5">
      <FadeInSection>
        <p className="text-center text-black/40 text-sm font-semibold uppercase tracking-widest mb-8">
          Featured in
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 px-4 opacity-40">
          {['TechCrunch', 'Forbes', 'Inc.', 'Bloomberg', 'FastCo'].map(name => (
            <span key={name} className="text-xl sm:text-2xl font-bold text-black tracking-tight">{name}</span>
          ))}
        </div>
      </FadeInSection>
    </section>
  )
}

function BuildFindSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <FadeInSection>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] mb-8">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&h=500&fit=crop"
                alt="Build your community"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-black mb-4">Build What Moves You</h3>
            <p className="text-black/60 text-lg leading-relaxed">
              Whether you're a yoga teacher, run club captain, or gym owner, Levpals helps you build a community that moves with you. Handle bookings, grow your following, and turn your passion into profit — all in one place.
            </p>
            <button className="mt-6 text-black font-semibold underline underline-offset-4 hover:text-black/70 transition-colors text-lg">
              Grow your community →
            </button>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] mb-8">
              <img
                src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=700&h=500&fit=crop"
                alt="Find your crew"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-black mb-4">Find What Moves You</h3>
            <p className="text-black/60 text-lg leading-relaxed">
              The post-workout high. The unexpected friend you made in class. That unstoppable feeling after crushing a tough session. Levpals is built for finding experiences that move you, inside and out.
            </p>
            <button className="mt-6 text-black font-semibold underline underline-offset-4 hover:text-black/70 transition-colors text-lg">
              Find your crew →
            </button>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

function CommunityTypesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-black mb-16">
            Built for every kind<br />of fitness community
          </h2>
        </FadeInSection>

        <div className="flex flex-col gap-16">
          {communityTypes.map((type, i) => (
            <FadeInSection key={type.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="rounded-3xl overflow-hidden aspect-[4/3] mb-6 max-w-lg mx-auto">
                  <img src={type.image} alt={type.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-3">{type.title}</h3>
                <p className="text-black/60 text-lg max-w-md mx-auto">{type.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function BusinessFeaturesSection() {
  const features = [
    {
      title: 'Build your business',
      description: 'Transform one-time participants into loyal Pals. Create the connected community you\'ve always wanted with tools that actually work.',
    },
    {
      title: 'Fill every experience',
      description: 'Stop searching for participants. Get discovered by over 1 million ready-to-move Pals instantly. We invest in your growth so you don\'t have to.',
    },
    {
      title: 'Grow like a pro',
      description: 'Replace expensive tools and extractive platforms with one simple solution. Pay only when you earn, with complete control over fees.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature, i) => (
          <FadeInSection key={feature.title} delay={i * 0.1} className="mb-20 last:mb-0">
            <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
              <div className="flex-1">
                <h3 className="text-3xl sm:text-4xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-black/60 text-lg leading-relaxed mb-6">{feature.description}</p>
                <Link
                  to="#"
                  className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-black/90 transition-all hover:scale-105"
                >
                  Get Started for Free
                </Link>
              </div>
              <div className="flex-1 max-w-md">
                <div className="bg-white rounded-3xl p-4 card-shadow">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img
                      src={marqueeImages[i + 2]}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 px-2">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-purple-200" />
                      <span className="font-semibold text-sm text-black">Court Queens</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-black/50 mt-1">
                      <span>12pm Sat, September 13th</span>
                      <span>0.6 miles away</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeInSection key={t.name} delay={i * 0.15}>
              <div className="bg-gray-50 rounded-3xl p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-black text-lg">{t.name}</h4>
                    <p className="text-black/50 text-sm">{t.location}</p>
                    <p className="text-purple-600 text-sm font-medium">{t.community}</p>
                  </div>
                </div>
                <p className="text-black/70 leading-relaxed flex-1 text-[15px]">"{t.quote}"</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function InvestorsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-16">
            Backed by icons of tech, media, and movement
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
          {investors.map((inv, i) => (
            <FadeInSection key={inv.name} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center">
                <img
                  src={inv.avatar}
                  alt={inv.name}
                  className="w-28 h-28 rounded-full object-cover grayscale mb-4"
                />
                <h4 className="font-bold text-black text-lg">{inv.name}</h4>
                <p className="text-black/50 text-sm">{inv.title}</p>
                <p className="text-black/50 text-sm">{inv.company}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="gradient-cta py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <FadeInSection>
          <div className="bg-white rounded-3xl p-10 sm:p-16">
            <div className="flex justify-center mb-6">
              <svg className="w-12 h-12" viewBox="0 0 32 32" fill="none">
                <path d="M16 4C12 4 9 6 7 8L4 11c-2 2-3 5-3 8s1 6 3 8 5 3 7 3c2 0 4-1 6-2l4-3c2-1 3-3 3-5s0-4-1-6l-2-3c-1-2-2-3-4-4-1-1-2-2-1-4z" fill="#000" />
                <path d="M24 3c-2 0-3 1-4 2l-2 2c2 0 3 1 4 3l2 2c1 1 2 3 2 4 1-1 1-2 1-4 0-3-1-5-3-7l-2-2z" fill="#000" opacity="0.8" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              Ready to transform your fitness business?
            </h2>
            <p className="text-black/60 text-lg mb-8">
              Join thousands of community builders who've discovered the easiest way to host and grow their communities today
            </p>
            <Link
              to="#"
              className="inline-block bg-black text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-black/90 transition-all hover:scale-105 mb-4"
            >
              Get Started for Free
            </Link>
            <br />
            <a href="#" className="text-black font-semibold underline underline-offset-4 hover:text-black/70 transition-colors">
              Book a demo
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="light" />
      <HeroSection />
      <MarqueeSection />
      <FeaturedInSection />
      <BuildFindSection />
      <CommunityTypesSection />
      <BusinessFeaturesSection />
      <TestimonialsSection />
      <InvestorsSection />
      <CTASection />
      <Footer variant="light" />
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isFloating, setIsFloating] = useState(false)

  useEffect(() => {
    const THRESHOLD = 80
    let ticking = false

    const update = () => {
      const next = window.scrollY > THRESHOLD
      if (next !== isFloating) {
        setIsFloating(next)
      }
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        update()
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isFloating])

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all`}
      style={{
        paddingBlock: isFloating ? 'var(--space-2xs)' : '0',
        backgroundColor: isFloating ? 'transparent' : 'oklch(14% 0.008 220 / 0.62)',
        borderBottom: isFloating ? '1px solid transparent' : '1px solid var(--color-rule)',
        backdropFilter: isFloating ? 'blur(0)' : 'saturate(1.4) blur(14px)',
        transitionDuration: '520ms',
        transitionTimingFunction: 'var(--ease-out)',
      }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{
          maxWidth: isFloating ? '58rem' : '80rem',
          minHeight: isFloating ? '52px' : '60px',
          paddingBlock: isFloating ? '4px' : '12px',
          paddingInline: 'clamp(1rem, 4vw, 2rem)',
          borderRadius: isFloating ? 'var(--radius-full)' : '0',
          backgroundColor: isFloating ? 'oklch(18% 0.010 220 / 0.82)' : 'transparent',
          backdropFilter: isFloating ? 'blur(18px)' : 'blur(0)',
          boxShadow: isFloating
            ? '0 8px 32px oklch(12% 0.012 220 / 0.4), 0 0 0 1px oklch(30% 0.008 220 / 0.3) inset'
            : 'none',
          transform: isFloating ? 'translateY(12px)' : 'translateY(0)',
          transitionDuration: '520ms',
          transitionTimingFunction: 'var(--ease-out)',
          transitionProperty: 'max-width, min-height, padding-block, border-radius, background-color, backdrop-filter, box-shadow, transform',
        }}
      >
        {/* Wordmark */}
        <Link
          to="/"
          className="font-semibold text-lg tracking-tight"
          style={{
            fontFamily: 'var(--font-wordmark)',
            color: 'var(--color-ink)',
            letterSpacing: '-0.015em',
            textDecoration: 'none',
          }}
        >
          Zaryab Lead Solutions
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="text-sm font-medium transition-colors whitespace-nowrap"
              style={({ isActive }) => ({
                color: isActive ? 'var(--color-accent)' : 'var(--color-muted)',
              })}
              onMouseEnter={(e) => {
                if (!e.target.className.includes('active')) {
                  e.target.style.color = 'var(--color-ink)'
                }
              }}
              onMouseLeave={(e) => {
                if (!e.target.className.includes('active')) {
                  e.target.style.color = 'var(--color-muted)'
                }
              }}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.upwork.com/freelancers/~01a1b2c3d4e5f6g7h8"
            target="_blank"
            rel="noopener noreferrer"
            className="chip"
          >
            Hire Me
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => {
              const menu = document.getElementById('mobile-menu')
              menu.classList.toggle('hidden')
            }}
            aria-label="Toggle menu"
            style={{ color: 'var(--color-muted)' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 5h14M3 10h14M3 15h14" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="hidden md:hidden"
        style={{
          padding: 'var(--space-sm)',
          marginTop: 'var(--space-xs)',
          marginInline: 'clamp(1rem, 4vw, 2rem)',
          backgroundColor: 'oklch(18% 0.010 220 / 0.95)',
          backdropFilter: 'blur(18px)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-rule)',
        }}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => {
                document.getElementById('mobile-menu').classList.add('hidden')
              }}
              className="text-sm font-medium py-2 px-3 rounded-md transition-colors"
              style={({ isActive }) => ({
                color: isActive ? 'var(--color-accent)' : 'var(--color-muted)',
                backgroundColor: isActive ? 'var(--color-paper-3)' : 'transparent',
              })}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar
import React from "react"
import { Link } from "gatsby"
import { useFirebase } from "../hooks/useFirebase"

const Header = () => {
  const { logEvent } = useFirebase()

  const handleNavClick = (destination) => {
    logEvent('navigation', { 
      destination: destination,
      source: 'header'
    })
  }

  return (
    <header className="site-header">
      <div className="container">
        <nav>
          <div className="header">
            <Link to="/" onClick={() => handleNavClick('home')}>
              <img
                className="header-logo"
                src="/round-logo-goggles.png"
                alt="StashDog Logo"
              />
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }} onClick={() => handleNavClick('home')}>
              <p className="header-text">StashDog</p>
            </Link>
          </div>
          <div className="nav-links">
            <Link 
              to="/features" 
              className="nav-link"
              onClick={() => handleNavClick('features')}
            >
              Features
            </Link>
            <a 
              href="mailto:mail@dogfoodlab.io?subject=StashDog%20Interest" 
              className="nav-link"
              onClick={() => handleNavClick('contact')}
            >
              Get Updates
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
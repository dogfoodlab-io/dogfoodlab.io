import React from "react"
import { Link } from "gatsby"
import { useFirebase } from "../hooks/useFirebase"

const Footer = () => {
  const { logEvent } = useFirebase()

  const handleFooterClick = (destination) => {
    logEvent('navigation', { 
      destination: destination,
      source: 'footer'
    })
  }

  return (
    <footer className="footer">
      <div className="container">
        <p>Thanks for checking out StashDog. Now go organize your life, you beautiful disaster.</p>
        <p>
          Contact us at:{" "}
          <a 
            href="mailto:mail@dogfoodlab.io"
            onClick={() => logEvent('contact_click', { page: 'footer' })}
          >
            mail@dogfoodlab.io
          </a>
        </p>
        <p>
          &copy; {new Date().getFullYear()} Dogfood Lab LLC. All rights reserved.{" "}
          <Link 
            to="/privacy" 
            style={{ color: '#fcd900', marginLeft: '10px' }}
            onClick={() => handleFooterClick('privacy')}
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
import React from "react"
import "./index.css"

const IndexPage: React.FC = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Dogfood Lab</h1>
        <p className="slogan">
          Spend Less Time Doing Bullshit, More Time Making Magic
        </p>
        <p className="blurb">
          At Dogfood Lab, we're all about cutting through the everyday nonsense.
          We build smart, innovative tools that let you focus on what truly matters—
          creating moments of magic in a world full of distractions.
        </p>
      </header>

      {/* Products Section */}
      <section className="products">
        <div className="product">
          <h2>Stashdog</h2>
          <p className="tagline">
            Keep your stuff together, no matter how chaotic life gets.
          </p>
          <p className="description">
            An organizational app designed to track personal belongings—ideal for collectors, hobbyists, busy parents, roommates, and small business owners who need a better way to manage their things.
          </p>
        </div>

        <div className="product">
          <h2>Watchparty</h2>
          <p className="tagline">
            Watch, comment, and relive the magic.
          </p>
          <p className="description">
            A social app that enables timeline-aligned comments on your favorite movies and TV shows, turning every scene into a shared, unforgettable experience.
          </p>
        </div>

        <div className="product">
          <h2>Homeassistant</h2>
          <p className="tagline">
            Luxury tech for everyday homes.
          </p>
          <p className="description">
            An open platform for home automation that transforms your living space with high-end smart features, making luxury accessible and practical.
          </p>
        </div>

        <div className="product">
          <h2>10-Minute Hang</h2>
          <p className="tagline">
            Quick, real connections on the go.
          </p>
          <p className="description">
            A social app built for spontaneous, short encounters—perfect for those moments when you need a quick break or a burst of fun.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>
          Contact us at:{" "}
          <a href="mailto:mail@dogfoodlab.io">mail@dogfoodlab.io</a>
        </p>
      </footer>
    </div>
  )
}

export default IndexPage

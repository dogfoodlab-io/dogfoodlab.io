import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./index.css";

const IndexPage: React.FC = () => {
  return (
    <HelmetProvider>
      <div className="page-container">
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Chewy&family=Gabarito:wght@400..900&display=swap"
            rel="stylesheet"
          ></link>
          <title>Dogfood Lab LLC</title>
        </Helmet>

        {/* Header Section */}
        <header className="site-header">
          <div className="container">
            <nav>
              <div className="header">
                <img
                  className="header-logo"
                  src="/round-logo-goggles.png"
                  alt="Company Logo"
                />
                <p className="header-text">dogfood lab</p>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <h2>Less Time Doing Bullshit, More Time Making Magic</h2>
            <p>
              At Dogfood Lab, we're all about cutting through the everyday
              nonsense. We build smart, innovative tools that let you focus on
              what truly matters— creating moments of magic in a world full of
              distractions.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="products">
          <div className="container">
            <h2>Our Pack of Helpers</h2>
            <div className="product">
              <div className="product-header">
                <div className="product-info">
                  <h3>Stashdog</h3>
                  <p className="tagline">
                    Keep your 💩 together, no matter how chaotic life gets.
                  </p>
                </div>
                <div className="product-image-container">
                  <img
                    src="/dog1.png"
                    alt="Stashdog"
                    className="product-image"
                  />
                </div>
              </div>
              <p className="description">
                An organizational app designed to track personal
                belongings—ideal for collectors, hobbyists, busy parents,
                roommates, and small business owners who need a better way to
                manage their things.
              </p>
              <a href="#" className="cta-button">
                Learn More
              </a>
            </div>

            <div className="product">
              <div className="product-header">
                <div className="product-info">
                  <h3>Watchdog</h3>
                  <p className="tagline">
                    Watch, comment, and relive the fun.
                  </p>
                </div>
                <div className="product-image-container">
                  <img
                    src="/popcornpup1.png"
                    alt="Watchparty"
                    className="product-image"
                  />
                </div>
              </div>
              <p className="description">
                A social app that enables timeline-aligned comments on your
                favorite movies and TV shows, turning every scene and moment
                into a shared, timeless experience.
              </p>
              <a href="#" className="cta-button disabled">
                Under Construction 🚧
              </a>
            </div>

            <div className="product">
              <div className="product-header">
                <div className="product-info">
                  <h3>Housedog</h3>
                  <p className="tagline">Luxury tech for everyday homes.</p>
                </div>
                <div className="product-image-container">
                  <img
                    src="/pup5.png"
                    alt="Homeassistant"
                    className="product-image"
                  />
                </div>
              </div>
              <p className="description">
                An open platform for home automation that transforms your living
                space with high-end smart features, making luxury accessible and
                practical.
              </p>
              <a href="#" className="cta-button">
                Learn More
              </a>
            </div>

            <div className="product">
              <div className="product-header">
                <div className="product-info">
                  <h3>10-Minute Hang</h3>
                  <p className="tagline">Quick, real connections on the go.</p>
                </div>
                <div className="product-image-container">
                  <img
                    src="/pup7.png"
                    alt="10-Minute Hang"
                    className="product-image"
                  />
                </div>
              </div>
              <p className="description">
                A social app built for spontaneous, short encounters—perfect for
                those moments when you need a quick break or a burst of fun.
              </p>
              <a href="#" className="cta-button">
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="footer">
          <div className="container">
            <p>
              Contact us at:{" "}
              <a href="mailto:mail@dogfoodlab.io">mail@dogfoodlab.io</a>
            </p>
            <p>
              &copy; {new Date().getFullYear()} Dogfood Lab LLC. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
};

export default IndexPage;

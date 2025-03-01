import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./index.css";
import { useFirebase } from "../firebase";

const IndexPage: React.FC = () => {
  const { isInitialized, logEvent, getConfigValue, getConfigBoolean } = useFirebase();
  const [welcomeMessage, setWelcomeMessage] = useState<string>("Welcome to Dogfood Lab");
  const [buttonColor, setButtonColor] = useState<string>("#4285F4");
  const [showNewUI, setShowNewUI] = useState<boolean>(false);

  // Log page view when component mounts
  useEffect(() => {
    if (isInitialized) {
      // Log page view event
      logEvent('page_view', {
        page_title: 'Home Page',
        page_location: window.location.href,
        page_path: window.location.pathname
      });

      // Get A/B test values from Remote Config
      const welcomeMsg = getConfigValue('welcome_message');
      if (welcomeMsg) setWelcomeMessage(welcomeMsg);

      const btnColor = getConfigValue('button_color');
      if (btnColor) setButtonColor(btnColor);

      const newUI = getConfigBoolean('feature_flag_new_ui');
      setShowNewUI(newUI);
    }
  }, [isInitialized, logEvent, getConfigValue, getConfigBoolean]);

  // Enhanced tracking for CTA button clicks
  const handleCTAClick = (productName: string, buttonText: string, buttonPosition: string) => {
    logEvent('cta_click', {
      product_name: productName,
      button_text: buttonText,
      button_position: buttonPosition,
      page: 'home'
    });
    
    // Also log as select_content for backward compatibility
    logEvent('select_content', {
      content_type: 'product',
      content_id: productName
    });
  };

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
            {/* A/B test for welcome message */}
            <h2>{welcomeMessage}</h2>
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
                  <h3>StashDog</h3>
                  <p className="tagline">
                    Quit living like a trash gremlin. Get your shit together.
                  </p>
                </div>
                <div className="product-image-container">
                  <img
                    src="/dog1.png"
                    alt="StashDog"
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
              {/* A/B test for button color */}
              <a 
                href="/stashdog" 
                className="cta-button"
                style={{ backgroundColor: buttonColor }}
                onClick={() => handleCTAClick('stashdog', 'Learn More', 'product_card')}
              >
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
              <a 
                href="#" 
                className="cta-button disabled" 
                onClick={() => handleCTAClick('watchdog', 'Under Construction', 'product_card')}
              >
                Under Construction 🚧
              </a>
            </div>

            {/* Feature flag for new UI */}
            {showNewUI && (
              <div className="product new-product">
                <div className="product-header">
                  <div className="product-info">
                    <h3>New Product Coming Soon!</h3>
                    <p className="tagline">Stay tuned for our newest innovation.</p>
                  </div>
                  <div className="product-image-container">
                    <img
                      src="/pup3.png"
                      alt="New Product"
                      className="product-image"
                    />
                  </div>
                </div>
                <p className="description">
                  We're working on something exciting that will change how you interact with your digital world.
                </p>
                <a 
                  href="#" 
                  className="cta-button" 
                  style={{ backgroundColor: buttonColor }} 
                  onClick={() => handleCTAClick('new_product', 'Get Notified', 'product_card')}
                >
                  Get Notified
                </a>
              </div>
            )}

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
              <a 
                href="#" 
                className="cta-button" 
                style={{ backgroundColor: buttonColor }} 
                onClick={() => handleCTAClick('housedog', 'Learn More', 'product_card')}
              >
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
              <a 
                href="#" 
                className="cta-button" 
                style={{ backgroundColor: buttonColor }} 
                onClick={() => handleCTAClick('10_minute_hang', 'Learn More', 'product_card')}
              >
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
              <a 
                href="mailto:mail@dogfoodlab.io" 
                onClick={() => logEvent('contact_click', { page: 'home' })}
              >
                mail@dogfoodlab.io
              </a>
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

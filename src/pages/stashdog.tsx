import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "gatsby";
import "./index.css";
import { useFirebase } from "../firebase";
import { activeStashdogStrings } from "../templates/config";

const StashdogPage: React.FC = () => {
  const { isInitialized, logEvent } = useFirebase();

  // Log page view when component mounts
  useEffect(() => {
    if (isInitialized) {
      // Log page view event
      logEvent('page_view', {
        page_title: 'StashDog Page',
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    }
  }, [isInitialized, logEvent]);

  // Enhanced tracking for feature clicks
  const handleFeatureClick = (featureName: string) => {
    logEvent('feature_click', {
      feature_name: featureName,
      page: 'stashdog'
    });
    
    // Also log as select_content for backward compatibility
    logEvent('select_content', {
      content_type: 'feature',
      content_id: featureName
    });
  };

  // Enhanced tracking for CTA button clicks
  const handleCTAClick = (ctaType: string, buttonText: string, buttonPosition: string) => {
    logEvent('cta_click', {
      cta_type: ctaType,
      button_text: buttonText,
      button_position: buttonPosition,
      page: 'stashdog'
    });
    
    // Also log as generate_lead for backward compatibility
    logEvent('generate_lead', {
      cta_type: ctaType
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
          <title>StashDog - Dogfood Lab LLC</title>
        </Helmet>

        {/* Header Section */}
        <header className="site-header">
          <div className="container">
            <nav>
              <div className="header">
                <Link to="/">
                  <img
                    className="header-logo"
                    src="/round-logo-goggles.png"
                    alt="Company Logo"
                  />
                </Link>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <p className="header-text">dogfood lab</p>
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="stashdog-hero">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'center', margin: '0rem 2rem'}}>
              <img
                src="/lab1.png"
                alt="StashDog"
                style={{ maxWidth: '200px', height: 'auto' }}
              />
            </div>
            <h2>{activeStashdogStrings.welcome.title}</h2>
            <p>{activeStashdogStrings.welcome.description}</p>
            {/* <div style={{ margin: '2rem 0' }}>
              <a 
                href="#" 
                className="cta-button"
                onClick={() => handleCTAClick('primary', activeStashdogStrings.get_started.call_to_action.sign_up, 'hero')}
              >
                {activeStashdogStrings.get_started.call_to_action.sign_up}
              </a>
            </div> */}
          </div>
        </section>

        {/* Main Content Sections */}
        <section className="products">
          <div className="container">
            <h2>{activeStashdogStrings.discover.title}</h2>
            
            {/* Getting Started Chaos Section */}
            <div className="product">
              <div className="product-header">
                <div className="product-info">
                  <h3>{activeStashdogStrings.discover.features.getting_started_chaos.title}</h3>
                </div>
              </div>
              <p className="description">
                {activeStashdogStrings.discover.features.getting_started_chaos.description}
              </p>
              <a 
                href="#" 
                className="cta-button"
                onClick={() => {
                  handleFeatureClick('getting_started_chaos');
                  handleCTAClick('getting_started', activeStashdogStrings.get_started.call_to_action.learn_more, 'feature_section');
                }}
              >
                {activeStashdogStrings.get_started.call_to_action.learn_more}
              </a>
            </div>

            {/* Inventory Management Section */}
            <div className="product">
              <div className="product-header">
                <div className="product-info">
                  <h3>{activeStashdogStrings.discover.features.inventory_management.title}</h3>
                </div>
              </div>
              <p className="description">
                {activeStashdogStrings.discover.features.inventory_management.description}
              </p>
              <a 
                href="#" 
                className="cta-button"
                onClick={() => {
                  handleFeatureClick('inventory_management');
                  handleCTAClick('inventory', activeStashdogStrings.get_started.call_to_action.learn_more, 'feature_section');
                }}
              >
                {activeStashdogStrings.get_started.call_to_action.learn_more}
              </a>
            </div>

            {/* Location Tracking Section */}
            <div className="product">
              <div className="product-header">
                <div className="product-info">
                  <h3>{activeStashdogStrings.discover.features.location_tracking.title}</h3>
                </div>
              </div>
              <p className="description">
                {activeStashdogStrings.discover.features.location_tracking.description}
              </p>
              <a 
                href="#" 
                className="cta-button"
                onClick={() => {
                  handleFeatureClick('location_tracking');
                  handleCTAClick('location', activeStashdogStrings.get_started.call_to_action.learn_more, 'feature_section');
                }}
              >
                {activeStashdogStrings.get_started.call_to_action.learn_more}
              </a>
            </div>

            {/* Retrieval Section */}
            <div className="product">
              <div className="product-header">
                <div className="product-info">
                  <h3>{activeStashdogStrings.discover.features.retrieval.title}</h3>
                </div>
              </div>
              <p className="description">
                {activeStashdogStrings.discover.features.retrieval.description}
              </p>
              <a 
                href="#" 
                className="cta-button"
                onClick={() => {
                  handleFeatureClick('retrieval');
                  handleCTAClick('retrieval', activeStashdogStrings.get_started.call_to_action.learn_more, 'feature_section');
                }}
              >
                {activeStashdogStrings.get_started.call_to_action.learn_more}
              </a>
            </div>

            {/* Categories Section */}
            <div className="product">
              <div className="product-header">
                <div className="product-info">
                  <h3>{activeStashdogStrings.discover.features.categories.title}</h3>
                </div>
              </div>
              <p className="description">
                {activeStashdogStrings.discover.features.categories.description}
              </p>
              <a 
                href="#" 
                className="cta-button"
                onClick={() => {
                  handleFeatureClick('categories');
                  handleCTAClick('categories', activeStashdogStrings.get_started.call_to_action.learn_more, 'feature_section');
                }}
              >
                {activeStashdogStrings.get_started.call_to_action.learn_more}
              </a>
            </div>

            {/* Family Sharing Section */}
            <div className="product">
              <div className="product-header">
                <div className="product-info">
                  <h3>{activeStashdogStrings.discover.features.family_sharing.title}</h3>
                </div>
              </div>
              <p className="description">
                {activeStashdogStrings.discover.features.family_sharing.description}
              </p>
              <a 
                href="#" 
                className="cta-button"
                onClick={() => {
                  handleFeatureClick('family_sharing');
                  handleCTAClick('family_sharing', activeStashdogStrings.get_started.call_to_action.learn_more, 'feature_section');
                }}
              >
                {activeStashdogStrings.get_started.call_to_action.learn_more}
              </a>
            </div>

            {/* Smart Assistant Section */}
            <div className="product">
              <div className="product-header">
                <div className="product-info">
                  <h3>{activeStashdogStrings.discover.features.smart_assistant.title}</h3>
                </div>
              </div>
              <p className="description">
                {activeStashdogStrings.discover.features.smart_assistant.description}
              </p>
              <a 
                href="#" 
                className="cta-button"
                onClick={() => {
                  handleFeatureClick('smart_assistant');
                  handleCTAClick('smart_assistant', activeStashdogStrings.get_started.call_to_action.learn_more, 'feature_section');
                }}
              >
                {activeStashdogStrings.get_started.call_to_action.learn_more}
              </a>
            </div>

            {/* Why Choose Section */}
            {/* <div className="product" style={{ maxWidth: '800px', margin: '2rem auto' }}>
              <h2>{activeStashdogStrings.why_choose.title}</h2>
              <ul style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                {activeStashdogStrings.why_choose.benefits.map((benefit, index) => (
                  <li key={index}><strong>{benefit.title}:</strong> {benefit.description}</li>
                ))}
              </ul>
            </div> */}

            {/* Testimonials Section */}
            <div style={{ margin: '3rem 0', width: '100%', maxWidth: '100%' }}>
              <h2 style={{ marginBottom: '2rem' }}>{activeStashdogStrings.testimonials.title}</h2>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                gap: '2rem', 
                margin: '2rem 0',
                width: '100%'
              }}>
                {activeStashdogStrings.testimonials.reviews.map((review, index) => (
                  <div key={index} style={{ 
                    flex: '1 1 300px', 
                    maxWidth: '400px', 
                    padding: '1.5rem', 
                    borderRadius: '10px', 
                    backgroundColor: '#333',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  className="testimonial-card"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                      <img 
                        src={review.image ? `/${review.image}` : index === 0 ? "/Face-Young-Woman.webp" : "/Face-Black.webp"} 
                        alt={`${review.author} portrait`}
                        style={{ 
                          width: '70px', 
                          height: '70px', 
                          borderRadius: '50%', 
                          marginRight: '1rem',
                          border: '3px solid #fcd900',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                        }}
                      />
                      <p style={{ 
                        fontWeight: 'bold', 
                        fontSize: '1.1rem', 
                        margin: 0,
                        color: '#fcd900'
                      }}>{review.author}</p>
                    </div>
                    <p style={{ 
                      fontStyle: 'italic', 
                      fontSize: '1.1rem',
                      lineHeight: '1.6',
                      flex: '1',
                      color: 'white'
                    }}>
                      "{review.text}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div style={{ margin: '3rem 0', textAlign: 'center' }}>
              <h2>{activeStashdogStrings.get_started.title}</h2>
              <p>{activeStashdogStrings.get_started.description}</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', margin: '2rem 0' }}>
                <a 
                  href="#" 
                  className="cta-button"
                  onClick={() => handleCTAClick('sign_up', activeStashdogStrings.get_started.call_to_action.sign_up, 'footer_cta')}
                >
                  {activeStashdogStrings.get_started.call_to_action.sign_up}
                </a>
                <a 
                  href="#" 
                  className="cta-button"
                  onClick={() => handleCTAClick('learn_more', activeStashdogStrings.get_started.call_to_action.learn_more, 'footer_cta')}
                >
                  {activeStashdogStrings.get_started.call_to_action.learn_more}
                </a>
              </div>
              <div style={{ margin: '2rem 0' }}>
                <Link 
                  to="/" 
                  className="cta-button" 
                  style={{ backgroundColor: '#fcd900', color: '#333' }}
                  onClick={() => logEvent('navigation', { destination: 'home', source: 'stashdog' })}
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="footer">
          <div className="container">
            <p>{activeStashdogStrings.thank_you}</p>
            <p>
              Contact us at:{" "}
              <a 
                href="mailto:mail@dogfoodlab.io"
                onClick={() => logEvent('contact_click', { page: 'stashdog' })}
              >
                mail@dogfoodlab.io
              </a>
            </p>
            <p>
              &copy; {new Date().getFullYear()} Dogfood Lab LLC. All rights
              reserved. <Link to="/stashdog/privacy" style={{ color: '#fcd900', marginLeft: '10px' }} onClick={() => logEvent('navigation', { destination: 'privacy', source: 'stashdog_footer' })}>Privacy Policy</Link>
            </p>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
};

export default StashdogPage; 
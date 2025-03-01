import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "gatsby";
import "./index.css";
import { useFirebase } from "../firebase";

const StashdogPage: React.FC = () => {
  const { isInitialized, logEvent } = useFirebase();

  // Log page view when component mounts
  useEffect(() => {
    if (isInitialized) {
      // Log page view event
      logEvent('page_view', {
        page_title: 'Stashdog Page',
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
          <title>Stashdog - Dogfood Lab LLC</title>
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
        <section className="hero">
          <div className="container">
            <h2>Say hello to Stashdog – Your Ultimate Digital Guardian!</h2>
            <p>
              Secure, organize, and retrieve your valuable files and assets with unmatched ease. 
              Protect your digital treasures with cutting-edge security and a user-friendly interface.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
              <img
                src="/dog1.png"
                alt="Stashdog"
                style={{ maxWidth: '300px', height: 'auto' }}
              />
            </div>
            <div style={{ margin: '2rem 0' }}>
              <a 
                href="#" 
                className="cta-button"
                onClick={() => handleCTAClick('primary', 'Get Started Today', 'hero')}
              >
                Get Started Today
              </a>
            </div>
          </div>
        </section>

        {/* Main Content Sections */}
        <section className="products">
          <div className="container">
            {/* Security Section */}
            <div className="product">
              <div className="product-header">
                <div className="product-info">
                  <h3>Lock Down Your Digital Life with Ironclad Security</h3>
                </div>
              </div>
              <p className="description">
                Worried about data breaches or lost files? StashDog uses military-grade encryption 
                and real-time backups to ensure your data is always protected. Trust your digital 
                assets with a service that treats them like family.
              </p>
              <a 
                href="#" 
                className="cta-button"
                onClick={() => {
                  handleFeatureClick('security');
                  handleCTAClick('security', 'Secure Your Assets Now', 'feature_section');
                }}
              >
                Secure Your Assets Now
              </a>
            </div>

            {/* Convenience Section */}
            <div className="product">
              <div className="product-header">
                <div className="product-info">
                  <h3>Streamline Your Digital World in a Snap</h3>
                </div>
              </div>
              <p className="description">
                Say goodbye to messy folders and endless scrolling. With StashDog's intuitive design 
                and powerful search tools, organizing and accessing your files has never been easier. 
                Focus on what truly matters—let us handle the clutter.
              </p>
              <a 
                href="#" 
                className="cta-button"
                onClick={() => {
                  handleFeatureClick('organization');
                  handleCTAClick('organization', 'Experience Effortless Organization', 'feature_section');
                }}
              >
                Experience Effortless Organization
              </a>
            </div>

            {/* Innovation Section */}
            <div className="product">
              <div className="product-header">
                <div className="product-info">
                  <h3>Step into the Future of Digital Management</h3>
                </div>
              </div>
              <p className="description">
                Harness the power of next-generation technology with StashDog. Our platform combines 
                state-of-the-art security with smart automation to give you a seamless, innovative 
                experience. Join the digital revolution today.
              </p>
              <a 
                href="#" 
                className="cta-button"
                onClick={() => {
                  handleFeatureClick('innovation');
                  handleCTAClick('innovation', 'Join the Innovation', 'feature_section');
                }}
              >
                Join the Innovation
              </a>
            </div>

            {/* Community Section */}
            <div className="product">
              <div className="product-header">
                <div className="product-info">
                  <h3>Join a Growing Pack of Satisfied Users</h3>
                </div>
              </div>
              <p className="description">
                Thousands of professionals, creatives, and small business owners have discovered the 
                peace of mind that comes with using StashDog. Experience a community built on trust, 
                reliability, and innovation—where every file is treated like a treasure.
              </p>
              <a 
                href="#" 
                className="cta-button"
                onClick={() => {
                  handleFeatureClick('community');
                  handleCTAClick('community', 'Join the Pack Today', 'feature_section');
                }}
              >
                Join the Pack Today
              </a>
            </div>

            {/* Features Section */}
            <div className="product" style={{ maxWidth: '800px', margin: '2rem auto' }}>
              <h2>What Makes StashDog Stand Out?</h2>
              <ul style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <li><strong>Robust Security:</strong> Enjoy military-grade encryption and real-time automated backups to keep your files safe.</li>
                <li><strong>User-Friendly Interface:</strong> Navigate effortlessly with a clean, intuitive design suitable for everyone.</li>
                <li><strong>Cross-Platform Access:</strong> Access your files anytime, anywhere—from desktop to mobile.</li>
                <li><strong>Lightning-Fast Search:</strong> Find your documents, photos, or projects in seconds with our advanced search functionality.</li>
                <li><strong>Affordable Plans:</strong> Get premium security and convenience without breaking the bank.</li>
                <li><strong>Seamless Integration:</strong> Easily sync with your favorite apps and tools for a unified digital experience.</li>
              </ul>
            </div>

            {/* Testimonials Section */}
            <h2>What Our Users Say</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', margin: '2rem 0' }}>
              <div style={{ 
                flex: '1 1 300px', 
                maxWidth: '400px', 
                padding: '1.5rem', 
                borderRadius: '10px', 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
              }}>
                <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
                  "StashDog has completely transformed the way I manage my digital assets. The security features give me peace of mind, and the interface is so intuitive!"
                </p>
                <p style={{ textAlign: 'right', fontWeight: 'bold' }}>— Alex R., Entrepreneur</p>
              </div>
              
              <div style={{ 
                flex: '1 1 300px', 
                maxWidth: '400px', 
                padding: '1.5rem', 
                borderRadius: '10px', 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
              }}>
                <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
                  "I never thought organizing my files could be this effortless. StashDog's smart automation and lightning-fast search saved me hours every week."
                </p>
                <p style={{ textAlign: 'right', fontWeight: 'bold' }}>— Jamie L., Freelancer</p>
              </div>
              
              <div style={{ 
                flex: '1 1 300px', 
                maxWidth: '400px', 
                padding: '1.5rem', 
                borderRadius: '10px', 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
              }}>
                <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
                  "Reliable, secure, and easy to use—StashDog is exactly what my business needed. I now focus on growth, not worrying about data loss."
                </p>
                <p style={{ textAlign: 'right', fontWeight: 'bold' }}>— Taylor M., Small Business Owner</p>
              </div>
            </div>

            {/* CTA Section */}
            <div style={{ margin: '3rem 0', textAlign: 'center' }}>
              <h2>Ready to Secure Your Digital World?</h2>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', margin: '2rem 0' }}>
                <a 
                  href="#" 
                  className="cta-button"
                  onClick={() => handleCTAClick('trial', 'Start Your Free Trial', 'footer_cta')}
                >
                  Start Your Free Trial
                </a>
                <a 
                  href="#" 
                  className="cta-button"
                  onClick={() => handleCTAClick('demo', 'Request a Demo', 'footer_cta')}
                >
                  Request a Demo
                </a>
                <a 
                  href="#" 
                  className="cta-button"
                  onClick={() => handleCTAClick('plans', 'Discover Our Plans', 'footer_cta')}
                >
                  Discover Our Plans
                </a>
              </div>
              <div style={{ margin: '2rem 0' }}>
                <Link 
                  to="/" 
                  className="cta-button" 
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
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
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
};

export default StashdogPage; 
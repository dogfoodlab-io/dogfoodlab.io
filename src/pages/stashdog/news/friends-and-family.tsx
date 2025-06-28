import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "gatsby";
import "../../index.css";
import { useFirebase } from "../../../firebase";

const FriendsAndFamilyPage: React.FC = () => {
  const { isInitialized, logEvent } = useFirebase();

  // Log page view when component mounts
  useEffect(() => {
    if (isInitialized) {
      logEvent('page_view', {
        page_title: 'StashDog Friends & Family',
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    }
  }, [isInitialized, logEvent]);

  const handleCTAClick = (ctaType: string, buttonText: string) => {
    logEvent('cta_click', {
      cta_type: ctaType,
      button_text: buttonText,
      page: 'friends_family'
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
          />
          <title>Friends & Family Preview - StashDog - Dogfood Lab LLC</title>
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

        {/* Main Content */}
        <section className="products">
          <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="product" style={{ maxWidth: '800px', margin: '2rem auto', width: '100%' }}>
              
              {/* Header */}
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <img 
                  src="/lab1.png" 
                  alt="StashDog Logo" 
                  style={{ width: '120px', height: 'auto', marginBottom: '1rem' }}
                />
                <h1 style={{ 
                  fontSize: '2.5rem',
                  color: '#ffffff',
                  marginBottom: '0.5rem'
                }}>
                  Welcome to the StashDog Inner Circle
                </h1>
                <p style={{ 
                  fontSize: '1.2rem',
                  color: '#fcd900',
                  marginBottom: '2rem'
                }}>
                  Friends & Family Preview
                </p>
                <div style={{
                  display: 'inline-block',
                  background: 'linear-gradient(45deg, #fcd900, #ffeb3b)',
                  color: '#333',
                  padding: '0.5rem 1rem',
                  borderRadius: '25px',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  marginBottom: '2rem'
                }}>
                  🐕 EXCLUSIVE BETA ACCESS
                </div>
              </div>

              {/* Quote */}
              <div style={{
                fontStyle: 'italic',
                fontSize: '1.2rem',
                textAlign: 'center',
                margin: '2rem 0',
                padding: '1.5rem',
                background: 'rgba(252, 217, 0, 0.1)',
                borderRadius: '10px',
                borderLeft: '4px solid #fcd900',
                color: '#ffffff'
              }}>
                "Every domestic organization challenge is fundamentally an information problem disguised as a physical problem."
              </div>

              {/* Problem Section */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  color: '#fcd900',
                  marginBottom: '1rem'
                }}>
                  The Problem We're Solving
                </h2>
                <p style={{ marginBottom: '1rem', color: '#ffffff' }}>
                  You know that feeling when you're standing in your home, staring at your stuff, and asking:
                </p>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#ffffff' }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <strong>"Where did I put that thing?"</strong> (It's somewhere... but where?)
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <strong>"Do I already have one of these?"</strong> (Standing in Target, genuinely unsure)
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <strong>"What's actually in that storage box?"</strong> (Mystery box #47)
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <strong>"Who has my drill/book/whatever?"</strong> (The lending black hole)
                  </li>
                </ul>
                <p style={{ marginBottom: '1rem', color: '#ffffff' }}>
                  We've all been there. Your stuff owns you instead of the other way around. <span style={{
                    background: '#fcd900',
                    color: '#333',
                    padding: '0.2rem 0.4rem',
                    borderRadius: '4px',
                    fontWeight: 'bold'
                  }}>StashDog turns that chaos into clarity</span> by transforming your physical belongings into searchable, manageable digital information.
                </p>
              </div>

              {/* Vision Section */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  color: '#fcd900',
                  marginBottom: '1rem'
                }}>
                  Our Vision: Physical → Digital
                </h2>
                <p style={{ marginBottom: '1rem', color: '#ffffff' }}>
                  StashDog isn't just another organization app. We're building the <span style={{
                    background: '#fcd900',
                    color: '#333',
                    padding: '0.2rem 0.4rem',
                    borderRadius: '4px',
                    fontWeight: 'bold'
                  }}>Google for your stuff</span> – a system that makes the invisible visible, the chaotic searchable, and the overwhelming manageable.
                </p>
              </div>

              {/* What We Need */}
              <div style={{
                marginBottom: '3rem',
                padding: '2rem',
                background: 'rgba(76, 175, 80, 0.1)',
                borderRadius: '15px',
                borderLeft: '4px solid #4caf50'
              }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  color: '#fcd900',
                  marginBottom: '1rem'
                }}>
                  What We Need From You
                </h2>
                <p style={{ marginBottom: '1rem', color: '#ffffff' }}>
                  As our friends and family beta testers, you're not just trying an app – you're helping shape the future of home organization. Here's what would be incredibly valuable:
                </p>
                
                <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '1rem', marginTop: '1.5rem' }}>
                  🧪 Real-World Testing
                </h3>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#ffffff' }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    Use StashDog for actual organization projects (moving, cleaning, decluttering)
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    Add at least 20-30 items to really test the search and organization features
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    Try the family sharing features if you live with others
                  </li>
                </ul>

                <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '1rem', marginTop: '1.5rem' }}>
                  💬 Honest Feedback
                </h3>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#ffffff' }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    What feels clunky or confusing?
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    Which features do you actually use vs. ignore?
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    What's missing that would make this genuinely useful for you?
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    How does it compare to your current "system" (or lack thereof)?
                  </li>
                </ul>

                <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '1rem', marginTop: '1.5rem' }}>
                  🐛 Bug Hunting
                </h3>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#ffffff' }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    Report anything that breaks, freezes, or just feels "off"
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    Test on different devices if you have them
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    Try edge cases (what happens when you upload 100 photos?)
                  </li>
                </ul>
              </div>

              {/* What You Get */}
              <div style={{
                marginBottom: '3rem',
                padding: '2rem',
                background: 'rgba(33, 150, 243, 0.1)',
                borderRadius: '15px',
                borderLeft: '4px solid #2196f3'
              }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  color: '#fcd900',
                  marginBottom: '1rem'
                }}>
                  What You Get
                </h2>
                
                <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '1rem' }}>
                  🆓 Forever Free Access to Stashdog Plus
                </h3>
                <p style={{ marginBottom: '1rem', color: '#ffffff' }}>
                  As a thank you for your help, you'll get lifetime access to StashDog Plus features, even after we launch all of the paid tiers.
                </p>

                <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '1rem', marginTop: '1.5rem' }}>
                  🎯 Direct Line to the Developer
                </h3>
                <p style={{ marginBottom: '1rem', color: '#ffffff' }}>
                  Your feedback goes straight to me (hi! 👋). Feature requests from F&F testers get priority consideration.
                </p>

                <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '1rem', marginTop: '1.5rem' }}>
                  🚀 Early Access to Everything
                </h3>
                <p style={{ marginBottom: '1rem', color: '#ffffff' }}>
                  New features, integrations, and updates – you'll see them first and help shape their development.
                </p>

                <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '1rem', marginTop: '1.5rem' }}>
                  📈 A Tool That Actually Works
                </h3>
                <p style={{ marginBottom: '1rem', color: '#ffffff' }}>
                  Most importantly, you'll end up with a genuinely useful tool for managing your stuff, refined based on real-world use.
                </p>
              </div>

              {/* Timeline */}
              <div style={{
                marginBottom: '3rem',
                padding: '2rem',
                background: 'rgba(156, 39, 176, 0.1)',
                borderRadius: '15px',
                borderLeft: '4px solid #9c27b0'
              }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  color: '#fcd900',
                  marginBottom: '1rem'
                }}>
                  Timeline & Expectations
                </h2>
                
                <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '1rem' }}>
                  📅 Beta Period: April - June 2025
                </h3>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#ffffff' }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <strong>April:</strong> Initial release with core features
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <strong>May:</strong> Feature refinements based on your feedback
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <strong>June:</strong> Polish and prepare for public launch
                  </li>
                </ul>

                <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '1rem', marginTop: '1.5rem' }}>
                  ⏰ Time Commitment
                </h3>
                <p style={{ marginBottom: '1rem', color: '#ffffff' }}>
                  We're not asking for a part-time job! Realistically:
                </p>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#ffffff' }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <strong>Week 1:</strong> 30 minutes to set up and add your first items
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <strong>Ongoing:</strong> Use naturally as you organize or look for things
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <strong>Monthly:</strong> 10-15 minutes to share feedback via a simple survey
                  </li>
                </ul>
              </div>

              {/* Bigger Picture */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  color: '#fcd900',
                  marginBottom: '1rem'
                }}>
                  The Bigger Picture
                </h2>
                <p style={{ marginBottom: '1rem', color: '#ffffff' }}>
                  StashDog is more than just an app – it's the beginning of making our homes smarter, our belongings more manageable, and our mental energy more available for what matters.
                </p>
                
                <p style={{ marginBottom: '1rem', color: '#ffffff' }}>
                  By helping us now, you're not just getting early access to a cool tool. You're helping create something that could genuinely improve how millions of people interact with their physical spaces.
                </p>

                <p style={{ marginBottom: '1rem', color: '#ffffff' }}>
                  Plus, when this thing takes off and we're featured in every productivity blog and home organization article, you can say <span style={{
                    background: '#fcd900',
                    color: '#333',
                    padding: '0.2rem 0.4rem',
                    borderRadius: '4px',
                    fontWeight: 'bold'
                  }}>"I helped build that"</span> – and you'll be absolutely right.
                </p>
              </div>

              {/* CTA Section */}
              <div style={{
                textAlign: 'center',
                marginTop: '3rem',
                padding: '2rem',
                background: 'rgba(252, 217, 0, 0.1)',
                borderRadius: '15px',
                border: '2px solid #fcd900'
              }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  color: '#fcd900',
                  marginBottom: '1rem'
                }}>
                  Ready to Help Shape the Future?
                </h2>
                <p style={{ marginBottom: '2rem', color: '#ffffff' }}>
                  Join us in turning physical chaos into digital clarity. Let's make finding your stuff as easy as Googling anything else.
                </p>
                
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', margin: '2rem 0' }}>
                  <a 
                    href="mailto:mail@dogfoodlab.io?subject=StashDog%20Friends%20%26%20Family%20Beta%20-%20I'm%20In!" 
                    className="cta-button"
                    onClick={() => handleCTAClick('sign_up', 'I\'m In! Sign Me Up')}
                  >
                    I'm In! Sign Me Up
                  </a>
                  <a 
                    href="mailto:mail@dogfoodlab.io?subject=StashDog%20Friends%20%26%20Family%20Beta%20-%20Questions" 
                    className="cta-button"
                    style={{ backgroundColor: 'transparent', color: '#fcd900', border: '2px solid #fcd900' }}
                    onClick={() => handleCTAClick('questions', 'I Have Questions')}
                  >
                    I Have Questions
                  </a>
                </div>
                
                <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#cccccc' }}>
                  Questions? Email us at <a href="mailto:mail@dogfoodlab.io" style={{ color: '#fcd900' }}>mail@dogfoodlab.io</a>
                </p>
              </div>

              {/* Footer */}
              <div style={{
                textAlign: 'center',
                marginTop: '3rem',
                padding: '2rem',
                borderTop: '1px solid rgba(252, 217, 0, 0.3)',
                color: '#cccccc'
              }}>
                <p style={{ marginBottom: '1rem' }}>
                  Thanks for being part of the StashDog family. Let's organize the world, one item at a time. 🐕✨
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  &copy; 2025 Dogfood Lab LLC. Made with ❤️ and a healthy dose of organizational chaos.
                </p>
                
                {/* Navigation Buttons */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '2rem 0' }}>
                  <Link 
                    to="/stashdog" 
                    className="cta-button" 
                    style={{ backgroundColor: '#fcd900', color: '#333' }}
                    onClick={() => logEvent('navigation', { destination: 'stashdog', source: 'friends_family' })}
                  >
                    Back to StashDog
                  </Link>
                  <Link 
                    to="/" 
                    className="cta-button" 
                    style={{ backgroundColor: '#fcd900', color: '#333' }}
                    onClick={() => logEvent('navigation', { destination: 'home', source: 'friends_family' })}
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};

export default FriendsAndFamilyPage;
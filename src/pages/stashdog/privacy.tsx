import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "gatsby";
import "../index.css";
import { useFirebase } from "../../firebase";
import { activeStashdogStrings } from "../../templates/config";

const StashdogPrivacyPage: React.FC = () => {
  const { isInitialized, logEvent } = useFirebase();

  // Log page view when component mounts
  useEffect(() => {
    if (isInitialized) {
      // Log page view event
      logEvent('page_view', {
        page_title: 'StashDog Privacy Policy',
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    }
  }, [isInitialized, logEvent]);

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
          <title>Privacy Policy - StashDog - Dogfood Lab LLC</title>
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

        {/* Privacy Policy Section */}
        <section className="products">
          <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="product" style={{ maxWidth: '800px', margin: '2rem auto', width: '100%' }}>
              <h1 style={{ textAlign: 'center', color: '#ffffff', marginBottom: '2rem' }}>STASHDOG PRIVACY POLICY</h1>
              <p style={{ textAlign: 'center', color: '#fcd900', marginBottom: '2rem' }}>Last Updated: March 18, 2025</p>
              
              <h2 style={{ color: '#ffffff', marginTop: '2rem' }}>INTRODUCTION</h2>
              <p style={{ color: '#ffffff' }}>
                Welcome to Stashdog ("we," "our," or "us"), a product of Dogfood Lab. At Stashdog, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application ("App").
              </p>
              <p style={{ color: '#ffffff' }}>
                Please read this Privacy Policy carefully. By accessing or using the App, you agree to the collection, use, and disclosure of your information as described in this policy. If you do not agree with our policies and practices, please do not use our App.
              </p>

              <h2 style={{ color: '#ffffff', marginTop: '2rem' }}>INFORMATION WE COLLECT</h2>
              
              <h3 style={{ color: '#ffffff', marginTop: '1.5rem' }}>Personal Information</h3>
              <p style={{ color: '#ffffff' }}>
                When you register for and use Stashdog, we collect certain personal information that you voluntarily provide to us, including:
              </p>
              <ul style={{ color: '#ffffff' }}>
                <li>Name</li>
                <li>Email address</li>
                <li>Profile information (such as username, profile picture)</li>
                <li>Account credentials (password)</li>
              </ul>

              <h3 style={{ color: '#ffffff', marginTop: '1.5rem' }}>User Content</h3>
              <p style={{ color: '#ffffff' }}>
                Our primary purpose is to help you track and manage your personal belongings. As such, we collect and store:
              </p>
              <ul style={{ color: '#ffffff' }}>
                <li>Information about your personal belongings that you choose to input</li>
                <li>Photos of your belongings that you upload</li>
                <li>Categories, tags, and descriptions you create</li>
                <li>Location information for items (if you choose to add this)</li>
              </ul>

              <h3 style={{ color: '#ffffff', marginTop: '1.5rem' }}>Automatically Collected Information</h3>
              <p style={{ color: '#ffffff' }}>
                When you use our App, we may automatically collect certain information, including:
              </p>
              <ul style={{ color: '#ffffff' }}>
                <li>Device information (such as device type, operating system version)</li>
                <li>App usage statistics</li>
                <li>Crash reports and performance data</li>
                <li>IP address</li>
              </ul>

              <h2 style={{ color: '#ffffff', marginTop: '2rem' }}>HOW WE USE YOUR INFORMATION</h2>
              <p style={{ color: '#ffffff' }}>
                We use the information we collect to:
              </p>
              <ul style={{ color: '#ffffff' }}>
                <li>Create and maintain your account</li>
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about the App, including updates and new features</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Ensure the security and integrity of our App</li>
              </ul>

              <h3 style={{ color: '#ffffff', marginTop: '1.5rem' }}>Your Personal Belongings Data</h3>
              <p style={{ color: '#ffffff' }}>
                We understand that information about your personal belongings is private and sensitive. We want to be clear about how we handle this data:
              </p>
              <ol style={{ color: '#ffffff' }}>
                <li>We do not access, analyze, or use data about your personal belongings for marketing, advertising, or any other business purpose.</li>
                <li>This data is only served back to you upon your request.</li>
                <li>This data is only shared with other users according to the permissions you explicitly set within the App.</li>
              </ol>

              <h2 style={{ color: '#ffffff', marginTop: '2rem' }}>SHARING YOUR INFORMATION</h2>
              <p style={{ color: '#ffffff' }}>
                We do not sell or rent your personal information to third parties. We may share your information in the following limited circumstances:
              </p>

              <p style={{ color: '#ffffff' }}><strong>With Your Consent</strong>: We will share your personal belonging information with other users only as directed by the permissions structure you establish within the App.</p>

              <p style={{ color: '#ffffff' }}><strong>Service Providers</strong>: We may share your information with trusted third-party service providers who perform services on our behalf, such as hosting, data analysis, and customer service. These service providers are obligated to use your information only as necessary to provide these services to us and are bound by confidentiality agreements.</p>

              <p style={{ color: '#ffffff' }}><strong>Legal Requirements</strong>: We may disclose your information if required by law, such as to comply with a subpoena, legal proceedings, or similar legal process.</p>

              <p style={{ color: '#ffffff' }}><strong>Business Transfers</strong>: If we are involved in a merger, acquisition, or sale of all or a portion of our business or assets, your information may be transferred as part of that transaction.</p>

              <h2 style={{ color: '#ffffff', marginTop: '2rem' }}>DATA SECURITY</h2>
              <p style={{ color: '#ffffff' }}>
                We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 style={{ color: '#ffffff', marginTop: '2rem' }}>YOUR CHOICES AND RIGHTS</h2>
              <p style={{ color: '#ffffff' }}>
                You have several choices regarding your personal information:
              </p>

              <p style={{ color: '#ffffff' }}><strong>Account Information</strong>: You can review and update your account information within the App settings.</p>

              <p style={{ color: '#ffffff' }}><strong>Personal Belongings Data</strong>: You maintain full control over the information about your personal belongings. You can add, edit, or delete this information at any time.</p>

              <p style={{ color: '#ffffff' }}><strong>Sharing Permissions</strong>: You can modify or revoke sharing permissions for your personal belongings data through the App's permission settings.</p>

              <p style={{ color: '#ffffff' }}><strong>Account Deletion</strong>: You may request deletion of your account by contacting us. Upon deletion, we will remove your personal information from our active databases, though some information may be retained in our archives for legal or legitimate business purposes.</p>

              <h2 style={{ color: '#ffffff', marginTop: '2rem' }}>CHILDREN'S PRIVACY</h2>
              <p style={{ color: '#ffffff' }}>
                Our App is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us, and we will take steps to delete such information.
              </p>

              <h2 style={{ color: '#ffffff', marginTop: '2rem' }}>CHANGES TO THIS PRIVACY POLICY</h2>
              <p style={{ color: '#ffffff' }}>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated Privacy Policy in the App and updating the "Last Updated" date.
              </p>

              <h2 style={{ color: '#ffffff', marginTop: '2rem' }}>CONTACT US</h2>
              <p style={{ color: '#ffffff' }}>
                If you have any questions, concerns, or comments about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p style={{ color: '#ffffff' }}>
                Email: <a href="mailto:mail@dogfoodlab.io" style={{ color: '#fcd900' }}>mail@dogfoodlab.io</a>
              </p>
              
              {/* Navigation Buttons */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '2rem 0' }}>
              <Link 
                to="/stashdog" 
                className="cta-button" 
                style={{ backgroundColor: '#fcd900', color: '#333' }}
                onClick={() => logEvent('navigation', { destination: 'stashdog', source: 'privacy' })}
              >
                Back to StashDog
              </Link>
              <Link 
                to="/" 
                className="cta-button" 
                style={{ backgroundColor: '#fcd900', color: '#333' }}
                onClick={() => logEvent('navigation', { destination: 'home', source: 'privacy' })}
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
                onClick={() => logEvent('contact_click', { page: 'stashdog_privacy' })}
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

export default StashdogPrivacyPage;
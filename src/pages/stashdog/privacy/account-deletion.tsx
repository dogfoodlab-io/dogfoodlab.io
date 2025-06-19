import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "gatsby";
import "../../index.css";
import { useFirebase } from "../../../firebase";
import { activeStashdogStrings } from "../../../templates/config";

const StashdogAccountDeletionPage: React.FC = () => {
  const { isInitialized, logEvent } = useFirebase();

  // Log page view when component mounts
  useEffect(() => {
    if (isInitialized) {
      // Log page view event
      logEvent('page_view', {
        page_title: 'StashDog Account Deletion',
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
          <title>Account Deletion - StashDog - Dogfood Lab LLC</title>
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

        {/* Account Deletion Section */}
        <section className="products">
          <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="product" style={{ maxWidth: '800px', margin: '2rem auto', width: '100%' }}>
              <h1 style={{ textAlign: 'center', color: '#ffffff', marginBottom: '1rem' }}>ACCOUNT DELETION</h1>
              <p style={{ textAlign: 'center', color: '#fcd900', marginBottom: '2rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
                StashDog by Dogfood Lab LLC
              </p>
              
              <h2 style={{ color: '#fcd900', marginTop: '2rem', fontSize: '1.5rem' }}>HOW TO REQUEST ACCOUNT DELETION</h2>
              <p style={{ color: '#ffffff', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                To permanently delete your StashDog account and all associated data, follow these steps within the StashDog mobile application:
              </p>

              <div style={{ 
                backgroundColor: '#444', 
                padding: '2rem', 
                borderRadius: '10px', 
                marginBottom: '2rem',
                border: '2px solid #fcd900'
              }}>
                <h3 style={{ color: '#fcd900', marginTop: '0', marginBottom: '1.5rem', fontSize: '1.3rem' }}>Step-by-Step Account Deletion Process:</h3>
                <ol style={{ color: '#ffffff', lineHeight: '2', fontSize: '1.1rem', paddingLeft: '1rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><strong>Open the StashDog mobile application</strong> on your device</li>
                  <li style={{ marginBottom: '0.5rem' }}><strong>Log into your account</strong> using your email and password</li>
                  <li style={{ marginBottom: '0.5rem' }}><strong>Navigate to your Profile section</strong> (accessible from the main navigation menu)</li>
                  <li style={{ marginBottom: '0.5rem' }}><strong>Scroll down to the "Danger Zone" section</strong> at the bottom of your profile page</li>
                  <li style={{ marginBottom: '0.5rem' }}><strong>Tap "Delete Account"</strong></li>
                  <li style={{ marginBottom: '0.5rem' }}><strong>Confirm the deletion</strong> by following the on-screen prompts</li>
                </ol>
                <p style={{ color: '#fcd900', marginTop: '1.5rem', fontSize: '1rem', fontStyle: 'italic' }}>
                  The account deletion process is immediate and cannot be reversed once confirmed.
                </p>
              </div>

              <h2 style={{ color: '#fcd900', marginTop: '2rem', fontSize: '1.5rem' }}>DATA DELETION AND RETENTION POLICY</h2>
              
              <h3 style={{ color: '#ffffff', marginTop: '1.5rem', fontSize: '1.2rem' }}>Data That Will Be Permanently Deleted:</h3>
              <ul style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                <li><strong>Personal Account Information:</strong> Name, email address, username, profile picture, and account credentials</li>
                <li><strong>Inventory Data:</strong> All items you have added to your inventory, including names, descriptions, categories, and tags</li>
                <li><strong>Photos and Images:</strong> All photos of your belongings uploaded to the app</li>
                <li><strong>Location Data:</strong> Any storage location information you have entered</li>
                <li><strong>Sharing Permissions:</strong> All family sharing settings and permissions you have configured</li>
                <li><strong>User-Generated Content:</strong> Any notes, comments, or custom categories you have created</li>
              </ul>

              <h3 style={{ color: '#ffffff', marginTop: '1.5rem', fontSize: '1.2rem' }}>Data Retention and Deletion Timeline:</h3>
              <div style={{ 
                backgroundColor: '#1a4d1a', 
                padding: '1.5rem', 
                borderRadius: '10px', 
                marginBottom: '2rem',
                border: '2px solid #4CAF50'
              }}>
                <ul style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '1.1rem', margin: '0' }}>
                  <li><strong>Immediate deletion:</strong> Your account access is immediately revoked upon confirmation</li>
                  <li><strong>30-day deletion period:</strong> All personal data and user content will be permanently deleted from our active systems within 30 days</li>
                  <li><strong>Backup systems:</strong> Data will be removed from backup systems within 90 days of account deletion</li>
                </ul>
              </div>

              <h3 style={{ color: '#ffffff', marginTop: '1.5rem', fontSize: '1.2rem' }}>Data That May Be Retained:</h3>
              <div style={{ 
                backgroundColor: '#4a4a4a', 
                padding: '1.5rem', 
                borderRadius: '10px', 
                marginBottom: '2rem',
                border: '1px solid #666'
              }}>
                <ul style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '1.1rem', margin: '0' }}>
                  <li><strong>Anonymized Analytics:</strong> Aggregated, anonymized usage statistics that cannot be linked to your identity (retained indefinitely for service improvement)</li>
                  <li><strong>Legal Compliance Data:</strong> Data required to be retained for legal, regulatory, or fraud prevention purposes (retained only as legally required)</li>
                  <li><strong>Customer Support Records:</strong> Records of support interactions may be retained for up to 2 years for quality assurance and legal compliance</li>
                </ul>
                <p style={{ color: '#fcd900', marginTop: '1rem', fontSize: '1rem', fontStyle: 'italic' }}>
                  Note: Any retained data will be anonymized and cannot be used to identify you personally.
                </p>
              </div>

              <div style={{ 
                backgroundColor: '#662d00', 
                padding: '1.5rem', 
                borderRadius: '10px', 
                marginBottom: '2rem',
                border: '2px solid #ff6b6b'
              }}>
                <h3 style={{ color: '#ff6b6b', marginTop: '0', marginBottom: '1rem' }}>⚠️ Important: Account Deletion is Permanent</h3>
                <p style={{ color: '#ffffff', margin: '0', fontSize: '1.1rem' }}>
                  Once you confirm account deletion, this action cannot be undone. You will lose access to all your data, and it cannot be recovered. If you wish to use StashDog again, you will need to create a new account and start over.
                </p>
              </div>

              <h2 style={{ color: '#fcd900', marginTop: '2rem', fontSize: '1.5rem' }}>ALTERNATIVE TO DELETION</h2>
              <p style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.1rem' }}>
                Before permanently deleting your account, consider these alternatives:
              </p>
              <ul style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem' }}>
                <li><strong>Export your data:</strong> Download your inventory data through the app settings before deletion</li>
                <li><strong>Adjust privacy settings:</strong> Modify sharing permissions and privacy settings if privacy is your concern</li>
                <li><strong>Contact support:</strong> Reach out to us if you're experiencing issues that might be resolved without deletion</li>
              </ul>

              <h2 style={{ color: '#fcd900', marginTop: '2rem', fontSize: '1.5rem' }}>NEED ASSISTANCE?</h2>
              <p style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.1rem' }}>
                If you encounter any issues with the account deletion process or have questions about data deletion:
              </p>
              <div style={{ 
                backgroundColor: '#444', 
                padding: '1.5rem', 
                borderRadius: '10px', 
                marginBottom: '2rem',
                border: '1px solid #fcd900'
              }}>
                <p style={{ color: '#ffffff', margin: '0', fontSize: '1.1rem' }}>
                  <strong>Contact Dogfood Lab LLC Support:</strong><br />
                  Email: <a href="mailto:mail@dogfoodlab.io" style={{ color: '#fcd900', textDecoration: 'underline' }}>mail@dogfoodlab.io</a><br />
                  Subject: "StashDog Account Deletion Request" (if you need assistance with the deletion process)
                </p>
              </div>
              
              {/* Navigation Buttons */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '3rem 0', flexWrap: 'wrap' }}>
                <Link 
                  to="/stashdog/privacy" 
                  className="cta-button" 
                  style={{ backgroundColor: '#666', color: '#fff' }}
                  onClick={() => logEvent('navigation', { destination: 'privacy_policy', source: 'account_deletion' })}
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/stashdog" 
                  className="cta-button" 
                  style={{ backgroundColor: '#fcd900', color: '#333' }}
                  onClick={() => logEvent('navigation', { destination: 'stashdog', source: 'account_deletion' })}
                >
                  Back to StashDog
                </Link>
                <Link 
                  to="/" 
                  className="cta-button" 
                  style={{ backgroundColor: '#fcd900', color: '#333' }}
                  onClick={() => logEvent('navigation', { destination: 'home', source: 'account_deletion' })}
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
                onClick={() => logEvent('contact_click', { page: 'stashdog_account_deletion' })}
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

export default StashdogAccountDeletionPage;
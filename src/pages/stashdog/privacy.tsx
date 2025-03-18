import * as React from 'react'
import { HeadFC, Link } from 'gatsby'
import { Helmet } from 'react-helmet'

const StashdogPrivacyPage = () => {
  return (
    <main style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      margin: '0 auto',
      maxWidth: '800px',
      padding: '2rem'
    }}>
      <h1>STASHDOG PRIVACY POLICY</h1>
      <p><strong>Last Updated: March 18, 2025</strong></p>
      
      <h2>INTRODUCTION</h2>
      <p>Welcome to Stashdog ("we," "our," or "us"), a product of Dogfood Lab. At Stashdog, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application ("App").</p>
      <p>Please read this Privacy Policy carefully. By accessing or using the App, you agree to the collection, use, and disclosure of your information as described in this policy. If you do not agree with our policies and practices, please do not use our App.</p>
      
      <h2>INFORMATION WE COLLECT</h2>
      
      <h3>Personal Information</h3>
      <p>When you register for and use Stashdog, we collect certain personal information that you voluntarily provide to us, including:</p>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Profile information (such as username, profile picture)</li>
        <li>Account credentials (password)</li>
      </ul>
      
      <h3>User Content</h3>
      <p>Our primary purpose is to help you track and manage your personal belongings. As such, we collect and store:</p>
      <ul>
        <li>Information about your personal belongings that you choose to input</li>
        <li>Photos of your belongings that you upload</li>
        <li>Categories, tags, and descriptions you create</li>
        <li>Location information for items (if you choose to add this)</li>
      </ul>
      
      <h3>Automatically Collected Information</h3>
      <p>When you use our App, we may automatically collect certain information, including:</p>
      <ul>
        <li>Device information (such as device type, operating system version)</li>
        <li>App usage statistics</li>
        <li>Crash reports and performance data</li>
        <li>IP address</li>
      </ul>
      
      <h2>HOW WE USE YOUR INFORMATION</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Create and maintain your account</li>
        <li>Provide, maintain, and improve our services</li>
        <li>Respond to your comments, questions, and requests</li>
        <li>Communicate with you about the App, including updates and new features</li>
        <li>Monitor and analyze usage patterns and trends</li>
        <li>Ensure the security and integrity of our App</li>
      </ul>
      
      <h3>Your Personal Belongings Data</h3>
      <p>We understand that information about your personal belongings is private and sensitive. We want to be clear about how we handle this data:</p>
      <ol>
        <li>We do not access, analyze, or use data about your personal belongings for marketing, advertising, or any other business purpose.</li>
        <li>This data is only served back to you upon your request.</li>
        <li>This data is only shared with other users according to the permissions you explicitly set within the App.</li>
      </ol>
      
      <h2>SHARING YOUR INFORMATION</h2>
      <p>We do not sell or rent your personal information to third parties. We may share your information in the following limited circumstances:</p>
      
      <p><strong>With Your Consent</strong>: We will share your personal belonging information with other users only as directed by the permissions structure you establish within the App.</p>
      
      <p><strong>Service Providers</strong>: We may share your information with trusted third-party service providers who perform services on our behalf, such as hosting, data analysis, and customer service. These service providers are obligated to use your information only as necessary to provide these services to us and are bound by confidentiality agreements.</p>
      
      <p><strong>Legal Requirements</strong>: We may disclose your information if required by law, such as to comply with a subpoena, legal proceedings, or similar legal process.</p>
      
      <p><strong>Business Transfers</strong>: If we are involved in a merger, acquisition, or sale of all or a portion of our business or assets, your information may be transferred as part of that transaction.</p>
      
      <h2>DATA SECURITY</h2>
      <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
      
      <h2>YOUR CHOICES AND RIGHTS</h2>
      <p>You have several choices regarding your personal information:</p>
      
      <p><strong>Account Information</strong>: You can review and update your account information within the App settings.</p>
      
      <p><strong>Personal Belongings Data</strong>: You maintain full control over the information about your personal belongings. You can add, edit, or delete this information at any time.</p>
      
      <p><strong>Sharing Permissions</strong>: You can modify or revoke sharing permissions for your personal belongings data through the App's permission settings.</p>
      
      <p><strong>Account Deletion</strong>: You may request deletion of your account by contacting us. Upon deletion, we will remove your personal information from our active databases, though some information may be retained in our archives for legal or legitimate business purposes.</p>
      
      <h2>CHILDREN'S PRIVACY</h2>
      <p>Our App is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us, and we will take steps to delete such information.</p>
      
      <h2>CHANGES TO THIS PRIVACY POLICY</h2>
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated Privacy Policy in the App and updating the "Last Updated" date.</p>
      
      <h2>CONTACT US</h2>
      <p>If you have any questions, concerns, or comments about this Privacy Policy or our privacy practices, please contact us at:</p>
      
      <p>Email: <a href="mailto:mail@dogfoodlab.io">mail@dogfoodlab.io</a></p>
      
      <div style={{ marginTop: '2rem' }}>
        <Link to="/stashdog">Return to Stashdog</Link>
      </div>
    </main>
  )
}

export default StashdogPrivacyPage

export const Head: HeadFC = () => (
  <>
    <title>Stashdog Privacy Policy | Dogfood Lab</title>
    <meta name="description" content="Privacy policy for the Stashdog mobile application by Dogfood Lab." />
    <Helmet>
      <meta name="robots" content="noindex" />
    </Helmet>
  </>
)

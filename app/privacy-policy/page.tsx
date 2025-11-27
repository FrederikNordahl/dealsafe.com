'use client'

export default function PrivacyPolicy() {
  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f5f5f5;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: white;
          min-height: 100vh;
        }

        header {
          text-align: center;
          padding: 40px 0 30px;
          border-bottom: 2px solid #e0e0e0;
        }

        h1 {
          font-size: 2.5em;
          color: #2c3e50;
          margin-bottom: 10px;
        }

        .last-updated {
          color: #7f8c8d;
          font-size: 0.9em;
          margin-top: 10px;
        }

        .contact-info {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
          text-align: center;
        }

        .contact-info strong {
          color: #2c3e50;
        }

        main {
          padding: 30px 0;
        }

        section {
          margin-bottom: 40px;
        }

        h2 {
          font-size: 1.8em;
          color: #2c3e50;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 1px solid #e0e0e0;
        }

        h3 {
          font-size: 1.2em;
          color: #34495e;
          margin: 20px 0 10px;
        }

        p {
          margin-bottom: 15px;
          text-align: justify;
        }

        ul {
          margin: 15px 0 15px 30px;
        }

        li {
          margin-bottom: 10px;
        }

        strong {
          color: #2c3e50;
        }

        .highlight-box {
          background-color: #e8f4f8;
          border-left: 4px solid #3498db;
          padding: 15px;
          margin: 20px 0;
          border-radius: 3px;
        }

        .warning-box {
          background-color: #fff3cd;
          border-left: 4px solid #ffc107;
          padding: 15px;
          margin: 20px 0;
          border-radius: 3px;
        }

        footer {
          text-align: center;
          padding: 30px 0;
          border-top: 2px solid #e0e0e0;
          color: #7f8c8d;
          font-size: 0.9em;
        }

        a {
          color: #3498db;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .container {
            padding: 15px;
          }

          h1 {
            font-size: 2em;
          }

          h2 {
            font-size: 1.5em;
          }

          p {
            text-align: left;
          }
        }
      `}</style>
      <div className="container">
        <header>
          <h1>Privacy Policy for DealSafe</h1>
          <p className="last-updated"><strong>Last updated:</strong> November 27, 2025</p>
          <div className="contact-info">
            <strong>Contact:</strong> <a href="mailto:contact@desperate.dk">contact@desperate.dk</a>
          </div>
        </header>

        <main>
          <section>
            <h2>1. Introduction</h2>
            <p>This Privacy Policy explains how desperate ApS ("we", "us", "our") collects, uses, and protects your personal data when you use the DealSafe mobile application (the "App").</p>
            <p>DealSafe is an app that helps you store your vouchers and gift cards in one safe place, and reminds you before they expire so you never lose value.</p>
            <p>We are committed to protecting your privacy and complying with the EU General Data Protection Regulation (GDPR) and Danish Data Protection Act.</p>
          </section>

          <section>
            <h2>2. Data Controller</h2>
            <p>desperate ApS is the data controller responsible for your personal data.</p>
            <div className="highlight-box">
              <p><strong>Contact information:</strong></p>
              <ul>
                <li>Email: <a href="mailto:contact@desperate.dk">contact@desperate.dk</a></li>
                <li>Country: Denmark</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>3. What Personal Data We Collect</h2>
            <p>We collect the following personal data:</p>
            
            <p><strong>Phone Number:</strong> We collect your phone number to tie your uploaded vouchers and gift cards to your account.</p>
            
            <p><strong>Photos and Camera Access:</strong> We access your camera and photos only when you choose to upload vouchers or gift cards to the App. We only process the images you specifically select or capture.</p>
            
            <p><strong>Device Information:</strong> We collect basic device information (such as device type and operating system) solely for the purpose of sending you push notifications about expiring vouchers and gift cards.</p>
          </section>

          <section>
            <h2>4. How We Use Your Personal Data</h2>
            <p>We use your personal data solely for the following purposes:</p>
            <ul>
              <li><strong>Account Management:</strong> Your phone number identifies your account and links your vouchers to you</li>
              <li><strong>Core Functionality:</strong> Storing your vouchers and gift cards securely</li>
              <li><strong>Expiry Notifications:</strong> Sending you push notifications before your vouchers and gift cards expire</li>
              <li><strong>Image Processing:</strong> Processing the photos you upload to extract voucher information</li>
            </ul>
            <p>We do not use your data for analytics, marketing, advertising, or any other purposes beyond the core functionality of the App.</p>
          </section>

          <section>
            <h2>5. Legal Basis for Processing</h2>
            <p>Under GDPR, we process your personal data based on:</p>
            <ul>
              <li><strong>Contract Performance (GDPR Art. 6(1)(b)):</strong> Processing is necessary to provide you with the DealSafe service you signed up for</li>
              <li><strong>Consent (GDPR Art. 6(1)(a)):</strong> For camera and photo access, you provide explicit consent when granting permissions on your device</li>
            </ul>
          </section>

          <section>
            <h2>6. Data Storage and Security</h2>
            <p><strong>Where We Store Data:</strong> Your data is stored on secure servers provided by Vercel (Blob Storage) and Neon (database), both of which comply with industry-standard security practices.</p>
            
            <p><strong>How Long We Keep Data:</strong> We retain your personal data for as long as you maintain an active DealSafe account. When you delete your account, all associated data is permanently deleted.</p>
            
            <p><strong>Security Measures:</strong> We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section>
            <h2>7. Data Sharing and Third Parties</h2>
            <p>We do not sell, rent, or share your personal data with any third parties for their own purposes.</p>
            
            <p><strong>Service Providers:</strong> We use the following service providers to operate the App:</p>
            <ul>
              <li><strong>Vercel Blob Storage:</strong> For secure storage of voucher images</li>
              <li><strong>Neon:</strong> For database services</li>
            </ul>
            <p>These providers only process data on our behalf and are contractually obligated to protect your data and use it only for the purposes we specify.</p>
          </section>

          <section>
            <h2>8. Your Rights Under GDPR</h2>
            <p>You have the following rights regarding your personal data:</p>
            <ul>
              <li><strong>Right of Access:</strong> Request a copy of your personal data</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate personal data</li>
              <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request deletion of your personal data</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Right to Object:</strong> Object to our processing of your personal data</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent at any time</li>
            </ul>
            
            <div className="highlight-box">
              <p><strong>How to Exercise Your Rights:</strong></p>
              <ul>
                <li><strong>Delete Your Account and Data:</strong> You can delete your account directly within the App, which will permanently remove all your personal data</li>
                <li><strong>Other Requests:</strong> Contact us at <a href="mailto:contact@desperate.dk">contact@desperate.dk</a></li>
              </ul>
            </div>
            
            <p>We will respond to your requests within one month.</p>
          </section>

          <section>
            <h2>9. Data Retention</h2>
            <p>We retain your personal data only as long as necessary:</p>
            <ul>
              <li><strong>Active Accounts:</strong> Data is retained while your account is active</li>
              <li><strong>Deleted Accounts:</strong> Upon account deletion, all personal data is permanently deleted from our systems</li>
            </ul>
          </section>

          <section>
            <h2>10. International Data Transfers</h2>
            <p>Your data may be processed on servers located outside Denmark but within the European Economic Area (EEA). We ensure that any data transfers comply with GDPR requirements.</p>
          </section>

          <section>
            <h2>11. Children's Privacy</h2>
            <div className="warning-box">
              <p>DealSafe is not intended for children under the age of 13. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us immediately so we can delete it.</p>
            </div>
          </section>

          <section>
            <h2>12. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the "Last updated" date and, where appropriate, providing notice within the App.</p>
          </section>

          <section>
            <h2>13. Complaints</h2>
            <p>If you have concerns about how we handle your personal data, you have the right to lodge a complaint with the Danish Data Protection Agency (Datatilsynet):</p>
            
            <div className="highlight-box">
              <p><strong>Datatilsynet</strong></p>
              <ul>
                <li>Website: <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer">www.datatilsynet.dk</a></li>
                <li>Email: <a href="mailto:dt@datatilsynet.dk">dt@datatilsynet.dk</a></li>
              </ul>
            </div>
          </section>

          <section>
            <h2>14. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
            <div className="highlight-box">
              <p><strong>Email:</strong> <a href="mailto:contact@desperate.dk">contact@desperate.dk</a></p>
            </div>
          </section>
        </main>

        <footer>
          <p>&copy; 2025 desperate ApS. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}


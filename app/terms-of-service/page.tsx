'use client'

export default function TermsOfService() {
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

        .important-box {
          background-color: #f8d7da;
          border-left: 4px solid #dc3545;
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
          <h1>Terms of Service for DealSafe</h1>
          <p className="last-updated"><strong>Last updated:</strong> November 27, 2025</p>
          <div className="contact-info">
            <strong>Contact:</strong> <a href="mailto:contact@desperate.dk">contact@desperate.dk</a>
          </div>
        </header>

        <main>
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>Welcome to DealSafe! These Terms of Service ("Terms") constitute a legally binding agreement between you and desperate ApS ("we", "us", "our") regarding your use of the DealSafe mobile application (the "App").</p>
            <div className="important-box">
              <p><strong>By downloading, installing, or using DealSafe, you agree to be bound by these Terms.</strong> If you do not agree to these Terms, do not use the App.</p>
            </div>
          </section>

          <section>
            <h2>2. Description of Service</h2>
            <p>DealSafe is a mobile application that allows you to:</p>
            <ul>
              <li>Store digital copies of your gift cards and vouchers</li>
              <li>Receive notifications before your vouchers expire</li>
              <li>Organize and manage your vouchers in one secure location</li>
            </ul>
            <p>The App is designed to help you avoid losing money on expired gift cards and vouchers by providing timely reminders.</p>
          </section>

          <section>
            <h2>3. Eligibility</h2>
            <p>You must be at least 13 years old to use DealSafe. By using the App, you represent and warrant that you meet this age requirement.</p>
            <p>Currently, DealSafe is only available to users with Danish phone numbers.</p>
          </section>

          <section>
            <h2>4. Account Registration</h2>
            <p>To use DealSafe, you must create an account using your phone number. You agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Keep your account information up to date</li>
              <li>Maintain the security of your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p>You are responsible for all activities that occur under your account.</p>
          </section>

          <section>
            <h2>5. User Content and Responsibilities</h2>
            
            <h3>5.1 Your Content</h3>
            <p>You retain all ownership rights to the images and information you upload to DealSafe ("Your Content"). By uploading Your Content, you grant us a limited license to store, process, and display it solely for the purpose of providing the App's services to you.</p>
            
            <h3>5.2 Your Responsibilities</h3>
            <p>You are solely responsible for Your Content. You agree that you will:</p>
            <ul>
              <li>Only upload vouchers and gift cards that you legally own or are authorized to use</li>
              <li>Not upload any content that violates any law or infringes on third-party rights</li>
              <li>Not upload malicious content or attempt to harm the App or other users</li>
              <li>Verify the accuracy of expiry dates and voucher details</li>
            </ul>
            
            <div className="warning-box">
              <p><strong>Important:</strong> DealSafe is a storage and reminder tool. We do not verify the validity, balance, or authenticity of your vouchers. You are responsible for confirming these details with the issuer.</p>
            </div>
          </section>

          <section>
            <h2>6. Limitations and Disclaimers</h2>
            
            <h3>6.1 No Guarantee of Accuracy</h3>
            <p>While we strive to provide accurate reminder notifications, we do not guarantee that:</p>
            <ul>
              <li>Expiry date information you enter is correct</li>
              <li>Notifications will be delivered on time or at all</li>
              <li>Your vouchers will be accepted by merchants</li>
              <li>The App will be error-free or uninterrupted</li>
            </ul>
            
            <h3>6.2 Third-Party Vouchers</h3>
            <p>DealSafe has no affiliation with, and no control over, the companies that issue the gift cards and vouchers you store in the App. We are not responsible for:</p>
            <ul>
              <li>Changes to voucher terms and conditions by issuers</li>
              <li>Merchant acceptance or rejection of vouchers</li>
              <li>Voucher balance discrepancies</li>
              <li>Early expiration or cancellation by issuers</li>
            </ul>
            
            <h3>6.3 Backup Recommendation</h3>
            <div className="warning-box">
              <p>We recommend keeping backup copies of important vouchers. While we implement security measures to protect your data, you should not rely solely on DealSafe as your only record of valuable vouchers.</p>
            </div>
          </section>

          <section>
            <h2>7. Prohibited Uses</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the App for any illegal purpose</li>
              <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
              <li>Interfere with or disrupt the App's functionality</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Upload fraudulent or counterfeit vouchers</li>
              <li>Use automated systems (bots, scrapers) to access the App</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2>8. Intellectual Property</h2>
            <p>The App, including its design, features, text, graphics, logos, and software, is owned by desperate ApS and is protected by Danish and international copyright, trademark, and other intellectual property laws.</p>
            <p>You may not copy, modify, distribute, sell, or lease any part of the App without our prior written permission.</p>
          </section>

          <section>
            <h2>9. Privacy</h2>
            <p>Your use of DealSafe is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal data. Please review our Privacy Policy at <a href="/privacy-policy">/privacy-policy</a>.</p>
          </section>

          <section>
            <h2>10. Limitation of Liability</h2>
            <div className="important-box">
              <p><strong>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</strong></p>
              <p>DealSafe is provided "as is" and "as available" without warranties of any kind, either express or implied.</p>
              <p>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:</p>
              <ul>
                <li>Loss of profits or revenue</li>
                <li>Loss of data or vouchers</li>
                <li>Missed expiry dates or lost value from expired vouchers</li>
                <li>Business interruption</li>
                <li>Any other commercial damages or losses</li>
              </ul>
              <p>Our total liability to you for any claims arising from your use of the App shall not exceed the amount you paid us in the past 12 months (which is currently zero, as the App is free).</p>
            </div>
            <p>Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability, so the above limitations may not apply to you to the extent prohibited by law.</p>
          </section>

          <section>
            <h2>11. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless desperate ApS, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:</p>
            <ul>
              <li>Your use of the App</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your Content uploaded to the App</li>
            </ul>
          </section>

          <section>
            <h2>12. Modifications to the Service</h2>
            <p>We reserve the right to modify, suspend, or discontinue the App (or any part thereof) at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the App.</p>
          </section>

          <section>
            <h2>13. Termination</h2>
            
            <h3>13.1 By You</h3>
            <p>You may terminate your account at any time by deleting it through the App. Upon termination, all your data will be permanently deleted from our systems.</p>
            
            <h3>13.2 By Us</h3>
            <p>We may terminate or suspend your account immediately, without prior notice, if:</p>
            <ul>
              <li>You breach these Terms</li>
              <li>We are required to do so by law</li>
              <li>Your conduct harms or could harm us or other users</li>
              <li>We decide to discontinue the App</li>
            </ul>
            
            <h3>13.3 Effect of Termination</h3>
            <p>Upon termination, your right to use the App will immediately cease. Sections of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.</p>
          </section>

          <section>
            <h2>14. Updates to Terms</h2>
            <p>We may update these Terms from time to time. We will notify you of any material changes by:</p>
            <ul>
              <li>Updating the "Last updated" date at the top of these Terms</li>
              <li>Providing notice through the App</li>
              <li>Sending an email to your registered email address (if applicable)</li>
            </ul>
            <p>Your continued use of the App after any changes constitutes your acceptance of the new Terms.</p>
          </section>

          <section>
            <h2>15. Governing Law and Dispute Resolution</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of Denmark, without regard to its conflict of law provisions.</p>
            <p>Any disputes arising from these Terms or your use of the App shall be resolved in the courts of Denmark, and you consent to the exclusive jurisdiction of such courts.</p>
          </section>

          <section>
            <h2>16. Severability</h2>
            <p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.</p>
          </section>

          <section>
            <h2>17. Entire Agreement</h2>
            <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and desperate ApS regarding the App and supersede any prior agreements.</p>
          </section>

          <section>
            <h2>18. No Waiver</h2>
            <p>Our failure to enforce any right or provision of these Terms shall not be deemed a waiver of such right or provision.</p>
          </section>

          <section>
            <h2>19. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <div className="highlight-box">
              <p><strong>desperate ApS</strong></p>
              <p>Email: <a href="mailto:contact@desperate.dk">contact@desperate.dk</a></p>
              <p>Country: Denmark</p>
            </div>
          </section>

          <section>
            <h2>20. Acknowledgment</h2>
            <div className="highlight-box">
              <p>By using DealSafe, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
            </div>
          </section>
        </main>

        <footer>
          <p>&copy; 2025 desperate ApS. All rights reserved.</p>
          <p><a href="/privacy-policy">Privacy Policy</a></p>
        </footer>
      </div>
    </>
  )
}


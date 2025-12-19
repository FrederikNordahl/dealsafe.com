'use client'

import Link from 'next/link'

export default function Support() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
    }}>
      {/* Hero Section */}
      <section style={{
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          textDecoration: 'none',
          color: '#ffffff',
          marginBottom: '40px',
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              width: '20px',
              height: '20px',
              backgroundColor: '#000000',
              borderRadius: '4px',
              position: 'absolute',
              top: '6px',
              left: '6px',
            }}></div>
            <div style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#000000',
              borderRadius: '50%',
              position: 'absolute',
              bottom: '8px',
              right: '8px',
            }}></div>
          </div>
          <h1 style={{
            fontSize: '32px',
            fontWeight: '700',
            margin: 0,
            letterSpacing: '-0.5px',
          }}>DealSafe</h1>
        </Link>
        
        <h2 style={{
          fontSize: '48px',
          fontWeight: '700',
          marginBottom: '20px',
          lineHeight: '1.2',
          letterSpacing: '-1px',
        }}>
          Support
        </h2>
        
        <p style={{
          fontSize: '20px',
          color: '#a0a0a0',
          marginBottom: '60px',
          maxWidth: '600px',
          margin: '0 auto 60px',
          lineHeight: '1.6',
        }}>
          We're here to help with app issues, general feedback, and feature enhancement requests.
        </p>
      </section>

      {/* Contact Information Section */}
      <section style={{
        padding: '60px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '40px',
          borderRadius: '16px',
          border: '1px solid #2a2a2a',
          marginBottom: '40px',
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            marginBottom: '30px',
            textAlign: 'center',
          }}>
            Contact Information
          </h2>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            <div>
              <strong style={{
                color: '#ffffff',
                display: 'block',
                marginBottom: '8px',
                fontSize: '18px',
              }}>Email Address:</strong>
              <a 
                href="mailto:contact@desperate.dk"
                style={{
                  color: '#ffffff',
                  textDecoration: 'underline',
                  fontSize: '18px',
                }}
              >
                contact@desperate.dk
              </a>
            </div>
            
            <div>
              <strong style={{
                color: '#ffffff',
                display: 'block',
                marginBottom: '8px',
                fontSize: '18px',
              }}>Company:</strong>
              <span style={{ color: '#a0a0a0', fontSize: '18px' }}>desperate ApS</span>
            </div>
            
            <div>
              <strong style={{
                color: '#ffffff',
                display: 'block',
                marginBottom: '8px',
                fontSize: '18px',
              }}>CVR Number:</strong>
              <span style={{ color: '#a0a0a0', fontSize: '18px' }}>40258973</span>
            </div>
            
            <div>
              <strong style={{
                color: '#ffffff',
                display: 'block',
                marginBottom: '8px',
                fontSize: '18px',
              }}>Address:</strong>
              <span style={{ color: '#a0a0a0', fontSize: '18px' }}>Vesterå 23 3 th, 9000 Aalborg, Denmark</span>
            </div>
            
            <div>
              <strong style={{
                color: '#ffffff',
                display: 'block',
                marginBottom: '8px',
                fontSize: '18px',
              }}>Support URL:</strong>
              <span style={{ color: '#a0a0a0', fontSize: '18px' }}>
                https://dealsafe.com/support
              </span>
            </div>
          </div>
        </div>

        {/* How to Reach Us */}
        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '40px',
          borderRadius: '16px',
          border: '1px solid #2a2a2a',
          marginBottom: '40px',
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            marginBottom: '30px',
            textAlign: 'center',
          }}>
            How to Reach Us
          </h2>
          
          <div style={{
            color: '#a0a0a0',
            lineHeight: '1.8',
            fontSize: '18px',
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            <p style={{ marginBottom: '20px' }}>
              <strong style={{ color: '#ffffff' }}>App Issues:</strong> If you're experiencing technical problems, bugs, or crashes, please email us at <a href="mailto:contact@desperate.dk" style={{ color: '#ffffff', textDecoration: 'underline' }}>contact@desperate.dk</a> with details about the issue.
            </p>
            
            <p style={{ marginBottom: '20px' }}>
              <strong style={{ color: '#ffffff' }}>General Feedback:</strong> We'd love to hear your thoughts, suggestions, or ideas for improving DealSafe. Your feedback helps us make the app better for everyone.
            </p>
            
            <p>
              <strong style={{ color: '#ffffff' }}>Feature Requests:</strong> Have an idea for a new feature? Let us know! We're always looking for ways to enhance your voucher management experience.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 20px',
        textAlign: 'center',
        borderTop: '1px solid #2a2a2a',
        color: '#808080',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <Link href="/" style={{
            color: '#ffffff',
            textDecoration: 'underline',
            fontSize: '16px',
            marginBottom: '20px',
            display: 'inline-block',
          }}>
            ← Back to Home
          </Link>
          <p style={{ marginTop: '20px' }}>
            © {new Date().getFullYear()} DealSafe by desperate ApS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}


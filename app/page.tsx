'use client'

import Link from 'next/link'

export default function Home() {
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
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
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
        </div>

        {/* Tagline */}
        <h2 style={{
          fontSize: '48px',
          fontWeight: '700',
          marginBottom: '20px',
          lineHeight: '1.2',
          letterSpacing: '-1px',
        }}>
          Stop losing money on forgotten vouchers
        </h2>
        
        <p style={{
          fontSize: '20px',
          color: '#a0a0a0',
          marginBottom: '40px',
          maxWidth: '600px',
          margin: '0 auto 40px',
          lineHeight: '1.6',
        }}>
          Never lose money on expired gift cards again. Your personal voucher assistant that ensures you'll never waste another krone.
        </p>

        {/* App Store Button */}
        <a
          href="https://apps.apple.com/app/dealsafe"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: '#ffffff',
            color: '#000000',
            padding: '16px 32px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '18px',
            transition: 'transform 0.2s, opacity 0.2s',
            marginBottom: '80px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'
            e.currentTarget.style.opacity = '0.9'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.opacity = '1'
          }}
        >
          Download on the App Store
        </a>
      </section>

      {/* Problem Statement */}
      <section style={{
        padding: '60px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <p style={{
          fontSize: '24px',
          color: '#ffffff',
          lineHeight: '1.6',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          We've all been there - you get a gift card, tuck it away safely, and completely forget about it until it's too late. <strong>Danes lose millions of kroner every year</strong> on expired vouchers and forgotten gift cards.
        </p>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginBottom: '60px',
        }}>
          {/* Feature 1 */}
          <div style={{
            backgroundColor: '#1a1a1a',
            padding: '40px',
            borderRadius: '16px',
            border: '1px solid #2a2a2a',
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '20px',
            }}>📸</div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: '12px',
            }}>Snap & Store</h3>
            <p style={{
              color: '#a0a0a0',
              lineHeight: '1.6',
            }}>
              Take a photo of any gift card or voucher, and DealSafe securely stores it
            </p>
          </div>

          {/* Feature 2 */}
          <div style={{
            backgroundColor: '#1a1a1a',
            padding: '40px',
            borderRadius: '16px',
            border: '1px solid #2a2a2a',
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '20px',
            }}>⏰</div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: '12px',
            }}>Smart Reminders</h3>
            <p style={{
              color: '#a0a0a0',
              lineHeight: '1.6',
            }}>
              Get notified before your vouchers expire, so you always use them in time
            </p>
          </div>

          {/* Feature 3 */}
          <div style={{
            backgroundColor: '#1a1a1a',
            padding: '40px',
            borderRadius: '16px',
            border: '1px solid #2a2a2a',
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '20px',
            }}>🗂️</div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: '12px',
            }}>All in One Place</h3>
            <p style={{
              color: '#a0a0a0',
              lineHeight: '1.6',
            }}>
              Keep every gavekort, rabatkode, and voucher organized in your digital wallet
            </p>
          </div>
        </div>

        {/* Value Proposition */}
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          backgroundColor: '#1a1a1a',
          borderRadius: '16px',
          border: '1px solid #2a2a2a',
        }}>
          <h3 style={{
            fontSize: '32px',
            fontWeight: '700',
            marginBottom: '20px',
          }}>
            Simple. Secure. Saves you money.
          </h3>
          <p style={{
            fontSize: '18px',
            color: '#a0a0a0',
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto 30px',
          }}>
            No more digging through drawers, no more expired vouchers, no more lost money. Just scan your gift cards and let DealSafe do the rest.
          </p>
          <p style={{
            fontSize: '16px',
            color: '#808080',
            lineHeight: '1.6',
          }}>
            Built in Denmark, for Danish users. Your vouchers stay private and secure, stored locally with end-to-end encryption.
          </p>
        </div>
      </section>

      {/* Support & Contact Section */}
      <section style={{
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        borderTop: '1px solid #2a2a2a',
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '700',
          marginBottom: '40px',
          textAlign: 'center',
        }}>
          Support & Contact
        </h2>
        
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          backgroundColor: '#1a1a1a',
          padding: '40px',
          borderRadius: '16px',
          border: '1px solid #2a2a2a',
        }}>
          <p style={{
            fontSize: '16px',
            color: '#a0a0a0',
            lineHeight: '1.8',
            marginBottom: '20px',
          }}>
            For assistance, feedback, feature enhancement requests, or general inquiries, please contact us:
          </p>
          
          <div style={{
            marginTop: '30px',
          }}>
            <div style={{
              marginBottom: '20px',
            }}>
              <strong style={{
                color: '#ffffff',
                display: 'block',
                marginBottom: '8px',
              }}>Email:</strong>
              <a 
                href="mailto:contact@desperate.dk"
                style={{
                  color: '#ffffff',
                  textDecoration: 'underline',
                }}
              >
                contact@desperate.dk
              </a>
            </div>
            
            <div style={{
              marginBottom: '20px',
            }}>
              <strong style={{
                color: '#ffffff',
                display: 'block',
                marginBottom: '8px',
              }}>Company:</strong>
              <span style={{ color: '#a0a0a0' }}>desperate ApS</span>
            </div>
            
            <div style={{
              marginBottom: '20px',
            }}>
              <strong style={{
                color: '#ffffff',
                display: 'block',
                marginBottom: '8px',
              }}>CVR Number:</strong>
              <span style={{ color: '#a0a0a0' }}>40258973</span>
            </div>
            
            <div style={{
              marginBottom: '20px',
            }}>
              <strong style={{
                color: '#ffffff',
                display: 'block',
                marginBottom: '8px',
              }}>Address:</strong>
              <span style={{ color: '#a0a0a0' }}>Vesterå 23 3 th, 9000 Aalborg, Denmark</span>
            </div>
            
            <div>
              <strong style={{
                color: '#ffffff',
                display: 'block',
                marginBottom: '8px',
              }}>Support:</strong>
              <Link 
                href="/support"
                style={{
                  color: '#ffffff',
                  textDecoration: 'underline',
                }}
              >
                Visit our support page
              </Link>
            </div>
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
          <p style={{ marginBottom: '20px' }}>
            © {new Date().getFullYear()} DealSafe by desperate ApS. All rights reserved.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap',
          }}>
            <Link href="/privacy-policy" style={{ color: '#808080', textDecoration: 'underline' }}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" style={{ color: '#808080', textDecoration: 'underline' }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}


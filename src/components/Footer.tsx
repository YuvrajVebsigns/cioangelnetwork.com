'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Send } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { submitWebsiteSubscription } from '@/services/subscribe.service';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage(null);

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setStatusMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      await submitWebsiteSubscription(trimmedEmail);
      setStatusMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setStatusMessage(
        error instanceof Error ? error.message : 'Subscription failed. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <footer className="footer-section">
      {/* MAIN FOOTER */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* COLUMN 1 */}
            {/* <div className="footer-widget footer-brand"> */}
            <Link href="/" className="footer-logo">
              <Image
                src="/assets/logo/CAN-logo-rg.png"
                alt="CORE Media"
                width={100}
                height={50}
                priority
              />
            </Link>

            {/* <p className="footer-description">
                Developing personalized customer journeys to increase customer satisfaction,
                engagement, and long-term loyalty for business growth.
              </p> */}
            {/* </div> */}

            {/* COLUMN 2 */}
            <div className="footer-widget">
              <h4 className="footer-title">Services</h4>

              <ul className="footer-links">
                <li>
                  <Link href="/startup-valuations">Startup Valuations</Link>
                </li>

                <li>
                  <Link href="/survival-of-the-richest">Survival of the Richest</Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 3 */}
            <div className="footer-widget">
              <h4 className="footer-title">Resources</h4>

              <ul className="footer-links">
                <li>
                  <Link href="/blog">Blogs</Link>
                </li>

                <li>
                  <Link href="/events">Event</Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 4 */}
            <div className="footer-widget">
              <h4 className="footer-title">Subscribe</h4>

              <form className="footer-subscribe" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="footer-input"
                  value={email}
                  onChange={(event) => setEmail(event.currentTarget.value)}
                  required
                />

                <button
                  type="submit"
                  className="footer-submit"
                  aria-label="Subscribe"
                  disabled={isSubmitting}
                >
                  <Send size={18} />
                </button>
              </form>

              {/* {statusMessage ? <p className="footer-subscribe-message">{statusMessage}</p> : null} */}
              {statusMessage && (
                <div className="footer-popup" role="status" aria-live="polite">
                  <span className="footer-popup-dot" aria-hidden="true" />

                  <p>{statusMessage}</p>

                  <button
                    type="button"
                    onClick={() => setStatusMessage(null)}
                    aria-label="Close message"
                  >
                    ×
                  </button>
                </div>
              )}
              <br />
              <h2 className="footer-description1">Office Address</h2>
              <p className="footer-description">
                Units Nos. 3037 – A1 Wing, 3rd Floor, Oberoi Garden Estate, Near Chandivali Studio,
                Andheri (East), Mumbai – 400072, INDIA
              </p>

              {/* <label className="footer-checkbox">
                <input type="checkbox" />

                <span>
                  I agree to the{' '}
                  <Link href="/" className="footer-terms">
                    Terms & Conditions
                  </Link>
                </span>
              </label> */}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-container footer-bottom-wrapper">
          {/* CONTACT */}
          <div className="footer-contact">
            <a href="tel:+917506035537" className="footer-contact-item">
              <span className="footer-contact-icon">
                <Phone size={15} />
              </span>

              <span className="footer-contact-text">+91 22 4608 0974</span>
            </a>

            <div className="footer-contact-item">
              {/* <span className="footer-contact-icon">
                <Mail size={15} />
              </span> */}

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@core-mediagroup.com&su=Enquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <Mail size={15} />
                </span>

                <span className="footer-contact-text">contact@core-mediagroup.com</span>
              </a>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="footer-socials">
            <a href="https://www.facebook.com/coremediaindia/" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/core_media_/" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="https://x.com/CIOChoice" aria-label="Twitter">
              <FaXTwitter />
            </a>

            <a href="https://www.linkedin.com/company/core-mediagroup/" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>

          {/* COPYRIGHT */}
          <div className="footer-copy">Copyright © 2026 CORE Media. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import {
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";
import "./index.css";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-columns">
          {/* Column 1 - Logo */}
          <div className="footer-column">
            <div className="logo">
              <img
                src="/src/assets/brewy-ai-text-white.png"
                alt="Brewy AI"
                className="footer-logo"
              />
            </div>
            <p className="subtitle">A CodeBrewHouse Product</p>
          </div>

          {/* Column 2 - Product */}
          <div className="footer-column">
            <h3>Product</h3>
            <ul>
              <li>
                <a href="/analysis">Analysis</a>
              </li>
              <li>
                <a href="/pricing-plans">Pricing & Plans</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/terms-of-service">Terms of Service</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Additional Links */}
          <div className="footer-column no-title">
            <ul>
              <li>
                <a href="/refund-policy">Refund Policy</a>
              </li>
              <li>
                <a href="/terms-conditions">Terms & Conditions</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/sitemap">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-icons">
            <a
              href="https://twitter.com/codebrewhouse"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://github.com/codebrewhouse"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </div>
          <div className="copyright">© CodeBrewHouse - All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

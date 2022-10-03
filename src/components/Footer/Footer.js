import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="social-links">
                <a href="https://www.facebook.com/netflixbrasil">
                    <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="https://www.instagram.com/NetflixBrasil">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="https://twitter.com/NetflixBrasil">
                    <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="https://www.youtube.com/user/NetflixBRA">
                    <ion-icon name="logo-youtube"></ion-icon>
                </a>
            </div>

            <div className="support-container">
                <div className="wrap-support-links">
                    <div className="support-links">
                        <a href="#">Audio description</a>
                        <a href="#">Investors</a>
                        <a href="#">Legal notices</a>
                    </div>
                </div>

                <div className="wrap-support-links">
                    <div className="support-links">
                        <a href="#">Support center</a>
                        <a href="#">Employment assistance</a>
                        <a href="#">Cookies preferences</a>
                    </div>
                </div>

                <div className="wrap-support-links">
                    <div className="support-links">
                        <a href="#">Gift cards</a>
                        <a href="#">Terms of use</a>
                        <a href="#">About company</a>
                    </div>
                </div>

                <div className="wrap-support-links">
                    <div className="support-links">
                        <a href="#">Press center</a>
                        <a href="#">Privacy</a>
                        <a href="#">Contact us</a>
                    </div>
                </div>
            </div>
            <p>With love, Anthony's 💖</p>
        </footer>
    );
};

export default Footer;

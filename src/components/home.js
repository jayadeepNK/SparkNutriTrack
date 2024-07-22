import Header from './Header'
import { FaInstagram, FaFacebook, FaYoutube, FaGoogle, FaTwitter } from "react-icons/fa6";

function Home() {
    return (
        <div className="home-con">
            <Header />
            <section className="home">
                <div className="firstsec">
                    <h1>Eat smarter.</h1>
                    <h1>Live better.</h1>
                    <p>Track your diet, exercise, and health data.</p>
                </div>
                <div className="home-video">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/nq7039ms1p4?si=aJpvWu5_5fOnGGDF" 
                        title="NutriTrac Introduction Video" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
            <section className='secondsec'>
                <img src="https://mfd.azureedge.net/images/home/home_devices_all_1815.jpg" alt="Devices showcasing NutriTrac app" />
                <div className="second-details">
                    <h2>A Better Food Diary Experience</h2>
                    <p>
                        Our food database is curated by trained staff to avoid the errors, missing nutrition data, and duplicates that plague other food diary services.
                    </p>
                </div>
            </section >
            <section className='secondsec second-child'>
                <img src="https://mfd.azureedge.net/images/home/home_woman_push-up_desktop_narrow_2000.jpg" alt="Woman doing push-ups" />
                <div className='second-childdetails'>
                    <h2>Premium Features Are Standard</h2>
                    <ul>
                        <li>Track 21 nutrients</li>
                        <li>Register and then Login</li>
                        <li>Calculate nutrition in recipes</li>
                        <li>Log foods by Volume or weight</li>
                        <li>Sync with Fitbit</li>
                    </ul>
                </div>
            </section>
            <footer className="footer">
                <div className="footer-section">
                    <h1>Contact Us</h1>
                    <ul className="footer-list">
                        <li>SparkNutriTrac@info.com</li>
                        <li>SparkNutriTrac@admin.com</li>
                        <li>
                            Seawoods Grand Central Mall, Sector 50, Mumbai 410206
                        </li>
                        <li>
                            +91 787698678
                        </li>
                        <li className="border-list"></li>
                        <li className="socials">
                            <FaInstagram className="fa-instagram" />
                            <FaFacebook className="fa-facebook" />
                            <FaYoutube className="fa-youtube" />
                            <FaTwitter className="fa-twitter" />
                            <FaGoogle className="fa-google" />
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h1>Quick Links</h1>
                    <ul className="footer-list">
                        <li>Home</li>
                        <li>Track</li>
                        <li>Diet</li>
                        <li>Contact Us</li>
                        <li>Terms & Conditions</li>
                        <li>Return Policy</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h1>Subscribe to Newsletter</h1>
                    <ul className="footer-list">
                        <li>Maxime quae inventore sunt odio perspiciatis vitae saepe officia dolorem.</li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Home;

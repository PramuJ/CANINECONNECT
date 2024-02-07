import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import dogImage from '../Assets/041720loyaldog.webp';
import vehicleImage from '../Assets/Mercedes-Sprinter-dog-transportation-services.jpg';
import handlerImage from '../Assets/Handler3.jpg'
import articlesImage from '../Assets/articles.jpeg'

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="catalog">
                <img src={dogImage} alt="Dogs" className="catalog-image" />
                <h2>Dogs</h2>
                <p>Find the perfect mate for your dog.</p>
                <Link to="/dogs">
                    <button className="see-more">See More</button>
                </Link>
            </div>

            <div className="catalog">
                <img src={vehicleImage} alt="Dogs" className="catalog-image" />
                <h2>Vehicles</h2>
                <p>Discover vehicles for safe transportation.</p>
                <Link to="/vehicles">
                    <button className="see-more">See More</button>
                </Link>
            </div>

            <div className="catalog">
                <img src={handlerImage} alt="Dogs" className="catalog-image" />
                <h2>Handlers</h2>
                <p>Connect with experienced dog handlers.</p>
                <Link to="/handlers">
                    <button className="see-more">See More</button>
                </Link>
            </div>

            <div className="catalog">
                <img src={articlesImage} alt="Dogs" className="catalog-image" />
                <h2>Articles</h2>
                <p>Explore articles about dog breeding.</p>

                

                <Link to="/blog">

                    <button className="see-more">See More</button>
                </Link>
            </div>
        </div>
    )
}
export default LandingPage;


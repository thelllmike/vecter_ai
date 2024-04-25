import React from 'react';
import checkImage from '../images/Check.svg'; // Adjust the path as necessary
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';
import footerImage from '../images/footer.jpg'
import '../styles/PriceAPI.css';

const PriceAPI = () => {
    return (
        <div className='apiprice'>
            <Navbar />
            <div className="container">
                <div className="row text-center mt-5">
                    <div className="col-12">
                        <h3>CONVERT MORE IMAGES FOR LESS</h3>
                        <p>How many images do you want to convert?</p>
                    </div>
                    <div className="buttons">
                        <button type="button"><NavLink to="/priceweb">Web</NavLink></button>
                        <button type="button"><NavLink to="/priceapi">API</NavLink></button>
                    </div>
                </div>
                <div className="row">
                    <div className="bar">
                        <div className="button"></div>
                        <div className="number">30</div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="row api-price">
                    <div className="col-6 col-md-6 col-sm-6 card">
                        <h4 className="title text-center">API Subscription</h4>
                        <div className="price text-center fs-2">$10<span>.99</span></div>
                        <div className="valid-time text-center">/Month (cancel anytime)</div>
                        <button type="button">Continue <i className="fa-solid fa-arrow-right"></i></button>
                        <ul>
                            <li>
                                <img src={checkImage} alt="Check" />
                                <p>30 Images / Month</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-6 col-sm-6 card">
                        <h4 className="title text-center">API Credit</h4>
                        <div className="price text-center fs-2">$19<span>.99</span></div>
                        <div className="valid-time text-center">One Time</div>
                        <button type="button">Continue <i className="fa-solid fa-arrow-right"></i></button>
                        <ul>
                            <li>
                                <img src={checkImage} alt="Check" />
                                <p>30 Images / Month</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="questions">
                        <h3>Frequently Asked Questions</h3>
                        <div className="card">
                            <h6>What is a Conversion minute? <i className="fa-solid fa-chevron-down"></i></h6>
                        </div>
                        {/* Add more FAQ cards here */}
                    </div>
                </div>
            </div>
            <div className="container-fluid footer mt-5">
                <div className="row">
                    <img src={footerImage} alt="Footer" />
                </div>
            </div>
        </div>
    )
}

export default PriceAPI;

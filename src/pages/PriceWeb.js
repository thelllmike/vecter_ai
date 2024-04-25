import React from 'react'
import checkedImage from '../images/Check.svg'
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';
import footerImage from '../images/footer.jpg'
import '../styles/PriceWeb.css';

const PriceWeb = () => {
    return (
        <div className='priceweb'>
            <Navbar />
            <div class="container">
                <div class="row text-center mt-5">
                    <div class="col-12">
                        <h3>CONVERT MORE IMAGES FOR LESS</h3>
                        <p>How many images do you want to convert?</p>
                    </div>
                    <div class="buttons">
                        <button type><NavLink to="/priceweb">Web</NavLink></button>
                        <button type><NavLink to="/priceapi">API</NavLink></button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-4 col-sm-12 card">
                        <h4 class="title text-center mt-3">FREE</h4>
                        <div class="price text-center fs-2">$0 <span>.00</span> </div>
                        <div class="valid-time text-center">/</div>
                        <div class="cancel-text text-center">Cancel anytime</div>
                        <button type="button">Continue <i class="fa-solid fa-arrow-right"></i></button>
                        <ul>
                            <li>
                                <img src={checkedImage} alt="" />
                                <p>Number Of Images / Unlimited</p>
                            </li>
                            <li>
                                <img src={checkedImage} alt="" />
                                <p>Active Time / 7 days</p>
                            </li>
                            <li>
                                <img src={checkedImage} alt="" />
                                <p>Billed Time / Trial</p>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-4 col-sm-12 card">
                        <h4 class="title text-center mt-3">STARTER</h4>
                        <div class="price text-center fs-2">$4 <span>.99</span> </div>
                        <div class="valid-time text-center">/ week</div>
                        <div class="cancel-text text-center">Cancel anytime</div>
                        <button type="button">Continue <i class="fa-solid fa-arrow-right"></i></button>
                        <ul>
                            <li>
                                <img src={checkedImage} alt="" />
                                <p>Number Of Images / Unlimited</p>
                            </li>
                            <li>
                                <img src={checkedImage} alt="" />
                                <p>Active Time / 7 days</p>
                            </li>
                            <li>
                                <img src={checkedImage} alt="" />
                                <p>Billed Time / Weekly</p>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-4 col-sm-12 card">
                        <h4 class="title text-center mt-3">SUBSCRIPTION</h4>
                        <div class="price text-center fs-2">$9 <span>.99</span> </div>
                        <div class="valid-time text-center">/month</div>
                        <div class="cancel-text text-center">Cancel anytime</div>
                        <button type="button">Continue <i class="fa-solid fa-arrow-right"></i></button>
                        <ul>
                            <li>
                                <img src={checkedImage} alt="" />
                                <p>Number Of Images / Unlimited</p>
                            </li>
                            <li>
                                <img src={checkedImage} alt="" />
                                <p>Active Time / 30 days</p>
                            </li>
                            <li>
                                <img src={checkedImage} alt="" />
                                <p>Billed Time / Monthly</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="questions">
                        <h3>Frequently Asked Questions</h3>
                        <div class="card">
                            <h6>What a Conversion minute? <i class="fa-solid fa-chevron-down"></i></h6>
                        </div>
                        <div class="card">
                            <h6>What a Conversion minute? <i class="fa-solid fa-chevron-down"></i></h6>
                        </div>
                        <div class="card">
                            <h6>What a Conversion minute? <i class="fa-solid fa-chevron-down"></i></h6>
                        </div>
                        <div class="card">
                            <h6>What a Conversion minute? <i class="fa-solid fa-chevron-down"></i></h6>
                        </div>
                        <div class="card">
                            <h6>What a Conversion minute? <i class="fa-solid fa-chevron-down"></i></h6>
                        </div>
                        <div class="card">
                            <h6>What a Conversion minute? <i class="fa-solid fa-chevron-down"></i></h6>
                        </div>
                        <div class="card">
                            <h6>What a Conversion minute? <i class="fa-solid fa-chevron-down"></i></h6>
                        </div>
                        <div class="card">
                            <h6>What a Conversion minute? <i class="fa-solid fa-chevron-down"></i></h6>
                        </div>
                        <div class="card">
                            <h6>What a Conversion minute? <i class="fa-solid fa-chevron-down"></i></h6>
                        </div>
                        <div class="card">
                            <h6>What a Conversion minute? <i class="fa-solid fa-chevron-down"></i></h6>
                        </div>
                        <div class="card">
                            <h6>What a Conversion minute? <i class="fa-solid fa-chevron-down"></i></h6>
                        </div>
                        <div class="card">
                            <h6>What a Conversion minute? <i class="fa-solid fa-chevron-down"></i></h6>
                        </div>
                        <div class="card">
                            <h6>What a Conversion minute? <i class="fa-solid fa-chevron-down"></i></h6>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container-fluid footer mt-5">
                <div className="row">
                    <img src={footerImage} alt="Footer" />
                </div>
            </div>

        </div >
    )
}

export default PriceWeb
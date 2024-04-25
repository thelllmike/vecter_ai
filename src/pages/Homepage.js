import React from 'react';
import Navbar from '../components/Navbar';
import "../styles/Homepage.css";
import actionImage from '../images/action-image.svg';
import vectorImage from '../images/Vector.svg';
import exampleImage from '../images/example.svg';
import vectorImage1 from '../images/Vector (1).svg';
import rectangleImage1 from '../images/Rectangle (1).svg';
import rectangleImage2 from '../images/Rectangle (2).svg';
import rectangleImage3 from '../images/Rectangle (3).svg';
import bottomImage from '../images/bottom-image.svg';
import footerImage from '../images/footer.jpg';
import { NavLink } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
      </div>

      <div className="top-title mt-5 fs-3">
        <h3>CONVERT IMAGES INTO VECTORS IN FULLCOLOR</h3>
        <p className="mt-4">Easily transform your PNG and JPG images into SVG vectors with seamless automation powered AI.</p>
      </div>

      <div className="upload-section mt-2">
        <div className="dot-square">
          <button className="mt-5"><NavLink to="/uploadimage"> UPLOAD IMAGE</NavLink></button>
          <div className="drag-image-text mt-4">
            DRAG IMAGE HERE
          </div>
        </div>
      </div>

      <div className="blue-bar">
        <div className="blue-bar-text">
          <p>See it in Action</p>
        </div>
        <img src={actionImage} alt="Action Image" />
      </div>

      <div className="example .row">
        <h3>EXAMPLES</h3>
        <p className="mt-4">Here are a few examples of the vectoring output</p>
        <div className="companies">
          <img src={vectorImage} alt="Vector" />
          <img src={exampleImage} alt="Example" className="mt-5" />
          <img src={vectorImage1} alt="Vector 1" />
        </div>
      </div>

      <div className="how-it-works">
        <h3>How it Works</h3>
        <div className="container mt-3">
          <div className="row">
            <div className="col-12 col-lg-4 col-sm-12 col-md-4">
              <div className="mt-2">
                <img src={rectangleImage1} alt="Rectangle 1" />
                <div className="works">
                  <h4 className="mt-2">Upload</h4>
                </div>
                <p>Upload Image that you want to vectorize</p>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-sm-12 col-md-4">
              <div className="mt-2">
                <img src={rectangleImage2} alt="Rectangle 2" />
                <div className="works">
                  <h4 className="mt-2">Process</h4>
                </div>
                <p>convert your image from pixels to geometric shapes</p>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-sm-12 col-md-4">
              <div className="mt-2">
                <img src={rectangleImage3} alt="Rectangle 3" />
                <div className="works">
                  <h4 className="mt-2">download</h4>
                </div>
                <p>preview of the result and download it if you like</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container bottom">
        <div className="row">
          <h3>Auto-convert your images to full color vectors for your needs</h3>
        </div>
        <div className="row">
          <img src={bottomImage} alt="Bottom Image" />
        </div>
      </div>

      <div className="container-fluid footer mt-5">
        <div className="row">
          <img src={footerImage} alt="Footer" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;

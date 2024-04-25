import React, { useState, useRef, useEffect } from 'react';
import vectorimage from '../images/vector-image.svg';
import or from '../images/or.svg';
import Navbar from '../components/Navbar';
import '../styles/Uploadimagepage.css';
import icon1 from '../images/editpage/1.svg';
import icon2 from '../images/editpage/2.svg';
import icon3 from '../images/editpage/3.svg';
import icon4 from '../images/editpage/4.svg';
import icon5 from '../images/editpage/5.svg';
import icon6 from '../images/editpage/6.svg';
import icon7 from '../images/editpage/7.svg';
import icon8 from '../images/editpage/8.svg';
import icon9 from '../images/editpage/9.svg';
import icon10 from '../images/editpage/10.svg';
import icon11 from '../images/editpage/11.svg';
import share from '../images/editpage/Share.svg';
import youtube from '../images/editpage/YouTube.svg';
import '../styles/React-toggleSwitch.css'
import unlimited from '../images/unlimited.svg'
import custom from '../images/custom.svg'


const UploadImagepage = () => {
  const [zoomLevelOriginal, setZoomLevelOriginal] = useState(1);
  const [zoomLevelVector, setZoomLevelVector] = useState(1);
  const [positionOriginal, setPositionOriginal] = useState({ x: 0, y: 0 });
  const [positionVector, setPositionVector] = useState({ x: 0, y: 0 });
  const originalImageRef = useRef(null);
  const vectorImageRef = useRef(null);
  const containerRef = useRef(null);

  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => setIsToggled(!isToggled);

  // Function to center images within their scroll divisions initially
  const centerImages = () => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const originalImageRect = originalImageRef.current.getBoundingClientRect();
    const vectorImageRect = vectorImageRef.current.getBoundingClientRect();

    const originalImageX = (containerRect.width - originalImageRect.width) / 2;
    const originalImageY = (containerRect.height - originalImageRect.height) / 2;

    const vectorImageX = (containerRect.width - vectorImageRect.width) / 2;
    const vectorImageY = (containerRect.height - vectorImageRect.height) / 2;

    setPositionOriginal({ x: originalImageX, y: originalImageY });
    setPositionVector({ x: vectorImageX, y: vectorImageY });
  };

  useEffect(() => {
    centerImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Event handler for scrolling original image
  const handleScrollOriginal = (e) => {
    const delta = e.deltaY * -0.01;
    const newZoomLevel = Math.min(Math.max(zoomLevelOriginal + delta, 1), 3);
    setZoomLevelOriginal(newZoomLevel);
  };

  // Event handler for scrolling vector image
  const handleScrollVector = (e) => {
    const delta = e.deltaY * -0.01;
    const newZoomLevel = Math.min(Math.max(zoomLevelVector + delta, 1), 3);
    setZoomLevelVector(newZoomLevel);
  };

  // Event handler for dragging original image
  const handleMouseDownOriginal = (e) => {
    const startX = e.pageX - positionOriginal.x;
    const startY = e.pageY - positionOriginal.y;

    const handleMouseMove = (moveEvent) => {
      const newPosition = {
        x: moveEvent.pageX - startX,
        y: moveEvent.pageY - startY,
      };

      const containerRect = containerRef.current.getBoundingClientRect();
      const imageRect = originalImageRef.current.getBoundingClientRect();

      const minX = 0;
      const minY = 0;
      const maxX = containerRect.width - imageRect.width;
      const maxY = containerRect.height - imageRect.height;

      newPosition.x = Math.min(Math.max(newPosition.x, minX), maxX);
      newPosition.y = Math.min(Math.max(newPosition.y, minY), maxY);

      setPositionOriginal(newPosition);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // Event handler for dragging vector image
  const handleMouseDownVector = (e) => {
    const startX = e.pageX - positionVector.x;
    const startY = e.pageY - positionVector.y;

    const handleMouseMove = (moveEvent) => {
      const newPosition = {
        x: moveEvent.pageX - startX,
        y: moveEvent.pageY - startY,
      };

      const containerRect = containerRef.current.getBoundingClientRect();
      const imageRect = vectorImageRef.current.getBoundingClientRect();

      const minX = 0;
      const minY = 0;
      const maxX = containerRect.width - imageRect.width;
      const maxY = containerRect.height - imageRect.height;

      newPosition.x = Math.min(Math.max(newPosition.x, minX), maxX);
      newPosition.y = Math.min(Math.max(newPosition.y, minY), maxY);

      setPositionVector(newPosition);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className='uploadimagepage'>
      <div className="top-toolbar">
        <div className="tools">
          <img src={icon1} alt="" />
          <img src={icon2} alt="" />
          <img src={icon3} alt="" />
          <img src={icon4} alt="" />
          <img src={icon5} alt="" />
          <img src={icon6} alt="" />
          <img src={icon7} alt="" />
          <img src={icon8} alt="" />
          <img src={icon9} alt="" />
          <img src={icon10} alt="" />
          <img src={icon11} alt="" />
        </div>
        <h3 className="h5">Edit Segmented Image</h3>
        <button>Cancel</button>
        <button>Save</button>
        <div className="right-toolbar">
          <img src={share} alt="" /><img src={youtube} alt="" />
        </div>
      </div>
      <div className="container-fluid" ref={containerRef}>
        <div className="row">
          <div className="col-4">
            <div className="scroll originalimage" onWheel={handleScrollOriginal}>
              <div onMouseDown={handleMouseDownOriginal} >
                <img
                  ref={originalImageRef}
                  src={or}
                  alt="Original Image"
                  style={{
                    transform: `scale(${zoomLevelOriginal})`,
                    cursor: 'grab',
                    position: 'absolute',
                    left: `${positionOriginal.x}px`,
                    top: `${positionOriginal.y}px`,
                    width: '200px'
                  }}
                />
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="scroll vector-image" onWheel={handleScrollVector}>
              <div onMouseDown={handleMouseDownVector}>
                <img
                  ref={vectorImageRef}
                  src={vectorimage}
                  alt="Vector Image"
                  style={{
                    transform: `scale(${zoomLevelVector})`,
                    cursor: 'grab',
                    position: 'absolute',
                    left: `${positionVector.x}px`,
                    top: `${positionVector.y}px`,
                    width: '200px'
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="right-side-tool">
              <div className="details">
                <h4 className='h4'>Details</h4>
                <select name="" id="">
                  <option value="">High</option>
                  <option value="">Average</option>
                  <option value="">Low</option>
                </select>

              </div>
              <div className="bg-transparent">
                <h4>BG Transparent</h4>
                <input
                  className="react-switch-checkbox"
                  id={`react-switch-new`}
                  type="checkbox"
                  checked={isToggled}
                  onChange={onToggle}
                />
                <label
                  className="react-switch-label"
                  htmlFor={`react-switch-new`}
                  style={{ background: isToggled ? 'blue' : 'grey' }}
                >
                  <span className={`react-switch-button`} />
                </label>
              </div>
              <div className="color">
                <h4>Color</h4>
                <input
                  className="react-switch-checkbox"
                  id={`react-switch-new`}
                  type="checkbox"
                  checked={isToggled}
                  onChange={onToggle}
                />
                <label
                  className="react-switch-label"
                  htmlFor={`react-switch-new`}
                  style={{ background: isToggled ? 'blue' : 'grey' }}
                >
                  <span className={`react-switch-button`} />
                </label>
              </div>
              <div className="row">
                <div className="col-6">
                  <button>
                    <img src={unlimited} alt="" />Unlimited
                  </button>
                </div>
                <div className="col-6">
                  <button>
                    <img src={custom} alt="" />Custom
                  </button>
                </div>
              </div>
              <div className="gray-scale">
                <h4>Gray Scale</h4>
                <input
                  className="react-switch-checkbox"
                  id={`react-switch-new`}
                  type="checkbox"
                  checked={isToggled}
                  onChange={onToggle}
                />
                <label
                  className="react-switch-label"
                  htmlFor={`react-switch-new`}
                  style={{ background: isToggled ? 'blue' : 'grey' }}
                >
                  <span className={`react-switch-button`} />
                </label>
              </div>
              <div className="black-and-white">
                <h4>Black & White</h4>
                <input
                  className="react-switch-checkbox"
                  id={`react-switch-new`}
                  type="checkbox"
                  checked={isToggled}
                  onChange={onToggle}
                />
                <label
                  className="react-switch-label"
                  htmlFor={`react-switch-new`}
                  style={{ background: isToggled ? 'blue' : 'grey' }}
                >
                  <span className={`react-switch-button`} />
                </label>
              </div>
              <div className="file-format">  <h4>File Format</h4>
                <select name="" id="">
                  <option value="">SVG</option>
                  <option value="">JPG</option>
                  <option value="">PNG</option>
                </select>
              </div>
            </div>
            <hr />
            <div className="buttons">
              <button>Vectorize</button>
              <button>Download</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImagepage;

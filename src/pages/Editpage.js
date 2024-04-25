import React, { useState, useRef } from 'react';
import vectorimage from '../images/vector-image.svg';
import Navbar from '../components/Navbar';
import '../styles/Editpage.css';
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
const Editpage = () => {
    const [zoomLevel, setZoomLevel] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    const [isToggled, setIsToggled] = useState(false);

    const onToggle = () => setIsToggled(!isToggled);

    const handleScroll = (e) => {
        const delta = e.deltaY * -0.01;
        const newZoomLevel = Math.min(Math.max(zoomLevel + delta, 1), 3); // Limit zoom level between 1 and 3
        setZoomLevel(newZoomLevel);
    };

    const handleMouseDown = (e) => {
        const startX = e.pageX - position.x;
        const startY = e.pageY - position.y;

        const handleMouseMove = (moveEvent) => {
            const newPosition = {
                x: moveEvent.pageX - startX,
                y: moveEvent.pageY - startY,
            };

            // Calculate container dimensions
            const containerRect = containerRef.current.getBoundingClientRect();
            const imageRect = imageRef.current.getBoundingClientRect();

            // Calculate boundaries for dragging
            const minX = 0;
            const minY = 0;
            const maxX = containerRect.width - imageRect.width;
            const maxY = containerRect.height - imageRect.height;

            // Keep image within boundaries
            newPosition.x = Math.min(Math.max(newPosition.x, minX), maxX);
            newPosition.y = Math.min(Math.max(newPosition.y, minY), maxY);

            setPosition(newPosition);
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <div className='editpage'>
          
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
            
            <div className="container-fluid " ref={containerRef}>
                <div className="row">
                    <div className="col-9">
                        <div className="scroll ">
                            <div onWheel={handleScroll} >
                                <img
                                    ref={imageRef}
                                    src= {vectorimage}
                                    alt="Editable"
                                    style={{
                                        transform: `scale(${zoomLevel})`,
                                        cursor: 'grab',
                                        position: 'absolute',
                                        left: `${position.x}px`,
                                        top: `${position.y}px`,
                                    }}
                                    onMouseDown={handleMouseDown}
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

export default Editpage;

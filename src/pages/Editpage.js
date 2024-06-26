import React, { useState, useRef } from 'react';
import '../styles/Editpage.css';
import '../styles/React-toggleSwitch.css';

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
import unlimited from '../images/unlimited.svg';
import custom from '../images/custom.svg';

const Editpage = () => {
    const [zoomLevel, setZoomLevel] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isToggled, setIsToggled] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);

    const containerRef = useRef(null);
    const imageRef = useRef(null);

    const onToggle = () => setIsToggled(!isToggled);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

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
                    <label htmlFor="file-upload" className="cursor-pointer">
                        <img src={icon1} alt="Upload" />
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    <img src={icon2} alt="icon2" />
                    <img src={icon3} alt="icon3" />
                    <img src={icon4} alt="icon4" />
                    <img src={icon5} alt="icon5" />
                    <img src={icon6} alt="icon6" />
                    <img src={icon7} alt="icon7" />
                    <img src={icon8} alt="icon8" />
                    <img src={icon9} alt="icon9" />
                    <img src={icon10} alt="icon10" />
                    <img src={icon11} alt="icon11" />
                </div>
                <h3 className="h5">Edit Segmented Image</h3>
                <button>Cancel</button>
                <button>Save</button>
                <div className="right-toolbar">
                    <img src={share} alt="Share" />
                    <img src={youtube} alt="YouTube" />
                </div>
            </div>
            <div className="container-fluid" ref={containerRef}>
                <div className="row">
                    <div className="col-9">
                        <div className="scroll">
                            <div onWheel={handleScroll}>
                                {uploadedImage && (
                                    <img
                                        ref={imageRef}
                                        src={uploadedImage}
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
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="right-side-tool">
                            <div className="details">
                                <h4 className='h4'>Details</h4>
                                <select name="details" id="details">
                                    <option value="high">High</option>
                                    <option value="average">Average</option>
                                    <option value="low">Low</option>
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
                                        <img src={unlimited} alt="Unlimited" />Unlimited
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button>
                                        <img src={custom} alt="Custom" />Custom
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
                            <div className="file-format">
                                <h4>File Format</h4>
                                <select name="fileFormat" id="fileFormat">
                                    <option value="svg">SVG</option>
                                    <option value="jpg">JPG</option>
                                    <option value="png">PNG</option>
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

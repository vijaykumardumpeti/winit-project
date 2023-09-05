import React from 'react';
import './index.css'; // Import the CSS for styling

const Popup = ({ show, onClose, channelName, channelDetails, items }) => {
  return show ? (
    <div className="popup">
      <div className="popup-header">
        <div className="channel-name">{channelName}</div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
        <div className="popup-content">
        {
            channelName === 'Products'? 
            (
                <div className='header2'>
                <p>{channelDetails}</p>
                <p>is MSL</p>
            </div>
            ):(
                <div className='header'>
                <h2>{channelDetails}</h2>
            </div>
            )
        }
        <ul>
            {
            channelName === 'Products'? 
            (items.map((item, index) => (
                <li className='list-item' key={item.id}>
                
                        <input id={item.id} className='radio-input' type="checkbox"/>
                        <label  htmlFor={item.id} className='label-element'>
                            <p className='code'>{item.code}</p>
                            <p>{item.name}</p>
                        </label>
                 
                  
                        <input  id={item.id}  type="checkbox" className="is-msl-checkbox"/>
                   
            </li>
              ))): 
          (items.map((item, index) => (
            <li className='list-item' key={item.id}>
                <input id={item.id} className='radio-input' type="radio" name="customer"/>
                <label  htmlFor={item.id} className='label-element'>
                    <p className='code'>{item.code}</p>
                    <p>{item.name}</p>
                </label>
            </li>
          )))
}
        </ul>
      </div>
      <div className='button-container'>
            <button type='button'>Save</button>
        </div>
    </div>
  ) : null;
};

export default Popup;

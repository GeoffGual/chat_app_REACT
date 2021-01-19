import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


function Contact (props) {
    return (
        <div className="Contact">
            <div>
                <img className='avatar' src={props.url}></img>
            </div>
            <div>
                <h4 className="name"> {props.name} </h4>
                <div className="status">
                    <div className={"status-" + (props.online ? 'online': 'offline')}></div>
                    <p className="status-text"> {props.online ? 'Online': 'Offline'}</p>
                </div>
            </div>
        </div>
    );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    online : PropTypes.bool.isRequired,
  };

export default Contact;
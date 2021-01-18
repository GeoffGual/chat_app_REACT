import React from 'react';
import './Contact.css';
const isOnline = true;

function Contact () {
    return (
        <div className="Contact">
            <div>
                <img className='avatar' src='https://i.postimg.cc/BQW4FPd6/pikachu.png'></img>
            </div>
            <div>
                <h4 className="name"> Geoff Gual </h4>
                <div className="status">
                    <div className={"status-" + (isOnline ? 'online': 'offline')}></div>
                    <p className="status-text"> {isOnline ? 'Online': 'Offline'}</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
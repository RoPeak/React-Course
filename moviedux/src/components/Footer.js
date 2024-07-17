import React from 'react';

export default function Footer() {
    const currYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <p className='footer-text'>
            © {currYear} Moviedux, All rights reserved.
            </p>
        </footer>
    );
}
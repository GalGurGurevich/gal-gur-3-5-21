import React from 'react'
import './Footer'

export default function Footer({ apiError }) {

    return (
        <div className="footer-container">
            {apiError && <span className="error-span">Oops! Sorry service currently unavailble! will try again soon :)</span>}
        </div>
    )
}

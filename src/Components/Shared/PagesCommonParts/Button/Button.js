import React from 'react'
import './Button.css'

export default function Button({func, txt}) {
    return (
        <button className="btn" onClick={func}>{txt}</button>
    )
}

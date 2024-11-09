import React from 'react'
import './styles.scss/button.scss'
import { useState } from 'react'
const ButtonSpecial = () => {
    const [buttonText, setButtonText] = useState("YETKİLİ ELEKTRİK")
    const handleMouseEnter = () => {
        setButtonText('HEMEN BİZİ ARAYIN')
    }
    const handleMouseLeave = () => {
        setButtonText('YETKİLİ ELEKTRİK')
    }
    return (
        <>
            <button
                className='special-button'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {buttonText}
            </button>

        </>
    )
}

export default ButtonSpecial

import React from 'react'
import './styles.scss/whatsapp.scss'
const Whatsapp = () => {
    return (
        <>
            <div className='container-fluid whatsapp-info-container position-sticky top-0'>
                <div className='row'>
                    <div className='col-12 px-5'>
                        <a href="https://wa.me/905313606918" target='_blank'>
                            <i class="bi bi-whatsapp"></i> Whatsapp
                        </a>
                        <a href="tel:+905313606980">
                            <i class="bi bi-telephone-plus" id='special-icon-head'></i> +90 531 360 6918
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whatsapp
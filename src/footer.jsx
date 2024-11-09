import React from 'react'

const footer = () => {
    return (
        <>

            <footer className="bg-body-tertiary text-center mt-5">
                {/* Grid container */}
                <div className="container p-4 pb-0">

                    {/* Section: Social media */}

                    <section className="mb-4">



                        {/* Whatsapp */}
                        <a
                            href="https://wa.me/905313606980" target='_blank'
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: 'green' }}
                            role="button"
                        >
                            <i class="bi bi-whatsapp"></i>
                        </a>

                        {/* Google */}
                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: '#dd4b39' }}
                            href="#"
                            role="button"
                        >
                            <i className="fab fa-google"></i>
                        </a>

                        {/* Instagram */}
                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: '#ac2bac' }}
                            href="https://www.instagram.com/yetkilielektrik/"
                            target='_blank'
                            role="button"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>

                        {/* Mail */}
                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: '#0082ca' }}
                            href="mailto:yetkilielektrik.com"
                            target='_blank'
                            role="button"
                        >
                            <i class="bi bi-envelope"></i>
                        </a>



                    </section>
                    {/* Section: Social media */}
                </div>
                {/* Grid container */}

                {/* Copyright */}
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2020 Copyright:
                    <a className="text-body" href="https://userutkudava.github.io/portfolio" target="_blank">
                        UTKU DAVA
                    </a>
                </div>
                {/* Copyright */}
            </footer >
        </>
    )
}

export default footer
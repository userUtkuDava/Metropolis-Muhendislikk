import React, { useState, useEffect } from 'react';
import './styles.scss/services.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

// resimler
import bedas from './assets/bedaş.png';
import services1 from './assets/services-1.png';
import services2 from './assets/services-2.png';
import services3 from './assets/services-3.png';
import services4 from './assets/services-4.png';
import services5 from './assets/services-5.png';
import services6 from './assets/services-6.jpg';





const Services = () => {
    const [detailServiceActive, setDetailServiceActive] = useState(false)
    const detailService = () => {

    };

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div
                        className="col-12 col-md-4 bedaş"
                    >
                        <img src={bedas} alt="BEDAŞ" />
                    </div>
                    <div className='col-12 col-md-8  main-text-container p-5'>
                        <h1 className='main-text'>
                            YETKİLİ ELEKTRİK & PROJE MUHENDİSLİĞİ
                        </h1>
                        <p className='mt-3'>

                            <strong>Elektrik Projeleri ve Enerji Çözümleri</strong><br />

                            Hizmetlerimiz
                            Elektrik altyapı projelerinizde uzman kadromuz ve deneyimimizle, Ağ ve Og (Orta Gerilim ve Alçak Gerilim) enerji talepleri, topraklama raporları, elektrik tesisat kontrol raporları gibi önemli hizmetleri sunmaktayız. Ayrıca, BEDAŞ ve AYEDAŞ gibi dağıtım şirketlerine yönelik taleplerinizin takibi, projelendirilmesi ve onay süreçlerinde de hizmet vermekteyiz.
                        </p>
                        <button className='btn btn-light brand-color-text mt-3 fw-bold'>
                            <a href='tel:+905313606980'
                            >
                                <i
                                    class="bi bi-telephone">
                                </i>
                                0531 360 69 18
                            </a>
                        </button>
                    </div>
                </div>
            </div >

            <section id='hizmetler' className='container services-container'>
                <div
                    className='title'
                    data-aos="zoom-in"
                    data-aos-duration="300"
                    data-aos-delay="100"
                >
                    <h1 className='page-title'>
                        Enerji Dağıtım Projeleri
                    </h1>
                    <p className='title-description'>
                        Elektrik Plan – Proje <br /> Tesisat ve Mühendislik Hizmetleri
                    </p>
                </div>

                <div className="row custom-div-container">
                    <div
                        className={`col-12 col-md-4 mt-5 custom-div`}
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay="200"
                    >
                        <img
                            src={services1}
                            alt="Elektrik İç Tesisat Proje Çizimi"
                        />
                        <div className='text-img-services'>
                            <i class="bi bi-pencil services-icons"></i> <h2>Elektrik İç Tesisat Proje Çizimi</h2>
                        </div>

                    </div>

                    <div
                        className="col-12 col-md-4 mt-5  custom-div"
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay="400"
                    >
                        <img
                            src={services2}
                            alt="Araç Sarj İstaysonu Proje"
                        />
                        <div className='text-img-services'>
                            <i class="bi bi-ev-front services-icons"></i> <h2>Araç Sarj İstasyonları</h2>
                        </div>
                    </div>

                    <div
                        className="col-12 mb-3 col-md-4 mt-5 custom-div"
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay="600"
                    >
                        <img
                            src={services3}
                            alt="Topraklama Ölçüm Raporu"
                        />
                        <div className='text-img-services'>
                            <i class="bi bi-paperclip services-icons"></i> <h2>Topraklama Ölçüm Raporu</h2>
                        </div>
                    </div>
                    <div
                        className="col-12 mb-3 col-md-4  mt-5 custom-div"
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay="800"
                    >
                        <img
                            src={services4}
                            alt="Güç Arttırım Projesi"
                        />
                        <div className='text-img-services'>
                            <i class="bi bi-battery-charging services-icons"></i>  <h2>Güç Arttırım Projesi</h2>
                        </div>
                    </div>

                    <div
                        className="col-12 mb-3 col-md-4  mt-5 custom-div"
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay="1000"
                    >
                        <img
                            src={services5}
                            alt="Trafo Projelendirme & Onay"
                        />
                        <div className='text-img-services'>
                            <i class="bi bi-bookmark-check services-icons"></i> <h2>Trafo Projelendirme & Onay</h2>
                        </div>
                    </div>

                    <div
                        className="col-12 mb-3 col-md-4 mt-5 custom-div"
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay="1200"
                    >
                        <img
                            src={services6}
                            alt="jenaratör Proje Ve Ruhsatlandırma"
                        />
                        <div className='text-img-services'>
                            <i class="bi bi-activity services-icons"></i>  <h2>Ağ ve Og enerji talepleri</h2>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Services;

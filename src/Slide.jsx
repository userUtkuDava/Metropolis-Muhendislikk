import React, { useEffect } from 'react';
import İnfoHead from './İnfohead';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.scss/slide.scss';
// import required modules
import { Navigation } from 'swiper/modules';
// import resimler 
import slideİmg1 from './assets/slide-1.jpg';
import slideİmg2 from './assets/slide-2.jpg';
import slideİmg3 from './assets/slide-3.jpg';
import slideİmg4 from './assets/slide-4.jpg';

const Slide = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <section className='slide-description-content' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <h1>Yetkili elektrik<br /> <span className='text'>fen adamı</span></h1>
                        <p>Teknik yetkinlik gerektiren süreçlerde görev alarak ve enerjinin hatasız ve sistematik şekilde kullanıcıya gitmesini sağlamaktayız.</p>
                    </section>
                    <img className='slide-img' src={slideİmg1} alt='Yetkili elektrik fen adamı' />
                </SwiperSlide>
                <SwiperSlide>
                    <section className='slide-description-content'>
                        <h1>Elektrik proje<br /> <span className='text'>Yönetimi</span></h1>
                        <p>Biz, <strong>Yetkili Elektrik</strong> olarak elektrik proje yönetiminde uzmanlaşmış bir firmayız. Elektrik altyapı ve sistem projelerinde yüksek kaliteyi hedefliyoruz.</p>

                    </section>
                    <img className='slide-img' src={slideİmg2} alt='Elektrik proje yönetimi' />
                </SwiperSlide>
                <SwiperSlide>
                    <section className='slide-description-content' >
                        <h1>Topraklama <br /> <span className='text'>raporu</span></h1>
                        <p>Topraklama sistemlerinin güvenli çalışması için profesyonel topraklama raporu hizmeti sunuyoruz. Elektrik tesisatlarında güvenliği artırmak için uluslararası standartlara uygun ölçüm ve analizler yapıyoruz.</p>

                    </section>
                    <img className='slide-img' src={slideİmg3} alt='Ağ, OG ve AG enerji talepleri' />
                </SwiperSlide>
                <SwiperSlide>
                    <section className='slide-description-content'>
                        <h1>Ağ, OG ve AG  <br /> <span className='text'>enerji talepleri</span></h1>
                        <p>Ağ, OG ve AG enerji talepleri konusunda uzmanlaşmış bir firmayız. Enerji altyapılarının planlama, tasarım ve yönetimi alanında geniş deneyime sahibiz. Projelerinizin enerji ihtiyacını doğru belirleyerek, güvenli ve verimli çözümler sunuyoruz.</p>

                    </section>
                    <img className='slide-img' src={slideİmg4} />
                </SwiperSlide>
            </Swiper>
            <İnfoHead />
        </>
    );
}

export default Slide;

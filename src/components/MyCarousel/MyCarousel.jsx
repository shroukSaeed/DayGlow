import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

export default function MyCarousel() {
    return (
        <div className="" >
            <Carousel>

                <Carousel.Item className=' position-relative'>

                    <div className="img-holder1  ">
                        <div className='position-absloute bg-dark bg-opacity-50 overlay'>

                            {/* <img className='crsl.img  w-100' src='' alt='...' /> */}
                        </div>
                    </div>
                    <Carousel.Caption className=' position-absloute top-50  start-50 translate-middle  py-5'>
                        <h5 className=''>Stay Healthy Stay Strong</h5>
                        <h1 className='p-4'>Diet Healthy Fruites in Every Morning</h1>
                        <Link to={'/menue'} className=' btn-warning rounded text-light px-3 py-2 text-decoration-none fw-bolder'>Order Now</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className=' position-relative'>
                    <div className="img-holder2">
                        <div className='position-absloute bg-dark bg-opacity-50 overlay'>
                        </div>
                    </div>
                    <Carousel.Caption className=' position-absloute top-50  start-50 translate-middle py-5'>
                        <h5 className=''>Stay Healthy Stay Strong</h5>
                        <h1 className='p-4'>Diet Healthy Fruites in Every Morning</h1>
                        <Link to={'/menue'} className=' btn-warning rounded text-light px-3 py-2 text-decoration-none fw-bolder'>Order Now</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className=' position-relative'>
                    <div className="img-holder3">
                        <div className='position-absloute bg-dark bg-opacity-50 overlay'>
                        </div>
                    </div>
                    <Carousel.Caption className=' position-absloute top-50  start-50 translate-middle py-5'>
                        <h5 className=''>Stay Healthy Stay Strong</h5>
                        <h1 className='p-4'>Diet Healthy Fruites in Every Morning</h1>
                        <Link to={'/menue'} className=' btn-warning rounded text-light px-3 py-2  text-decoration-none fw-bolder'>Order Now</Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

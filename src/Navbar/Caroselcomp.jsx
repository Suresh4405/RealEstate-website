import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Homee from "../assets/Homee.jpg"
import plan from "../assets/plan.png"
import hh2 from "../assets/hh2.jpg"
import "./RealEstate.css"

function Caroselcomp() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={Homee} className="Homee-img" alt='Dream home' text="First slide" />
        <Carousel.Caption>
          <h3>if you can dream, we can create it</h3>
          <p>
            Find out Your House without any difficulties
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={plan} className="Homee-img" alt='Engineers' text="Second slide" />
        <Carousel.Caption>
          <h3>Plan as your wish</h3>
          <p>Conselt With our best Engineers</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={hh2} className="Homee-img" alt='Buy now' text="First slide" />
        <Carousel.Caption>
          <h3>High quality in low budget </h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Caroselcomp;
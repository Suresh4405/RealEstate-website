import Carousel from 'react-bootstrap/Carousel';
import tony from "../assets/tony.jpg"
import captain from "../assets/captain.jpg"
import hulk from "../assets/hulk.jpg"
import thor from "../assets/thor.jpeg"
import loki from "../assets/loki.jpeg"
import "./Agent.css"

function Agent() {
  return (
    <div>
      <div className="doc-6">
            <h4 className="client">Our Clients Review</h4>
            <p className="para">Working together as the VIP Real Estate Team, we are very thankful for our loyal clients.  Our business is one of close relationships and we are very fortunate to be able to share so many positive real estate experiences with our clients.  Your satisfaction is the ultimate reward for our work and it is why we strive to be Your Louisville Real Estate Experts!</p>
           
        </div>
    <Carousel className='caro-edit'>
      <Carousel.Item>
        <img src={tony} className='hero-img' text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={captain} className='hero-img' text="Second slide" />
      
      </Carousel.Item>
      <Carousel.Item>
        <img src={hulk} className='hero-img' text="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={thor} className='hero-img' text="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={loki}className='hero-img' text="Third slide" />
      </Carousel.Item>
    </Carousel>
    
    </div>
  );
}

export default Agent;
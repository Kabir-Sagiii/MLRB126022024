import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function MyCarousel() {
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <Carousel
        autoPlay={true}
        interval={2000}
        infiniteLoop
        showThumbs={false}
        showArrows={true}
      >
        <div>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/489d3110296ee3bc.jpg?q=20"
            width="100%"
            height="350px"
          />
        </div>
        <div>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8a89ee09acc1a9e5.jpg?q=20"
            width="100%"
            height="350px"
          />
        </div>
        <div>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4529fd434a85c683.jpg?q=20"
            width="100%"
            height="350px"
          />
        </div>
        <div>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5f478a106d047aba.jpg?q=20"
            width="100%"
            height="350px"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default MyCarousel;

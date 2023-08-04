import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <div className='homepagestyle' id="homepagestyle">
    <Carousel id="ci">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rfxcel.com/wp-content/uploads/2018/07/thumbnail-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption id="b">
        {/* <h2>Track & Trace Application</h2>
         Welcome &nbsp;{window.localStorage.getItem('loggedInUsername')} */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rfxcel.com/wp-content/uploads/2018/07/thumbnail-1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption id="b">
       
         Welcome &nbsp;{window.localStorage.getItem('loggedInUsername')}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rfxcel.com/wp-content/uploads/2018/07/thumbnail-1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption id="b">
      
       <span>Welcome</span>   &nbsp;{window.localStorage.getItem('loggedInUsername')}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slider;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router";
// import {
//   MDBCarousel,
//   MDBCarouselItem,
// } from 'mdb-react-ui-kit';

// export default function slider() {
//   var username = window.localStorage.getItem('loggedInUsername')
//   return (
//     <MDBCarousel showIndicators showControls fade id="ca">
//       <MDBCarouselItem
//         className='w-100 d-block'
//         itemId={1}
//         src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
//         alt='...'
//       >
//         <h5>Track & Trace Application</h5>
//         Welcome &nbsp;{window.localStorage.getItem('loggedInUsername')}
//       </MDBCarouselItem>

//       <MDBCarouselItem
//         className='w-100 d-block'
//         itemId={2}
//         src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
//         alt='...'
//       >
//         <h5>Track & Trace Application</h5>
//         Welcome &nbsp;{window.localStorage.getItem('loggedInUsername')}
//       </MDBCarouselItem>

//       <MDBCarouselItem
//         className='w-100 d-block'
//         itemId={3}
//         src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
//         alt='...'
//       >
//         <h5>Track & Trace Application</h5>
//         Welcome &nbsp;{window.localStorage.getItem('loggedInUsername')}
//       </MDBCarouselItem>
//     </MDBCarousel>
//   );
// }
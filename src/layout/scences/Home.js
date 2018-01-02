import React, { Component } from 'react';
import { Carousel, Image, Jumbotron } from 'react-bootstrap';

class Home extends Component {
  render() {
      var carousel_css={
            width:"100%",
            height:"80%",
            margin: "auto"
      }
    return ( 
      <div className="container">           
        <Jumbotron className="jumbo">
        <h2>Welcome!</h2>
        <p>In here, you can write blogs, share ideas, comment on other ideas and explore different views about many subjects </p>
        </Jumbotron>
          <Carousel style={carousel_css}>
            <Carousel.Item>
              <Image width="100%" src={require("./components/images/slide1.jpg")}/>              
            </Carousel.Item>
            <Carousel.Item>
              <Image width="100%" src={require("./components/images/slide2.jpg")}/>           
            </Carousel.Item>
            <Carousel.Item>
              <Image width="100%" src={require("./components/images/slide3.jpg")}/>            
            </Carousel.Item>
          </Carousel>  
      </div>       
           );
  }
}

export default Home;

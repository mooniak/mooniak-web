import React from 'react';
import Styled from 'styled-components';
import Slider from 'react-slick';

import Cover from '../assets/images/Cover.png';
import Cover2 from '../assets/images/Farmer_Slider.png';

const Container = Styled.div`
  height: 60vh;
`;

class SliderComponent extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 300,
      arrows: false,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true
    };

    return (
      <Container>
        <Slider { ...settings }>
          <img src={ Cover } alt="No Cover" height="420" />
          <img src={ Cover2 } alt="No Cover" height="420" />
        </Slider>
      </Container>
    );
  }
}


export default SliderComponent;

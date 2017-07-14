import React from 'react';
import Styled from 'styled-components';
import Slider from 'react-slick';

import Cover from '../assets/images/cover.png';
import Cover2 from '../assets/images/farmer_slider.png';


const Container = Styled.div`
  height: 60vh;
`;

const SliderContainer = Styled(Slider)`
  width: 100%;
`;

const SlickImage = Styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  height: 50vh;
`;

class SliderComponent extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 300,
      arrows: false,
      draggable: false,
      autoplay: true,
      slidesToShow: 1,
      fade: true
    };

    return (
      <Container>
        <SliderContainer { ...settings }>
          <SlickImage src={ Cover } />
          <SlickImage src={ Cover2 } />
        </SliderContainer>
      </Container>
    );
  }
}


export default SliderComponent;

import React from 'react';
import Styled from 'styled-components';
import Slider from 'react-slick';

const Container = Styled.div`
  height: 65vh;
  padding-left: 3vw;
  padding-right: 3vw;
  padding-bottom: 10vw;
`;

const SliderContainer = Styled(Slider)`
  width: 100%;
`;

const SlickImage = Styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  height: 60vh;
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
      fade: true,
      dots: true
    };
    const { sliderPhotos, changeBackgroundColors } = this.props;
    return (
      <Container>
        <SliderContainer
          {...settings}
          beforeChange={(index) => {
            changeBackgroundColors(sliderPhotos[index].bgColor, sliderPhotos[index].altColor);
          }}
        >
          {sliderPhotos.map((photoObject => <SlickImage src={photoObject.src} />))}
        </SliderContainer>
      </Container>
    );
  }
}


export default SliderComponent;

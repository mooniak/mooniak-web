import React from 'react';
import Styled from 'styled-components';
import Gallery from 'react-photo-gallery';


const Container = Styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const FullThemeline = Styled.div`
  border-bottom-style:  solid;
  border-width: 1px;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const TagsRow = Styled.div`
  display: flex;
  flex-direction: row;
`;

const Tag = Styled.h3`
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
`;


class Projects extends React.Component {
  render() {
    const PHOTO_SET = [
      {
        src: 'https://preview.ibb.co/bLQSua/Carto.png',
        height: 400,
        width: 300
      },
      {
        src: 'https://preview.ibb.co/hKbBLF/Farmer.png',
        height: 400,
        width: 500
      },
      {
        src: 'https://preview.ibb.co/nx997v/Scribble.png',
        height: 400,
        width: 200
      },
      {
        src: 'https://preview.ibb.co/kGJDZa/unleash_web.png',
        height: 300,
        width: 600
      },
      {
        src: 'https://preview.ibb.co/eZUy0F/YZA.png',
        height: 300,
        width: 400
      },
      {
        src: 'https://preview.ibb.co/kxdfEa/Adam.png',
        height: 600,
        width: 400

      }
    ];
    return (
      <Container >
        <FullThemeline />
        <TagsRow>
          <Tag>branding</Tag>
          <Tag>Digital Experience</Tag>
          <Tag>Editorial & documenting design</Tag>
        </TagsRow>
        <Gallery photos={ PHOTO_SET } onClickPhoto={ this.openLightbox } />
        <FullThemeline />
      </Container>
    );
  }
}


export default Projects;

import React from 'react';
import Styled from 'styled-components';
import Gallery from 'react-photo-gallery';


const Container = Styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  padding-top: 3vw;
  padding-bottom: 3vw;
`;

const FullThemeline = Styled.div`
  border-bottom-style:  solid;
  border-width: 1px;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 2vw;
  margin-bottom: 2vw;
`;

const TagsRow = Styled.div`
  display: flex;
  flex-direction: row;
`;

const Tag = Styled.h3`
  font-size: 1vw;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
`;


class Projects extends React.Component {
  render() {
    const photos = [
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
      <Container id="projects">
        <FullThemeline />
        <TagsRow>
          <Tag>branding</Tag>
          <Tag>Digital Experience</Tag>
          <Tag>Editorial & documenting design</Tag>
        </TagsRow>
        <Gallery
          margin={0}
          photos={photos}
          // onClickPhoto={this.openLightbox}
        />
        <FullThemeline />
      </Container>
    );
  }
}


export default Projects;

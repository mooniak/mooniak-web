import React from 'react';
import Styled from 'styled-components';
import Masonry from 'react-masonry-component';

import '../assets/styles/gallery.css';


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
  font-size: 13px;
  cursor: pointer;
  margin: 10px;
`;

const ProjectImage = Styled.img`
  width: 100%;
  height: 100%;
`;

const MasonryContainer = Styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const GridItem = Styled.div`
  float: left;
  width: ${props => ((props.type === 2) ? '50%' : '25%')};
  // height: ${props => ((props.type === 3) ? '49%' : '24%')};

 `;

class Projects extends React.Component {
  render() {
    const photos = [
      {
        src: 'https://image.ibb.co/kwd3qF/default.png',
        type: 1
      },
      {
        src: 'https://image.ibb.co/hiVGAF/default_2.png',
        type: 1
      },
      {
        src: 'https://preview.ibb.co/i2CUVF/full_width.png',
        type: 2
      },
      {
        src: 'https://image.ibb.co/mbkSHv/full_height.png',
        type: 3
      },
      {
        src: 'https://image.ibb.co/kwd3qF/default.png',
        type: 1
      },
      {
        src: 'https://image.ibb.co/hiVGAF/default_2.png',
        type: 1
      },
      {
        src: 'https://image.ibb.co/kwd3qF/default.png',
        type: 1
      },
      {
        src: 'https://image.ibb.co/hiVGAF/default_2.png',
        type: 1
      },
      {
        src: 'https://preview.ibb.co/i2CUVF/full_width.png',
        type: 2
      }
    ];

    const masonryOptions = {
      transitionDuration: '0.5s',
      percentPosition: true,
      gutter: 0,
      stagger: 50
    };

    const childElements = photos.map(element => (
      <GridItem type={element.type}>
        <ProjectImage src={element.src} />
      </GridItem>
    ));

    return (
      <Container id="projects">
        <FullThemeline />
        <TagsRow>
          <Tag>branding</Tag>
          <Tag>Digital Experience</Tag>
          <Tag>Editorial & documenting design</Tag>
        </TagsRow>
        <MasonryContainer>
          <Masonry
            className={'grid'} // default ''
            elementType={'div'} // default 'div'
            options={masonryOptions} // default {}
          >
            {childElements}
          </Masonry>
        </MasonryContainer>
        <FullThemeline />
      </Container>
    );
  }
}


export default Projects;

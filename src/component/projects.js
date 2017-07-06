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
        src: 'http://example.com/example/img1.jpg',
        srcset: [
          'http://example.com/example/img1_1024.jpg 1024w',
          'http://example.com/example/img1_800.jpg 800w',
          'http://example.com/example/img1_500.jpg 500w',
          'http://example.com/example/img1_320.jpg 320w'
        ],
        sizes: [
          '(min-width: 480px) 50vw',
          '(min-width: 1024px) 33.3vw',
          '100vw'
        ],
        width: 681,
        height: 1024,
        alt: 'image 1'
      },
      {
        src: 'http://example.com/example/img2.jpg',
        srcset: [
          'http://example.com/example/img2_1024.jpg 1024w',
          'http://example.com/example/img2_800.jpg 800w',
          'http://example.com/example/img2_500.jpg 500w',
          'http://example.com/example/img2_320.jpg 320w'
        ],
        sizes: [
          '(min-width: 480px) 50vw',
          '(min-width: 1024px) 33.3vw',
          '100vw'
        ],
        width: 600,
        height: 600,
        alt: 'image 2'
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

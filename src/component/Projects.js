import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-component';
import MediaQuery from 'react-responsive';

import '../assets/styles/gallery.css';


const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 3vw;
  padding-bottom: 3vw;
  padding-top: 3vw;
  background-color: white;
  padding-left: 5vw;
  padding-right: 5vw;
`;

const FullThemeline = styled.div`
  border-bottom-style:  solid;
  border-width: 1px;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 2vw;
  margin-bottom: 1vw;
`;

const TagsRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 3vw;
`;

const TagsColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10vw;
`;

const Tag = styled.a`
  font-size: 13px;
  cursor: pointer;
  margin: 10px;
`;

const TagButton = styled.span`
  font-size: 13px;
  font-weight: 500px;
  justify-content: flex-end;
  cursor: pointer;
  padding: 10px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const MasonryContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const GridItem = styled.div`
  float: left;
  width: ${props => ((props.type === 2) ? '50%' : '25%')};
  @media (max-width: 979px){
    width: ${props => ((props.type === 2) ? '100%' : '50%')};
  }
  height: auto;
 `;


const photos = [
  {
    src: 'https://image.ibb.co/kwd3qF/default.png',
    type: 1,
    tag: [1]
  },
  {
    src: 'https://image.ibb.co/hiVGAF/default_2.png',
    type: 1,
    tag: [1, 2]
  },
  {
    src: 'https://preview.ibb.co/i2CUVF/full_width.png',
    type: 2,
    tag: [1]
  },
  {
    src: 'https://image.ibb.co/mbkSHv/full_height.png',
    type: 3,
    tag: [1, 2]
  },
  {
    src: 'https://image.ibb.co/kwd3qF/default.png',
    type: 1,
    tag: [1]
  },
  {
    src: 'https://image.ibb.co/hiVGAF/default_2.png',
    type: 1,
    tag: [1, 2]
  },
  {
    src: 'https://image.ibb.co/kwd3qF/default.png',
    type: 1,
    tag: [1]
  },
  {
    src: 'https://image.ibb.co/hiVGAF/default_2.png',
    type: 1,
    tag: [1, 2]
  },
  {
    src: 'https://preview.ibb.co/i2CUVF/full_width.png',
    type: 2,
    tag: [1, 3]
  }
];


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isProjectsExpanded: false,
      filteredList: photos
    };
  }

  filterList(filterId) {
    const filtedredPhotos = photos.filter(((photoObject) => {
      const returningArray = photoObject.tag.filter(tagElement => (tagElement === filterId));
      return (returningArray.length !== 0);
    }
    ));

    console.log(filtedredPhotos);
    this.setState({
      filteredList: filtedredPhotos
    });
  }

  render() {
    const masonryOptions = {
      transitionDuration: '0.5s',
      percentPosition: true,
      gutter: 0,
      stagger: 50
    };

    const childElements = this.state.filteredList.map(element => (
      <GridItem type={element.type}>
        <ProjectImage
          src={element.src}
        />
      </GridItem>
    ));

    return (
      <Container id="projects">
        <FullThemeline />
        <MediaQuery minWidth={978} >
          <TagsRow>
            <Tag
              onClick={() => this.filterList(1)}
            >branding</Tag>
            <Tag onClick={() => this.filterList(2)}>Digital Experience</Tag>
            <Tag onClick={() => this.filterList(3)}>Editorial & documenting design</Tag>

          </TagsRow>
        </MediaQuery>
        <MediaQuery maxWidth={979} >
          <TagsRow align={'right'}>
            <TagButton
              onClick={() => this.setState({ isProjectsExpanded: !this.state.isProjectsExpanded })}
            >
                All Works
            </TagButton>
          </TagsRow>
          {(this.state.isProjectsExpanded) ?
            <TagsColumn>
              <Tag>branding</Tag>
              <Tag>Digital Experience</Tag>
            </TagsColumn>
            : null
          }
        </MediaQuery>
        <MasonryContainer>
          <Masonry
            className={'grid'} // default ''
            elementType={'div'} // default 'div'
            options={masonryOptions} // default {}
            onClick={() => this.props.onClickAction()}
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

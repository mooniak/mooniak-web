import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import FontAwesome from 'react-fontawesome';
import Masonry from 'react-masonry-component';
// import MediaQuery from 'react-responsive';

import '../assets/styles/gallery.css';


const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const MasonryContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ProjectWrapper = styled.div`
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

const ExpandContainer = styled.div`
  height: 30vh;
  width: 100%;
  display: flex;
  background-color: white;
  padding-bottom: 3vh;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
`;

const GridItem = styled.div`
  float: left;
  width: ${props => ((props.type === 2) ? '100%' : '50%')};
  height: auto;
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
   flex-grow: 1;
   justify-content: center;
   flex-direction: row;
   margin-bottom: 3vw;
 `;

const Tag = styled.h3`
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

const BackButtonContainer = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: flex-start;
  cursor: pointer;
`;

const ProjectTitle = styled.span`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  font-size: 14px;
  font-weight: 500px;
  padding: 10px;
`;

const ProjectTitleLarge = styled.span`
  display: flex;
  justify-content: flex-start;
  font-size: 50px;
  font-weight: 200px;
  margin: auto;
  padding-left: 0px;
`;

const ProjectDesc = styled.p`
  display: flex;
  align-self: flex-start;
  font-size: 14px;
  font-weight: 500px;
`;

const MoreButtonContainer = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: flex-end;
`;

const MoreTagsRow = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
`;

const DetailRow = styled(Row)`
  margin: auto;
  align-self: flex-end;
`;


class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isProjectDetailsExpanded: false
    };
  }

  render() {
    const { isProjectDetailsExpanded } = this.state;
    const { onClickAction } = this.props;

    const photos = [
      {
        src: 'https://preview.ibb.co/i2CUVF/full_width.png',
        type: 2
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
        src: 'https://image.ibb.co/kwd3qF/default.png',
        type: 1
      },
      {
        src: 'https://image.ibb.co/hiVGAF/default_2.png',
        type: 1
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
      <Container>
        <ProjectWrapper>
          <FullThemeline />
          {/* <MediaQuery minWidth={978} > */}
          <TagsRow>
            <BackButtonContainer>
              <TagButton
                onClick={() => onClickAction()}
              >
                {'<- Back'}
              </TagButton>
              {(!isProjectDetailsExpanded) ?
                <ProjectTitle>Magical Island Story Book</ProjectTitle>
                : null}
            </BackButtonContainer>
            <MoreButtonContainer>
              <MoreTagsRow>
                <Tag>branding</Tag>
                <Tag>Digital Experience</Tag>
                <Tag>Editorial & documenting design</Tag>
              </MoreTagsRow>
              <TagButton
                onClick={() =>
                  this.setState({
                    isProjectDetailsExpanded: !isProjectDetailsExpanded
                  })
                }
              >
                {
                  (!isProjectDetailsExpanded) ?
                    'Show More' : 'Close'
                }
              </TagButton>
            </MoreButtonContainer>
          </TagsRow>
          {/* </MediaQuery> */}
          {/*
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
                <Tag>Editorial & documenting design</Tag>
              </TagsColumn>
              : null
            }
          </MediaQuery>*/}
          {(isProjectDetailsExpanded) ?
            <ExpandContainer id="overlay" >
              <Grid fluid>
                <Row>
                  <Col xs={12} sm={12} md={6} lg={6} >
                    <ProjectTitleLarge>Magical Island</ProjectTitleLarge>
                    <DetailRow>
                      <ProjectDesc>Client: Magic Isle</ProjectDesc>
                      <ProjectDesc>Link</ProjectDesc>
                    </DetailRow>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} >
                    <ProjectDesc>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </ProjectDesc>
                  </Col>
                </Row>
              </Grid>
            </ExpandContainer>
            : null}
          <MasonryContainer>
            <Masonry
              className={'grid'} // default ''
              elementType={'div'} // default 'div'
              options={masonryOptions} // default {}
            >
              {childElements}
            </Masonry>
          </MasonryContainer>
        </ProjectWrapper>
      </Container>
    );
  }
}


export default Project;

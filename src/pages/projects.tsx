import React from 'react';
import { Helmet } from 'react-helmet';
import { Title } from '../components/title';
import { ProjectsGrid, ProjectsGridItem } from '../components/projects-grid';

const IndexPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Title level={1} className='content__row'>
        Projects
      </Title>
      <ProjectsGrid>
        <ProjectsGridItem color='#1DE9B6' columns='2 / 7' rows='2 / 2' link='https://github.com/ifelseapps/mock-server'>
          <Title as='div' level={3}>
            Mock server
          </Title>
          <p>The simple mock server that accepts CLI options: code and body of response/file with body of the response, route, timeout</p>
        </ProjectsGridItem>
      </ProjectsGrid>
    </>
  );
};

export default IndexPage;

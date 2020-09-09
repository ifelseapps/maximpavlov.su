import React from 'react';
import { Helmet } from 'react-helmet';
import { useConfig } from '../context/config';
import { Title } from '../components/title';
import { Content } from '../components/content';

import './post.css';

interface ITravelsPostProps {
  data: any;
  pageContext: {
    title: string;
    slug: string;
    year: number;
    content: string;
  };
}

const TravelsPost: React.FC<ITravelsPostProps> = ({ pageContext }) => {
  const { layout } = useConfig();
  return (
    <article className='content__row-full-width'>
      <Helmet>
        <title>{`${layout.title}, ${pageContext.title} (${pageContext.year})`}</title>
      </Helmet>
      <Content>
        <Title className='content__row' level={1}>
          {pageContext.title}
        </Title>
        <div className='html-content content content__row-full-width' dangerouslySetInnerHTML={{ __html: pageContext.content }}/>
      </Content>
    </article>
  );
};

export default TravelsPost;

import React from 'react';
import { Helmet } from 'react-helmet';
import { Title } from '../components/title';
import { useConfig } from '../context/config';

const IndexPage: React.FC = () => {
  const { notes } = useConfig();

  return (
    <>
      <Helmet>
        <title>Notes</title>
      </Helmet>
      <Title level={1} className='content__row'>
        Notes
      </Title>
      <ul className='content__row'>
        {notes.map((note) => (
          <li key={note.name}>
            <a href={note.link} target='_blank'>
              {note.name} ({note.language})
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IndexPage;

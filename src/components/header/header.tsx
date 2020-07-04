import React from 'react';
import { useConfig } from '../../context/config';

export const Header: React.FC = () => {
  const config = useConfig();
  return (
    <header>
      {config.layout.title} - {config.layout.description}
    </header>
  );
};

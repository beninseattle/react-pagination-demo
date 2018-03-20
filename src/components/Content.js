import React from 'react';

import './Content.css';
import PagedList from './list/PagedList';

const Content = () => {
  return (
    <main className="content">
      <PagedList title="Awesome" />
    </main>
  );
};

export default Content;
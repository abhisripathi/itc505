// src/HTMLLoader.js

import React from 'react';

function HTMLLoader(props) {
  return (
    <iframe 
      title="HTML Content"
      src={props.url} 
      style={{ width: '100%', height: '100vh', border: 'none' }} 
      sandbox="allow-same-origin"
    ></iframe>
  );
}

export default HTMLLoader;

import React from 'react'
import { useState } from 'react';
function MainPages() {
  const [selectedLink, setSelectedLink] = useState(null);

  const displayContent = (content) => {
    setSelectedLink(content);
  };
  return (
   <>
   main page
   </>
  )
}

export default MainPages

import React from 'react';

const links = ['GitHub Profile: https://github.com/jpuerari', 'LinkedIn Profile: https://www.linkedin.com/in/josephdpuerari/']

function linkList() {

return (
  <div>
    <p className='tertiary'>{links[0]}</p>
    <p className='tertiary'>{links[1]}</p>
  </div>
)
}


export default linkList;
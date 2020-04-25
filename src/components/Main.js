import React from 'react';



const links = ['GitHub Profile: https://github.com/jpuerari', 'LinkedIn Profile: https://www.linkedin.com/in/josephdpuerari/']


function Main() {
  return (
    <div h1 className='secondary'>
      <h1>Here are my portfolio links</h1>

      <p className='tertiary'>{links[0]}</p>
      <p className='tertiary'>{links[1]}</p>



      <div class="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="josephdpuerari"><a class="LI-simple-link" href='https://www.linkedin.com/in/josephdpuerari?trk=profile-badge'>Joseph P.</a></div>

    </div>
  );
}

export default Main;
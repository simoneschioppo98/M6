import React from 'react';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import LatestRelease from './components/LatestRelease';

const App = () => {
  return (
    <div>
      <MyNav />
        <Welcome/>
        <LatestRelease/>
      <MyFooter/>

    </div>
  );
};

export default App;

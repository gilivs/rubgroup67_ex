import React from 'react';
import Home from '@material-ui/icons/Home';
import ArrowBack from '@material-ui/icons/ArrowBack'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {Link} from 'react-router-dom'
const Navigation =()=> {
  return (
    <BottomNavigation>
      <BottomNavigationAction 
      label="Favorites" 
      value="favorites" 
      icon={<ArrowBack />}
      component={Link}
      to='/' />
      <BottomNavigationAction
      label="Recents" 
      value="recents" 
      icon={<Home />}
      component={Link}
      to='/people' />

    </BottomNavigation>
  );
}

export default Navigation;
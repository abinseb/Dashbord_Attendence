import React from 'react';
import { AppBar, Button, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const DashbordHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar
      style={{ backgroundColor: '#1e7898', height: isMobile ? '100px' : '150px' }}
      position="static"
    >
      <Toolbar
        style={{
          display: 'flex',
          justifyContent: 'space-between', // Align items to the right
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            style={{ height: '100px', width: '100px', paddingTop: '20px' }}
            src={require('./../images/images.png')}
            alt="logo"
          />

          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            style={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              paddingLeft: isMobile ? '5px' : '10px',
            }}
          >
            ICSET DASHBORD
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
  <Button style={{ backgroundColor: 'black', color: 'white' }}>
    <Link style={{ textDecoration: 'none', color: 'white' }}>
      Reception
    </Link>
  </Button>
  <Button
    color="inherit"
    style={{
      color: 'white',
      marginRight: isMobile ? '5px' : '10px',
      marginLeft: isMobile ? '5px' : '20px',
    }}
  >
    <Link style={{ textDecoration: 'none', color: 'white' }}>
      Google
    </Link>
  </Button>
  <Button
    color="inherit"
    style={{
      color: 'white',
      marginRight: isMobile ? '5px' : '10px',
      marginLeft: isMobile ? '5px' : '20px',
    }}
  >
    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/aboutus'}>
      IBM
    </Link>
  </Button>
</div>


      </Toolbar>
    </AppBar>
  );
};

export default DashbordHeader;
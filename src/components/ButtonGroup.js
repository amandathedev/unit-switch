import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ThermostatIcon from '@mui/icons-material/WbSunny';
import StraightenIcon from '@mui/icons-material/Straighten';
import SpeedIcon from '@mui/icons-material/Speed';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ScaleIcon from '@mui/icons-material/Balance';

const ButtonGroup = (props) => {
  return (
    <Box sx={{ backgroundColor: '#282828', padding: 2, width: '21em', borderRadius: '8px' }}>
      <Typography variant="h4" sx={{ color: 'white', fontWeight: 300, fontSize: '1.5em', marginBottom: '0.2em', textAlign: 'center' }}>
        UnitSwitch
      </Typography>

      <Button
        variant="contained"
        fullWidth
        sx={{
          margin: '0.5em 0', backgroundColor: '#C74BF6', color: 'black', fontWeight: 700,
          borderRadius: '10px', height: '60px', fontSize: '1.1em'
        }}
        startIcon={<ThermostatIcon sx={{ fontSize: '1.5em' }} />}
        onClick={() => props.setDisplaying('temperature')}
      >
        Temperature
      </Button>

      <Button
        variant="contained"
        fullWidth
        sx={{
          margin: '0.5em 0', backgroundColor: '#9A75F0', color: 'black', fontWeight: 700,
          borderRadius: '10px', height: '60px', fontSize: '1.1em'
        }}
        startIcon={<StraightenIcon sx={{ fontSize: '1.5em' }} />}
        onClick={() => props.setDisplaying('length')}
      >
        Length
      </Button>

      <Button
        variant="contained"
        fullWidth
        sx={{
          margin: '0.5em 0', backgroundColor: '#6E9EEB', color: 'black', fontWeight: 700,
          borderRadius: '10px', height: '60px', fontSize: '1.1em'
        }}
        startIcon={<ScaleIcon sx={{ fontSize: '1.5em' }} />}
        onClick={() => props.setDisplaying('weight')}
      >
        Weight
      </Button>

      <Button
        variant="contained"
        fullWidth
        sx={{
          margin: '0.5em 0', backgroundColor: '#41C8E5', color: 'black', fontWeight: 700,
          borderRadius: '10px', height: '60px', fontSize: '1.1em'
        }}
        startIcon={<SpeedIcon sx={{ fontSize: '1.5em' }} />}
        onClick={() => props.setDisplaying('speed')}
      >
        Speed
      </Button>

      <Button
        variant="contained"
        fullWidth
        sx={{
          margin: '0.5em 0', backgroundColor: '#14F2E0', color: 'black', fontWeight: 700,
          borderRadius: '10px', height: '60px', fontSize: '1.1em'
        }}
        startIcon={<RestaurantMenuIcon sx={{ fontSize: '1.5em' }} />}
        onClick={() => props.setDisplaying('cooking')}
      >
        Cooking
      </Button>
    </Box>
  );
};

export default ButtonGroup;

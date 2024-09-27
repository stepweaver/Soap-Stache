import heroImage from '../../assets/Brewed Awakening.jpg';
import { Box, useMediaQuery } from '@mui/material';

const HeroImage = () => {

  return (
    <Box position='relative'>
      <img
        src={heroImage}
        alt='hero'
        style={{
          width: '100%',
          height: '700px',
          objectFit: 'cover',
          backgroundAttachment: 'fixed',
        }}
      />
    </Box>
  );
};

export default HeroImage;

import { useDispatch, useSelector } from 'react-redux';
import { Badge, Box, IconButton, Typography } from '@mui/material';
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { shades } from '../../theme';
import logo from '../../assets/noun-6405073-700.png';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Box
      display='flex'
      alignItems='center'
      width='100%'
      height='60px'
      backgroundColor='rgba(255, 255, 255, 0.95)'
      color='black'
      position='fixed'
      top='0'
      left='0'
      zIndex='1'
    >
      <Box
        width='80%'
        margin='auto'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Box
          onClick={() => navigate('/')}
          sx={{ '&:hover': { cursor: 'pointer' } }}
          color={shades.secondary[500]}
          display='flex'
          alignItems='center'
        >
          <img
            src={logo}
            alt='logo'
            width='60px'
            style={{ marginRight: '10px' }}
          />
          <Typography
            variant='h2'
            component='span'
            fontWeight='bold'
            sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', letterSpacing: '2px' }}
          >
            Soap Stache
          </Typography>
        </Box>
        <Box
          display='flex'
          justifyContent='space-between'
          columnGap='20px'
          zIndex='2'
        >
          <IconButton sx={{ color: 'black' }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: 'black' }}>
            <PersonOutline />
          </IconButton>
          <IconButton sx={{ color: 'black' }}>
            <ShoppingBagOutlined />
          </IconButton>
          <IconButton sx={{ color: 'black' }}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;

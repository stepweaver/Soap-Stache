import { useTheme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { shades } from '../../theme';

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box mt='70px' p='40px 0' backgroundColor={neutral.light}>
      <Box
        width='80%'
        margin='auto'
        display='flex'
        justifyContent='space-between'
        flexWrap='wrap'
        rowGap='30px'
        columnGap='clamp(20px, 30px, 40px)'
      >
        <Box width='clamp(20%, 30%, 40%)'>
          <Typography
            variant='h3'
            fontWeight='bold'
            mb='30px'
            color={shades.secondary[500]}
            sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', letterSpacing: '1px' }}
          >
            SOAP STACHE
          </Typography>
          <div>
            At Soap Stache, we’re on a mission to craft high-quality,
            locally-sourced soaps that blend rugged outdoor spirit with dapper
            sophistication. Through thoughtful ingredients and bold scents, we
            aim to elevate your everyday routine, keeping you fresh, clean, and
            ready for adventure.
          </div>
        </Box>
        <Box>
          <Typography variant='h3' fontWeight='bold' mb='30px'>
            About Us
          </Typography>
          <Typography mb='30px'>Terms & Conditions</Typography>
          <Typography mb='30px'>Privacy Policy</Typography>
        </Box>
        <Box>
          <Typography variant='h3' fontWeight='bold' mb='30px'>
            Customer Care
          </Typography>
          <Typography mb='30px'>Help Center</Typography>
          <Typography mb='30px'>Track Your Order</Typography>
          <Typography mb='30px'>Corporate & Bulk Purchasing</Typography>
          <Typography mb='30px'>Returns & Refunds</Typography>
        </Box>
        <Box width='clamp(20%, 25%, 30%)'>
        <Typography variant='h3' fontWeight='bold' mb='30px'>
            Contact Us
          </Typography>
          <Typography mb='30px'>50 North Whatever Blvd, Muskegon, MI 49445</Typography> 
          <Typography mb='30px'>Email: thesoapstache@gmail.com</Typography>
          <Typography mb='30px'>(222) 333-4444</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

//TODO: Update contact info with real info
//TODO: Need Terms & Conditions and Privacy Policy
//TODO: Need Help Center, Track Your Order, Corporate & Bulk Purchasing, Returns & Refunds.

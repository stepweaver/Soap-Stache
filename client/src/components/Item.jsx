import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  IconButton,
  Box,
  Typography,
  useTheme,
  Button,
  Snackbar,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { shades } from '../theme';
import { addToCart } from '../state';
import { useNavigate } from 'react-router-dom';

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const {
    palette: { neutral },
  } = useTheme();

  const { category, price, name, image } = item;
  const { url } = image.formats.medium;

  const handleAddToCart = () => {
    dispatch(addToCart({ item: { ...item, count } }));
    setCount(1);
    setOpenSnackbar(true);
  };

  return (
    <Box width={width}>
      <Box
        position='relative'
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Box width='300px' height='300px' overflow='hidden'>
          <img
            alt={item.name}
            src={`http://localhost:1337${url}`}
            onClick={() => navigate(`/item/${item.documentId}`)}
            style={{
              cursor: 'pointer',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box
          display={isHovered ? 'block' : 'none'}
          position='absolute'
          bottom='10%'
          left='0'
          width='100%'
          padding='0 5%'
        >
          <Box display='flex' justifyContent='space-between'>
            <Box
              display='flex'
              alignItems='center'
              backgroundColor={shades.neutral[100]}
              borderRadius='3px'
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              onClick={handleAddToCart}
              sx={{ backgroundColor: shades.primary[300], color: 'white' }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
      <Box mt='3px'>
        <Typography variant='subtitle2' color={neutral.dark}>
          {category
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight='bold'>${price}</Typography>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        ContentProps={{
          sx: {
            mt: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.50rem',
            fontWeight: 'bold',
            backgroundColor: shades.primary[300],
            color: 'white',
            borderRadius: '5px',
            padding: '10px 20px',
          },
        }}
        message='Item added to cart'
      />
    </Box>
  );
};

export default Item;

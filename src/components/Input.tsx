import { Paper, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Input = styled(TextField)(({ theme }) => ({
  width: '100%',
  '& .css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input': {
    fontWeight: 900,
  },
  '& .css-1ea1xhh-MuiInputBase-input-MuiOutlinedInput-input': {
    fontWeight: 900,
  }
}));

export const InputLeft = styled(Input)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  }
}));

export const InputRight = styled(Input)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  }
}));

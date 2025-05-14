import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoCards = styled(Paper)(({ theme }) => ({
  width: 300,
  height: 300,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default DemoCards;

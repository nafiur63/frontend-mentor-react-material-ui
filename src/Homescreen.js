import { Box, Button, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';


function Homescreen() {
  return (
    <Container>
      <Box height="100vh" display="flex" justifyContent="center" alignItems="center"><Link style={{ textDecoration: 'none' }} to='/Sunnyside' ><Button history variant="contained" color="secondary"> SunnySide </Button></Link></Box>
    </Container>
  );
}

export default Homescreen;
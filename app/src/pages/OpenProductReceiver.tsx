import { Button, Container, Grid, Typography } from '@mui/material';

export default function OpenProductReceiver() {
  return (
    <Container fixed>
      <Grid container justifyContent="center">
        <Typography variant="h1">Please receive item below</Typography>
        <Button variant="contained">Make mock receive item</Button>
      </Grid>
    </Container>
  );
}

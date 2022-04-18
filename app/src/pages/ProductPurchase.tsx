import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography
} from '@mui/material';
import { useParams } from 'react-router';
import { useGetProduct } from '../services/products/productHooks';

export default function ProductPurchase() {
  const { id = '' } = useParams();
  const { product } = useGetProduct(id);

  if (!product) return <div>Not Found</div>;

  return (
    <Container fixed>
      <Grid container justifyContent="center">
        <Typography variant="h1">Payment</Typography>
      </Grid>
      <Grid container paddingTop={4} justifyContent="center">
        <Card>
          <CardMedia component="img" image={product.imageUrl} alt={product.name} />
          <CardContent>
            <Typography sx={{ textAlign: 'center' }} variant="h6">
              {product.name}
            </Typography>
            <Typography sx={{ textAlign: 'center' }}>{product.price} Baht</Typography>
            <Typography sx={{ textAlign: 'center' }}>Remaining: {product.quantity}</Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained" disabled={!product.isAvailable}>
              Make mock payment
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
}

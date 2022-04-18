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
import { useNavigate, useParams } from 'react-router';
import { useGetProduct, usePurchaseProduct } from '../services/products/productHooks';

export default function ProductPurchase() {
  const navigate = useNavigate();
  const { id = '' } = useParams();
  const { product } = useGetProduct(id);
  const { purchaseProductFunction } = usePurchaseProduct(id);

  if (!product) return <div>Not Found</div>;

  const handleMakePayment = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    await purchaseProductFunction();

    navigate('/products/:id/receive');
  };

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
            <Button variant="contained" disabled={!product.isAvailable} onClick={handleMakePayment}>
              Make mock payment
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
}

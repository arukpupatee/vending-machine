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
import { useListProducts } from '../services/products/productHooks';

export default function ProductList() {
  const { products } = useListProducts();

  return (
    <Container fixed>
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <img src="https://place-hold.it/1200x200" alt="logo" style={{ maxWidth: '100%' }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid container paddingTop={4} columnSpacing={2} rowSpacing={2}>
        {products.map((product) => (
          <Grid item xs={4} key={product.id}>
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
                <Button
                  variant="contained"
                  disabled={!product.isAvailable}
                  href={`/products/${product.id}/purchase`}
                >
                  Buy
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

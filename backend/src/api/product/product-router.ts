import { Router } from 'express';
import { productController } from './product-controller';

const router = Router();

router.get('/', productController.list);

export const productRouter = router;

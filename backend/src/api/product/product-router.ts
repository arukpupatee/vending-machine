import { Router } from 'express';
import { productController } from './product-controller';

const router = Router();

router.get('/', productController.list);
router.get('/:id', productController.get);

export const productRouter = router;

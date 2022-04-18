import { Router } from 'express';
import { productController } from './product-controller';

const router = Router();

router.get('/', productController.list);
router.get('/:id', productController.get);
router.post('/:id/purchase', productController.purchase);

export const productRouter = router;

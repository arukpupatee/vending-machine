import { Router } from 'express';
import { apiKeyHandler } from '../middlewares/api-key-handler';
import { productRouter } from './product/product-router';

const router = Router();

router.use(apiKeyHandler);

router.use('/products', productRouter);

export default router;

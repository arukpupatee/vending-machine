import { Navigate, useRoutes } from 'react-router-dom';
import MainLayout from '../layouts/main';
import ProductList from '../pages/ProductList';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '', element: <Navigate to="/products" replace /> },
        { path: 'products', element: <ProductList /> }
      ]
    }
  ]);
}

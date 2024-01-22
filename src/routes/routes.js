import { createBrowserRouter } from 'react-router-dom';
import { LogIn, Orders, SignUp, Dashboard, AddOrder, OrderTrackDetails, Weight_Freeze } from '../pages';
import Tracking from '../pages/tracking/Tracking';
import PrivateRoute from './private-route/PrivateRoute';
import { SellerKYC } from '../pages/kyc';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute component={<Dashboard />} />,
  },
  {
    path: '/login',
    element: <LogIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/orders',
    element: <PrivateRoute component={<Orders />} />,
  },
  {
    path: '/add-order',
    element: <PrivateRoute component={<AddOrder />} />,
  },
  {
    path: '/track-order/:orderId',
    element: <PrivateRoute component={<OrderTrackDetails />} />,
  },
  {
    path: '/tracking',
    element: <PrivateRoute component={<Tracking />} />,
  },
  {
    path: '/seller/kyc',
    element: <PrivateRoute component={<SellerKYC />} />,
  },
  {
    path: '/request-weight-freeze',
    element: <PrivateRoute component={<Weight_Freeze />} />,
  },
  {
    path: '/billing-charge-details',
    element: <PrivateRoute component={<SellerKYC />} />,
  },
]);

export default routes;

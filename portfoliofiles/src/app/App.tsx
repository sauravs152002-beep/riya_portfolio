import { RouterProvider } from 'react-router';
import { router } from './routes';
import { LiquidCursor } from './components/LiquidCursor';

export default function App() {
  return (
    <>
      <LiquidCursor />
      <RouterProvider router={router} />
    </>
  );
}

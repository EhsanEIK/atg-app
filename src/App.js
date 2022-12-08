import { RouterProvider } from 'react-router-dom';
import './App.css';
import Menubar from './Pages/Shared/Menubar/Menubar';
import router from './Routes/Routes/routes';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

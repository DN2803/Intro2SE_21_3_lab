import logo from './logo.svg';
import './App.scss';

import Layout from '../components/ui/Layout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
    
  );
}

export default App;

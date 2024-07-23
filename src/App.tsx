import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesConfig from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
      <BrowserRouter>
        <RoutesConfig />
      </BrowserRouter>
    <GlobalStyle />
  </>
);
export default App;

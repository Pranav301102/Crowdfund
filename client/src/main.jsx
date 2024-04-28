import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { StateContextProvider } from './context';
import { Sepolia } from "@thirdweb-dev/chains";
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("here",Sepolia)



root.render(
<ThirdwebProvider  activeChain={Sepolia} clientId="158d05059e2584a197b51efa4b01be2c">
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)


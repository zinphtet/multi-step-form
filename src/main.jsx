import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ContextProvider } from './context/Context.jsx';
// import Hello from './context/Hello.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	// <ContextProvider>
	<ContextProvider>
		<App />
	</ContextProvider>
	// </ContextProvider>
);

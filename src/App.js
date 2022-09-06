import { useReducer, createContext } from 'react';
// routes
// import simpleRestProvider from 'ra-data-simple-rest';
import Router from './routes';
// theme
import './App.css';
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';

import { initialState, reducer } from './reducer/UseReducer';
// we create a contextAPI
export const UserContext = createContext();

// ----------------------------------------------------------------------

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <ThemeProvider>
        <ScrollToTop />
        <Router />
      </ThemeProvider>
    </UserContext.Provider>
  );
}

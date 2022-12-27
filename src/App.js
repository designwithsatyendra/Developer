import { useReducer, createContext, Suspense } from 'react';
import Loading from './components/Loading';
import Router from './routes';
// theme
import './App.css';
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';

import { initialState, reducer } from './reducer/UseReducer';
import Support from './components/Support';

export const UserContext = createContext();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <ThemeProvider>
        <Support />
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
          <Router />
        </Suspense>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

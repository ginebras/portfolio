import { ThemeProvider } from 'styled-components';
import { Routes,Route,useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import GlobalStyle from './GlobalStyles';
import { LightTheme, } from './components/Themes';

import Main from './components/Main';
import AboutPage from './components/AboutPage';
import MySkillsPage from './components/MySkillsPage';
import WorkPage from './components/WorkPage';

export default function App() {
  const location=useLocation();

  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={LightTheme}>
        
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname} >
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/about" element={<AboutPage/>} />
          <Route exact path="/skills" element={<MySkillsPage/>} />
          <Route exact path="/work" element={<WorkPage/>} />
        </Routes>
      </AnimatePresence>

      </ThemeProvider>  
    </>
  );
}
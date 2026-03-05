import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { THEMES, type ThemeConfig } from './themes';
import { AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import PrivacyPolicy from './components/PrivacyPolicy';
import NotFound from './components/NotFound';

function App() {
  const [currentTheme] = useState<ThemeConfig>(THEMES.classic);
  const location = useLocation();

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-700 ease-in-out ${currentTheme.background} ${currentTheme.fontFamily} overflow-x-hidden`}
    >
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/" element={<Home currentTheme={currentTheme} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

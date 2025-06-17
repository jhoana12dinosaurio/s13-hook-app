import { createContext, useContext, useState } from 'react';

// 1. Creamos el contexto
const ThemeContext = createContext();

// 2. Creamos un hook personalizado para usar el contexto más fácilmente
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
};

// 3. Creamos el proveedor del contexto
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
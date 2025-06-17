import { useState, useEffect, useRef } from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';

// Componente que usa useContext para acceder al tema
function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <div className="theme-controls">
      <h2>🎨 Hook: useContext</h2>
      <p>El tema actual es: <strong>{isDark ? 'Oscuro' : 'Claro'}</strong></p>
      <button 
        className="button" 
        onClick={toggleTheme}
      >
        Cambiar a tema {isDark ? 'claro' : 'oscuro'}
      </button>
      <p><small>Este botón cambia el tema de toda la aplicación usando useContext</small></p>
    </div>
  );
}

// Componente principal de la aplicación
function AppContent() {
  // 📝 HOOK 1: useState - Para manejar estado local
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState('');
  
  // 📝 HOOK 2: useRef - Para referenciar elementos del DOM
  const inputRef = useRef(null);
  
  // 📝 HOOK 3: useContext - Para acceder al tema global
  const { isDark } = useTheme();
  
  // 📝 HOOK 4: useEffect - Para efectos secundarios
  useEffect(() => {
    // Efecto 1: Cambiar el título de la página cuando cambia el contador
    document.title = `Contador: ${contador} - Hook App`;
  }, [contador]); // Solo se ejecuta cuando 'contador' cambia
  
  useEffect(() => {
    // Efecto 2: Aplicar la clase del tema al body
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]); // Solo se ejecuta cuando 'isDark' cambia
  
  // Función para enfocar el input usando useRef
  const enfocarInput = () => {
    inputRef.current.focus();
  };
  
  // Funciones para manejar el contador
  const incrementar = () => setContador(contador + 1);
    const incrementarmas5 = () => setContador(contador + 5);

  const decrementar = () => setContador(contador - 1);
    const decrementarmenos5 = () => setContador(contador - 5);

  const resetear = () => setContador(0);
  
  return (
    <div className="container">
      <header className="header">
        <h1>🎣 Aplicación de Hooks en React</h1>
        <p>Una aplicación simple para aprender los hooks básicos</p>
      </header>
      
      {/* Sección useState */}
      <section className="section">
        <h2>🔢 Hook: useState</h2>
        <div className="counter">
          <p>useState nos permite agregar estado a nuestros componentes funcionales.</p>
          <div className="counter-display">{contador}</div>
          <button className="button" onClick={incrementar}>
            ➕ Incrementar
          </button>
          <button className="button" onClick={incrementarmas5}>
            ➕ Incrementar mas 5
          </button>
          <button className="button" onClick={decrementar}>
            ➖ Decrementar
          </button>
          <button className="button" onClick={decrementarmenos5}>
            ➖ Decrementar menos 5
          </button>
          <button className="button danger" onClick={resetear}>
            🔄 Resetear
          </button>
        </div>
      </section>
      
      {/* Sección useState con input */}
      <section className="section">
        <h2>📝 useState con Input</h2>
        <div className="input-group">
          <label htmlFor="nombre">Escribe tu nombre:</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre aquí..."
          />
        </div>
        {nombre && (
          <div className="greeting">
            <p>¡Hola <strong>{nombre}</strong>! 👋</p>
            <p>Tu nombre tiene {nombre.length} caracteres.</p>
          </div>
        )}
      </section>
      
      {/* Sección useEffect */}
      <section className="section">
        <h2>⚡ Hook: useEffect</h2>
        <p>useEffect se usa para efectos secundarios como:</p>
        <ul>
          <li>✅ Cambiar el título de la página (mira la pestaña del navegador)</li>
          <li>✅ Aplicar el tema oscuro/claro al body</li>
          <li>Hacer llamadas a APIs</li>
          <li>Suscripciones a eventos</li>
        </ul>
        <p><small>El título de la página cambia automáticamente cuando cambias el contador.</small></p>
      </section>
      
      {/* Sección useContext */}
      <section className="section">
        <ThemeToggle />
      </section>
      
      {/* Sección useRef */}
      <section className="section">
        <h2>🎯 Hook: useRef</h2>
        <div className="focus-demo">
          <p>useRef nos permite acceder directamente a elementos del DOM.</p>
          <div className="input-group">
            <label htmlFor="input-ref">Input de ejemplo:</label>
            <input
              id="input-ref"
              ref={inputRef}
              type="text"
              placeholder="Haz clic en el botón para enfocarme"
            />
          </div>
          <button className="button" onClick={enfocarInput}>
            🎯 Enfocar Input
          </button>
          <p><small>Este botón usa useRef para enfocar el input automáticamente.</small></p>
        </div>
      </section>
      
      {/* Sección información */}
      <section className="section">
        <h2>🎓 ¿Qué aprendiste?</h2>
        <ul>
          <li><strong>useState:</strong> Añade estado a componentes funcionales</li>
          <li><strong>useEffect:</strong> Maneja efectos secundarios y ciclo de vida</li>
          <li><strong>useContext:</strong> Comparte estado globalmente</li>
          <li><strong>useRef:</strong> Accede al DOM y guarda valores mutables</li>
        </ul>
        <p>🔥 <strong>Reto:</strong> ¡Intenta modificar esta aplicación!</p>
      </section>
    </div>
  );
}

// Componente raíz que envuelve todo en el ThemeProvider
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
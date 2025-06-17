# 📝 Ejemplos Extra de Hooks

## 🔧 Snippets de código para copiar y pegar

### useState con objeto
```jsx
const [usuario, setUsuario] = useState({
  nombre: '',
  edad: 0,
  email: ''
});

// Para actualizar un campo:
const actualizarNombre = (nuevoNombre) => {
  setUsuario({ ...usuario, nombre: nuevoNombre });
};
```

### useState con array
```jsx
const [tareas, setTareas] = useState([]);

// Añadir nueva tarea:
const añadirTarea = (nuevaTarea) => {
  setTareas([...tareas, nuevaTarea]);
};

// Eliminar tarea por índice:
const eliminarTarea = (indice) => {
  setTareas(tareas.filter((_, i) => i !== indice));
};
```

### useEffect con cleanup
```jsx
useEffect(() => {
  // Crear un intervalo
  const intervalo = setInterval(() => {
    console.log('¡Cada segundo!');
  }, 1000);

  // Función de limpieza (cleanup)
  return () => {
    clearInterval(intervalo);
  };
}, []); // Array vacío = solo se ejecuta una vez
```

### useEffect con múltiples dependencias
```jsx
useEffect(() => {
  console.log('El nombre o la edad cambiaron');
}, [nombre, edad]); // Se ejecuta cuando cualquiera de los dos cambia
```

### useRef para valores que no re-renderizan
```jsx
const contadorSinRender = useRef(0);

const incrementarSinRender = () => {
  contadorSinRender.current += 1;
  console.log(contadorSinRender.current); // Aumenta pero no re-renderiza
};
```

### Hook personalizado simple
```jsx
function useContador(valorInicial = 0) {
  const [contador, setContador] = useState(valorInicial);
  
  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const resetear = () => setContador(valorInicial);
  
  return { contador, incrementar, decrementar, resetear };
}

// Uso:
function MiComponente() {
  const { contador, incrementar, decrementar, resetear } = useContador(10);
  
  return (
    <div>
      <p>{contador}</p>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
      <button onClick={resetear}>Reset</button>
    </div>
  );
}
```

## 🎯 Patrones comunes

### Formulario controlado completo
```jsx
function FormularioCompleto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea
        name="mensaje"
        value={formData.mensaje}
        onChange={handleChange}
        placeholder="Mensaje"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### Lista con filtros
```jsx
function ListaConFiltros() {
  const [items, setItems] = useState(['manzana', 'banana', 'naranja']);
  const [filtro, setFiltro] = useState('');

  const itemsFiltrados = items.filter(item =>
    item.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <input
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Filtrar items..."
      />
      <ul>
        {itemsFiltrados.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

## 🚨 Errores comunes

### ❌ Modificar estado directamente
```jsx
// MAL ❌
const [usuario, setUsuario] = useState({ nombre: 'Juan' });
usuario.nombre = 'Pedro'; // ¡No hagas esto!

// BIEN ✅
setUsuario({ ...usuario, nombre: 'Pedro' });
```

### ❌ useEffect sin array de dependencias
```jsx
// MAL ❌ - Bucle infinito
useEffect(() => {
  setContador(contador + 1);
}); // Sin array de dependencias

// BIEN ✅
useEffect(() => {
  setContador(contador + 1);
}, []); // Con array vacío para que solo se ejecute una vez
```

### ❌ Llamar hooks condicionalmente
```jsx
// MAL ❌
if (mostrarContador) {
  const [contador, setContador] = useState(0);
}

// BIEN ✅
const [contador, setContador] = useState(0);
if (mostrarContador) {
  // usar contador aquí
}
```

## 💡 Tips profesionales

1. **Usa nombres descriptivos:** `const [isLoading, setIsLoading]` es mejor que `const [loading, setLoading]`

2. **Agrupa estados relacionados:**
   ```jsx
   // En lugar de:
   const [nombre, setNombre] = useState('');
   const [apellido, setApellido] = useState('');
   
   // Usa:
   const [persona, setPersona] = useState({ nombre: '', apellido: '' });
   ```

3. **Separa efectos por responsabilidad:**
   ```jsx
   // En lugar de un useEffect gigante, usa varios:
   useEffect(() => {
     // Lógica para el título
   }, [contador]);
   
   useEffect(() => {
     // Lógica para el tema
   }, [isDark]);
   ```

¡Usa estos ejemplos como referencia para expandir tu aplicación! 🚀
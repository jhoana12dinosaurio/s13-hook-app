# 🎣 Aplicación de Hooks en React - Semana 13

¡Bienvenidos a su primera aplicación completa con Hooks de React! Esta aplicación está diseñada para que aprendan y practiquen los conceptos fundamentales de los hooks de manera práctica.

## 🚀 Cómo empezar

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar la aplicación:**
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador:**
   - La aplicación se abrirá automáticamente
   - Si no, ve a: `http://localhost:5173`

## 📚 ¿Qué vas a encontrar?

Esta aplicación demuestra **4 hooks fundamentales** de React:

### 🔢 `useState`
- **¿Qué hace?** Añade estado a componentes funcionales
- **Ejemplo en la app:** El contador y el input de nombre
- **Ubicación:** `App.jsx` líneas 20-21

### ⚡ `useEffect`
- **¿Qué hace?** Maneja efectos secundarios
- **Ejemplo en la app:** Cambia el título de la página y aplica el tema
- **Ubicación:** `App.jsx` líneas 28-38

### 🎨 `useContext`
- **¿Qué hace?** Comparte estado entre componentes sin props
- **Ejemplo en la app:** El sistema de tema oscuro/claro
- **Ubicación:** `ThemeContext.jsx` y componente `ThemeToggle`

### 🎯 `useRef`
- **¿Qué hace?** Accede directamente a elementos del DOM
- **Ejemplo en la app:** El botón que enfoca el input automáticamente
- **Ubicación:** `App.jsx` línea 25

## 🎯 Tareas para practicar

### Tarea 1: Modificar el contador (Fácil)
- Añade un botón "Incrementar +5" que sume 5 al contador
- Añade un botón "Decrementar -5" que reste 5 al contador

### Tarea 2: Nuevo input con useState (Intermedio)
- Crea un nuevo input para "apellido"
- Muestra un saludo completo: "¡Hola [nombre] [apellido]!"
- Calcula y muestra el total de caracteres de nombre + apellido

### Tarea 3: useEffect personalizado (Intermedio)
- Crea un nuevo useEffect que muestre una alerta cuando el contador llegue a 10
- Pista: Usar `if (contador === 10) { alert('¡Llegaste a 10!'); }`

### Tarea 4: Expandir useRef (Avanzado)
- Añade otro input con su propio useRef
- Crea un botón que limpie ambos inputs usando sus referencias
- Pista: `inputRef.current.value = '';`

### Tarea 5: Mejorar el tema (Avanzado)
- Añade un tercer tema: "Azul"
- Modifica el contexto para manejar 3 temas en lugar de 2
- Crea estilos CSS para el tema azul

## 🔍 Explora el código

### Archivos principales:
- **`App.jsx`** - Componente principal con todos los ejemplos
- **`ThemeContext.jsx`** - Contexto para el sistema de temas
- **`index.css`** - Estilos básicos y tema oscuro
- **`main.jsx`** - Punto de entrada de la aplicación

### Preguntas para reflexionar:
1. ¿Por qué `useState` devuelve un array con 2 elementos?
2. ¿Cuándo se ejecuta el código dentro de `useEffect`?
3. ¿Qué pasaría si no usáramos `useContext` para el tema?
4. ¿En qué se diferencia `useRef` de `useState`?

## 🔥 Retos extra

### Reto 1: Lista de tareas
Crea una nueva sección que permita:
- Añadir tareas con un input
- Mostrar lista de tareas
- Marcar tareas como completadas
- Eliminar tareas

### Reto 2: Temporizador
Crea un temporizador que:
- Cuente hacia atrás desde 10 segundos
- Use `useEffect` para actualizar cada segundo
- Muestre "¡Tiempo!" cuando llegue a 0

### Reto 3: Datos locales
- Usa `localStorage` para guardar el nombre del usuario
- Cuando recargues la página, el nombre debe aparecer automáticamente

## 💡 Consejos

1. **Lee los comentarios:** El código tiene explicaciones línea por línea
2. **Experimenta:** Cambia valores y mira qué pasa
3. **Console.log:** Añade `console.log()` para ver cómo cambian los valores
4. **Un cambio a la vez:** Modifica una cosa, prueba, luego continúa
5. **¡No tengas miedo!** Si algo se rompe, siempre puedes volver al código original

## 🆘 Si algo no funciona

1. **Revisa la consola del navegador** (F12 → Console)
2. **Asegúrate de que el servidor esté corriendo** (`npm run dev`)
3. **Verifica que no falten comas o paréntesis**
4. **Pregunta a tu profesor** 👨‍🏫

## 🎉 ¡Manos a la obra!

Recuerda: **La mejor forma de aprender es practicando**. No te preocupes si no entiendes todo de inmediato. Cada hook tiene su propósito y con la práctica se vuelve natural.

**¡Diviértete programando! 🚀**
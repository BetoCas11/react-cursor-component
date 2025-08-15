import { useState, useEffect } from 'react'



function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x:0, y:0});
  const styles = {
    position: 'absolute',
    backgroundColor: '#09f',
    borderRadius: '50%',
    opacity: 0.8,
    pointerEvents: 'none',
    left: -20,
    top: -20,
    width: 40,
    height: 40,
    transform: `translate(${position.x}px, ${position.y}px)`
  };

//Pointer Event
  useEffect(() => {
    const handleMove = (e) => {
      const {clientX, clientY} = e;
      setPosition((prevV) => {
        return {
          x:clientX, y: clientY
            }
          }
        )
    };

    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    };

    return () => {
      window.removeEventListener('pointermove', handleMove);
    }
  }, [enabled]);

//Changes styles for the cursor
useEffect(() => {
  document.body.classList.toggle('no-cursor', enabled);

  return () => {
    document.body.classList.remove('no-cursor');

  }
}, [enabled])

  return (
    <> 
      <div style={styles}></div>
      <button onClick={() => {setEnabled(!enabled)}} >{enabled ? 'Desactivar': 'Activar'}  el puntero</button>
    </>
  )
}

export default App

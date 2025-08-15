import { useState, useEffect } from 'react'
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
  transform: 'translate(0px, 0px)'
};


function App() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    console.log('activado? ' + enabled);
  }, [enabled])
  return (
    <> 
      <div style={styles}></div>
      <button onClick={() => {setEnabled(!enabled)}} >{enabled ? 'Desactivar': 'Activar'}  el puntero</button>
    </>
  )
}

export default App

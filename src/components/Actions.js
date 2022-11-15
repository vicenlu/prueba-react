import React from 'react';
import { useState, useEffect } from 'react';

function Actions() {

  // Logica
  // let variable = "holi";

  // STATES
  const [variable, setVariable] = useState('holi')

  // EFFECTS
  useEffect(() => {
    // EJECUTAAA
  }, [variable]);

  // LOGICA
  const cambiar = () => {
    setVariable("UEEEE");
  }

  // Render
  return (
    <>
      {variable}
      <button onClick={cambiar}>Cambiar</button>
    </>

  );
}

export default Actions;

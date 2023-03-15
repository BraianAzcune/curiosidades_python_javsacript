import { useState, createContext } from "react";


function useEjemplo(){

  const [ejemplo, setejemplo] = useState(true);

  function toggleEjemplo(){
    setejemplo(prev=>!prev);
  }

  return {
    ejemplo,
    toggleEjemplo
  };
}
/**
 * de esta forma funciona, pero la interfaz dedicada al contexto, se ensucia
 * con las incumbencias de lo que retorna useEjemplo
 */
interface EjemploContext1{
  masEjemplos: boolean,
  ejemplo: boolean,
  toggleEjemplo: ()=>void
}
/**
 * De esta forma, se crea un alias del typo que retorna useEjemplo,
 * y EjemploContext enxtiende de la misma, sin necesidad de ser cambiado cuando cambia useEjemplo
 */
type useEjemploReturn = ReturnType<typeof useEjemplo>;
interface EjemploContext extends useEjemploReturn{
  masEjemplos: boolean
}
const EjemploContext = createContext<EjemploContext>({} as EjemploContext);


export default function Padre(){
  const {ejemplo,toggleEjemplo} = useEjemplo();
  return(
    <EjemploContext.Provider value={{
      masEjemplos: true,
      ejemplo,
      toggleEjemplo
    }}>
      <HijoNoImporta></HijoNoImporta>
    </EjemploContext.Provider>
  );
}

function HijoNoImporta(){
  return (<p>hola</p>);
}
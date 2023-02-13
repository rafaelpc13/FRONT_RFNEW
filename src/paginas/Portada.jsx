import { useEffect } from "react";
import useProyectos from "../hooks/useProyectos";
import PreviewProyecto from "../componentes/PreviewProyecto";
import Header from '../componentes/Header'


const Proyectos = () => {

  const { precios } = useProyectos()

  return (
    <>
      <Header />
      <h1 className="text-4xl font-black">Juegos por Precio</h1>

      <div className="bg-white shadow mt-10 rounded-lg ">
        {precios.length ?
          precios.map(precio => (
            <PreviewProyecto
              key={precio._id}
              precio={precio} />
          ))
          :
          <p className="text-center text-gray-500 uppercase p-5">No hay proyectos aun Create uno</p>}
      </div>
    </>
  )
}

export default Proyectos;
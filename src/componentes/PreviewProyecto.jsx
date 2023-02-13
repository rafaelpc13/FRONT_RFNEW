import { Link } from "react-router-dom"
//import useAuth from "../hooks/useAuth"

const PreviewProyecto = ({ precio }) => {

    // const {auth} =useAuth()
    const { nombre, _id } = precio
    return (
        <>
            <div className="border-b p-5 flex justify-between">
                <div>
                    <p className="flex-1"> {nombre} </p>
                </div>
                <Link to={`${_id}`} className="text-gray-600 hover:text-gray-800 uppercase text-sm font-bold">
                    Jugar
                </Link>

            </div>
        </>

    )
}
export default PreviewProyecto
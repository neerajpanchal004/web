import Link from "next/link"
import { useContext } from "react"
import { UserContext } from "../context/Contextapi"

const ProductCard = ({name,price,image,company,id}) => {
    const {route}= useContext(UserContext)
    return (
        <div key={name} className="p-5 w-96 h-96  shadow-xl ">
            <Link href={`/${route}/${id}`}>
            <img src={image} alt={name} className="w-80 h-60 object-contain rounded-md" /> 
            </Link>
            <div className="pt-3">
                <h1 className="font-light text-gray-400">{company}</h1>
            <h1 className="overflow-clip h-5 ">{name}</h1>
            <p><b>₹</b> {price}</p>

            </div>

            {/* <p>Storage: {storage}GB</p> */}

        </div>
    )
}

export default ProductCard
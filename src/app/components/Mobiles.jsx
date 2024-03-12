"use client"
import React, { useContext, useEffect,useState } from 'react'
import { UserContext } from '../context/Contextapi'
import { getData } from './Constant'
import ProductCard from './ProductCard'
import Loader from './Loader'



const Mobiles = () => {
    const { mobile, setMobile,setRoute } = useContext(UserContext)
    const [first, setFirst] = useState()



    useEffect(() => {
        let apipoint = "/api/getProducts?category=mobiles";
        getData(apipoint, setFirst);

    }, [])
    if (first === undefined) {
        return <Loader />
    }
    console.log(first)
    setRoute("mobiles")
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 border-2  gap-x-5 gap-y-16 px-10'>

                {first.map((Mobile) => {
                    // const { name, image, price, storage,} = Mobile;
                    return (
                        <ProductCard key={Mobile.id} {...Mobile} />
                    )

                })}
            </div>
        </>
    )
}


export default Mobiles
"use client"
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/Contextapi'
import { getData } from './Constant'
import ProductCard from './ProductCard'
import Loader from './Loader'


const Sports = () => {
    const { sports, setSports, setRoute } = useContext(UserContext)



    useEffect(() => {
        let apipoint = "/api/getProducts?category=sports";
        getData(apipoint, setSports);

    }, [])
    if (sports === undefined) {
        return <Loader/>
    }
    setRoute("sports")
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 border-2  gap-x-5 gap-y-16 px-10'>

                {sports.map((SportItem) => {
                    // const { name, image, price, storage,} = Mobile;
                    return (
                        <ProductCard key={SportItem.id} {...SportItem} />
                    )

                })}
            </div>
        </>
    )
}


export default Sports
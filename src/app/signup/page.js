// "use client"
import React from 'react'
import Signup from '../components/Signup'
import Image from 'next/image'


const page = () => {
    // const router = useRouter()
    // const navtologin = ()=>router.push( "/login" )

  return (
    <>
    <div>
      <Image src="/img/signup-bg.jpg" alt="Background image for login screen" layout='fill' objectFit='cover'/>
      <Signup/>

    </div>
    </>
  )
}

export default page
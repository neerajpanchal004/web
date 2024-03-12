import React from 'react'
import Login from '../components/Login'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <div>
      <Image src="/img/login-bg.jpg" alt="Background image for login screen" layout='fill' objectFit='cover'/>
      <Login/>

    </div>
    </>
  )
}

export default page
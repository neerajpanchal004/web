"use client"
import MenWear from '@/app/components/Menwear'
import Mobiles from '@/app/components/Mobiles'
import Shoes from '@/app/components/Shoes'
import Sports from '@/app/components/Sports'
import { useParams,  } from 'next/navigation'
import React from 'react'

const Page = () => {
    const router = useParams()
    const {category} = router
    console.log(category)
    if(category=='shoes'){
        return<Shoes/>
    }
    if(category=='mobiles'){
        return<Mobiles/>
    }  if(category=='menwear'){
        return<MenWear/>
    }  if(category=='sports'){
        return<Sports/>
    }

  return (
    <div>Invalid URL</div>
  )
}

export default Page
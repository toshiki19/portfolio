import React from 'react'
import Link from 'next/link'
import Layout from './layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center justify-center'>
            Bulid With <span className='text-primary text-2xl px-1'>&#9825;</span> 
            By&nbsp;<Link href='https://devdreaming.com' className='underline
            underline-offset-2' target={"_blank"}>CodeBucks</Link>
            </div>
            <Link href='https://devdreaming.com'  className='underline
            underline-offset-2' target={"_blank"}>Say hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer
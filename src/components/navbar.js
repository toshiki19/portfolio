import React from 'react'
import Link from 'next/link'
import Logo from '@/components/logo'
import { useRouter } from 'next/router'
import  { TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon } from './icons'

const CustomLink = ({ href, title, className="" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`
            h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
  return (
    <header
    className='w-full px-32 py-8 font-medium flex justify-between items-center'
    >
        <nav>
            <CustomLink href='/' title="Home" className='mr-4' />
            <CustomLink href='/about' title="About" className='mx-4' />
            <CustomLink href='/projects' title="Project" className='mx-4' />
            <CustomLink href='/articles' title="Articles" className='ml-4' />

        </nav>
        
        <nav>
            <Link href='/' target={"_blank"}>
                <TwitterIcon />
            </Link>
            <Link href='/' target={"_blank"}>
                <GithubIcon />
            </Link>
            <Link href='/' target={"_blank"}>
                <LinkedInIcon />
            </Link>
            <Link href='/' target={"_blank"}>
                <PinterestIcon />
            </Link>
            <Link href='/' target={"_blank"}>
                <DribbbleIcon />
            </Link>
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
        </div>
    </header>
  )
}

export default NavBar

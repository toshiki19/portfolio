import Layout from '@/components/layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/i-zi-_1.png'
import AnimatedText from '@/components/animatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/icons'
import HireMe from '@/components/hireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />

      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout>
          <div className="flex items-center justify-between w-full">
            <div className='w-1/2'>
              <Image src={profilePic} alt="CodeBucks" className="w-full h-auto" 
              priority
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium'>
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start wt-2'>
                <Link href='/dummy.pdf' target={"_blank"}
                className='flex items-center text-light bg-dark justify-center 
                px-6 p-2.5 mr-4 text-lg font-semibold hover:bg-light hover:text-dark 
                border-2 border-solid border-transparent hover:border-dark
                rounded-full dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light'
                download={true}
                >Resume<LinkArrow className={'w-6 ml-1'}/>
                </Link>
                <Link href='mailto:abcd@gmail.com' target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark underline justify-center dark:text-light'
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBulb} alt="CodeBucks" className="w-full h-auto" />
        </div>
      </main>
    </>
  )
}

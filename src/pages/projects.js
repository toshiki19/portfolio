import AnimatedText from '@/components/animatedText'
import Layout from '@/components/layout'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GithubIcon } from '@/components/icons'
import Image from 'next/image'
import project_1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import { motion } from 'framer-motion';

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
  return (
    <article className='w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light'>
    <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] bg-dark rounded-[2.5rem]
    rounded-br-3xl dark:bg-light'/>
    <Link href={link} target="_blank"
    className='w-1/2 cursor-printer overflow-hidden rounded-lg'>
      <FramerImage src={img} alt={title} className='w-full h-auto' 
      whileHover={{scale:1.05}}
      transition={{duration:0.2}}
      />
    </Link>

    <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
      <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
      <Link href={link} target="_blank"
      className='hover:underline underline-offset-2'
      >
        <h2 className='my-2 w-full text-4xl font-bold dark:text-light'>{title}</h2>
      </Link>
      <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
    <div className='mt-2 flex items-center'>
    <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
    <Link href={link} target="_blank"
    className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
    dark:bg-light dark:text-dark
    '>View Project</Link>
    </div>
    </div>
    </article>
  )
}

const Project = ({title, type, img, link, github}) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl 
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] bg-dark rounded-[2rem]
      rounded-br-3xl dark:bg-light'/>
      <Link href={link} target="_blank"
      className='w-full cursor-printer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className='w-full h-auto' 
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority
        sizes='(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw'
        />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
        <Link href={link} target="_blank"
        className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-3xl font-bold'>{title}</h2>
        </Link>
      <div className='w-full mt-2 flex items-center justify-between'>
      <Link href={link} target="_blank"
      className='text-lg font-semibold underline'>Visit</Link>
      <Link href={github} target="_blank" className='w-8'><GithubIcon /></Link>
      </div>
      </div>
    </article>
  )
}

const projects = () => {
  return (
    <>
      <Head>
          <title>CodeBucks | Project Page</title>
          <meta name="description" content="any description" />
      </Head>
      <main className='mb-16 flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16'/>
          <div className='grid grid-cols-12 gap-24 gap-y-32'>
            <div className='col-span-12'>
              <FeaturedProject
              title="Crypto Screener Application"
              img={project_1}
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
              link="/"
              github="/"
              type="Featured Project"
              />
            </div>
            <div className='col-span-6'>
              <Project
              title="Crypto Screener Application"
              img={project_1}
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
              local currency."
              link="/"
              github="/"
              type="Featured Project"
              />
            </div>
            <div className='col-span-6'>
              <Project
              title="Crypto Screener Application"
              img={project_1}
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
              local currency."
              link="/"
              github="/"
              type="Featured Project"
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
              title="Crypto Screener Application"
              img={project_1}
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
              link="/"
              github="/"
              type="Featured Project"
              />
            </div>
            <div className='col-span-6'>
              <Project
              title="Crypto Screener Application"
              img={project_1}
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
              local currency."
              link="/"
              github="/"
              type="Featured Project"
              />
            </div>
            <div className='col-span-6'>
              <Project
              title="Crypto Screener Application"
              img={project_1}
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
              local currency."
              link="/"
              github="/"
              type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
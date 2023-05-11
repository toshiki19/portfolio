import React from 'react'
import Head from 'next/head'
import Layout from '@/components/layout'
import AnimatedText from '@/components/animatedText';
import Link from 'next/link'
import Image from 'next/image'
import article_1 from '../../public/images/articles/pagination component in reactjs.jpg'
import article_2 from '../../public/images/articles/create loading screen in react js.jpg'
import { motion } from 'framer-motion';

const FramerImage = motion(Image);

const FeaturedArticle = ({title, summary, img, link, time}) => {
  return (
    <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] bg-dark rounded-[2rem]
      rounded-br-3xl'/>
      <Link href={link} target="_blank"
      className='w-full inline-block cursor-printer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className='w-full h-auto' 
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className='my-2 capitalize text-2xl font-bold hover:underline'>{title}</h2>
      </Link>
      <p className='mb-2 text-sm'>{summary}</p>
      <span className='text-primary font-semibold'>{time}</span>
    </li>
  )
}

const articles = () => {
  return (
    <>
    <Head>
      <title>CodeBucks | Articles Page</title>
      <meta name="description" content="CodeBucks is a blog website for developers and designers" />
    </Head>
    <main className='flex w-full flex-col items-center justify-center'>
      <Layout className='pt-16'>
        <AnimatedText text="About Page" className='mb-16'/>
        <ul className='grid grid-cols-2 gap-16'>
          <FeaturedArticle
          title="Build A Custom Pagination Component In Reactjs From Scratch"
          summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
          time="9 min read"
          link="/"
          img={article_1}
          />
          <FeaturedArticle
          title="Build A Custom Pagination Component In Reactjs From Scratch"
          summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
          time="9 min read"
          link="/"
          img={article_2}
          />
        </ul>
      </Layout>
    </main>
    </>
  )
}

export default articles
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Image, Box } from '@chakra-ui/react'
import Posts from '../components/Posts'
import Intro from '../components/Intro'
export default function Home() {
  return (
    <Box>
      <Head style={{ background: "pink" }}>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Intro />
        <Posts />
      </main>

    </Box>
  )
}

import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className={styles.container}>
        <h1>Hello World!</h1>
        <Link href="/about"><a>About</a></Link>
        <a href="/about">About</a>
        <br/>
        <Link href="/countries-get-server-side-props"><a>countries-get-server-side-props</a></Link>
        <Link href="/countries-get-static-props"><a>countries-get-static-props</a></Link>
      </div>
    </>
  )
}

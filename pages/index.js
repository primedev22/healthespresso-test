import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coding Exercise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Coding Exercise
        </h1>        
      </main>

      <footer className={styles.footer}>
        Written by HealthEspresso
      </footer>
    </div>
  )
}

Home.getInitialProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await res.json()
    return { posts: json }
  } catch (err) {
    return { posts: [] }
  }
}
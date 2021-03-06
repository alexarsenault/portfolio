import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={`${styles.container} ${styles.post}`}>
      <Head>
        <title> High Precision Attitude | Alex Arsenault</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          GPS Attitude Determination
        </h1>

        <p className={styles.description}>
          Paper is currently pending peer review - check back soon to learn more!
        </p>


      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a href="https://www.linkedin.com/in/alex-arsenault-69941662/">
              <img src="/linkedin.svg" alt="" className={styles.logo} />
          </a>
          <a href="https://github.com/alexarsenault">
            <img src="/github.svg" alt="" className={styles.logo} />
          </a>
          <a href="mailto:alex.arsenault@gatech.edu">
            <img src="/mail.svg" alt="" className={styles.logo} />
          </a>
        </a>
      </footer>
    </div>
  )
}

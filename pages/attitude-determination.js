import Head from 'next/head'
import Link from 'next/link'
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
        <a href="https://www.cscjournals.org/library/manuscriptinfo.php?mc=SPIJ-299">Link to paper</a>
        </p>


      </main>

      <footer className={styles.footer}>
        <Link href="https://www.linkedin.com/in/alex-arsenault-69941662/">
            <img src="/linkedin.svg" alt="" className={styles.logo} />
        </Link>
        <Link href="https://github.com/alexarsenault">
          <img src="/github.svg" alt="" className={styles.logo} />
        </Link>
        <Link href="mailto:alex.arsenault@gatech.edu">
          <img src="/mail.svg" alt="" className={styles.logo} />
        </Link>
      </footer>
    </div>
  )
}

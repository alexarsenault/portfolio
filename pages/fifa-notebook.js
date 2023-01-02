import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic";

const Notebook = dynamic(() => import("../components/Notebook"), {
	ssr: false
});


export default function Home() {
  return (
        <div>
        <Notebook
            filePath="/fifa_world_cup/fifa_notebook.ipynb" // Or a raw JSON notebook file location online
            notebookInputLanguage="python"
            inputMarkdownDarkTheme="true"
            outputDarkTheme="true"
            inputDarkTheme="true"
            inputCodeDarkTheme="true"
        />

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

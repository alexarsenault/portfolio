// components/Notebook.js
import { JupyterNotebookViewer } from "react-jupyter-notebook-viewer";
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Notebook(props) {
	const notebook = new JupyterNotebookViewer(props);
	return <>
    <div className={`${styles.post}`}>
        {notebook}
    </div>
    
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

    </>;
}

export default Notebook;
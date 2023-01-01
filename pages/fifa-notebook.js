import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic";

const Notebook = dynamic(() => import("../components/Notebook"), {
	ssr: false
});


export default function Home() {
  return (

        <Notebook
            filePath="/fifa_world_cup/fifa_notebook.ipynb" // Or a raw JSON notebook file location online
            notebookInputLanguage="python"
            inputMarkdownDarkTheme="true"
            className=".container"
            outputDarkTheme="true"
            // Rest of the properties if required.
        />



  )
}

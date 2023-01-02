// components/Notebook.js
import { JupyterNotebookViewer } from "react-jupyter-notebook-viewer";
import styles from '../styles/Home.module.css'

function Notebook(props) {
	const notebook = new JupyterNotebookViewer(props);
	return <>
    <div className={`${styles.post}`}>
        {notebook}
    </div>
    </>;
}

export default Notebook;
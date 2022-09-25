import img1 from "./pythonlab.png"
import styles from "./pythoncard.module.css";
import {Link} from "react-router-dom"

function PythonCard() {
  return (
    <Link to={`/pythonlab`} style={{all: 'unset'}}>
    <div className={styles.container}>
      <img className={styles.img1} src={img1} alt="PYTHONLAb" />
    </div>
    </Link>
  );
}

export default PythonCard;

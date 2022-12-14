import styles from './chip.module.css'
import {Link} from 'react-router-dom'

function Chip(props){
    //let url = props.foc ? '/foclab' : '/datastructure';
    let url;
    if(props.foc){
        url='/foclab';
    }
    else if(props.pythonlab){
        url='/pythonlab';
    }
    else{
        url='/datastructure'
    }
    return(
        <Link to={`${url}/${props.name}`} style={{all: 'unset'}}>
            <div className={styles.chip}>
                {props.name}
            </div>
        </Link>
    );
}

export default Chip;
import React, {useState} from 'react';
import Image from 'react-bootstrap/Image';
import styles from './home.module.css';
import teachNigeria from '../../images/teachNigeria.png';
import lasso from '../../images/lasso.png';
import alphaVision from '../../images/alphavison.png';
import feedAmerica from '../../images/feedAmerica.png' ;

export default function Home (){

    const [query, setQuery] = useState('');
    const [dataf, setDataf] = useState({});

    const search = async (event) => {
        if(event.key === "Enter"){
            console.log(event.target.value);
            // const data = await //FetchData(query);
            // //setDataf(data);
            setQuery('');

        }
    }

    return (
        <div className={styles.major}>
        {/* <div className= {styles.imgContainer}>
            <input  type="text" className = {styles.search} placeholder = "Search ..." value ={query} onChange = {(event) => setQuery(event.target.value)} onKeyPress={search}/>
            </div> */}
            {/* <svg  class={styles.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFF" fill-opacity="1" d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,176C672,139,768,85,864,85.3C960,85,1056,139,1152,133.3C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
    <h3>Our Partners</h3>
<hr/>
</div>
    )

}
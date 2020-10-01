import React, {useState} from 'react';
import bg from '../../images/bg.jpg';
import styles from './home.module.css';
import CC from '../../images/CC.jpg';
import Meso from '../../images/Mesi.jpg';
import Kirrin from '../../images/Kirrin.jpg';
import Nalata from '../../images/nalata.jpg' ;

export default function Home (){

    const [query, setQuery] = useState('');
    const [dataf, setDataf] = useState({});

    const search = async (event) => {
        if(event.key === "Enter"){
            console.log(event.target.value);
            // const data = await FetchData(query);
            // setDataf(data);
            setQuery('');

        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.style}>
            <input  type="text" className = {styles.search} placeholder = "Search ..." value ={query} onChange = {(event) => setQuery(event.target.value)} onKeyPress={search}/>
             <img src ={bg} alt = "home_image" className={styles.homeImage}/>
            </div>
        <section>
            <ul className={styles.logo}>
                <li className= {styles.listItem}> <img src = {CC} className ={styles.image} alt="Cee Cee's Closet"/></li>
                <li className= {styles.listItem}> <img src = {Meso} className ={styles.image} alt="Cee Cee's Closet"/></li>
                <li className= {styles.listItem}> <img src = {Kirrin} className ={styles.image} alt="Cee Cee's Closet"/></li>
                <li className= {styles.listItem}> <img src = {Nalata} className ={styles.image} alt="Cee Cee's Closet"/></li>
            </ul>
        </section>

 
</div>
    )

}
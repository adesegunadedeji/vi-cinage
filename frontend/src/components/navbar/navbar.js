import React from 'react';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import vicinage from '../../images/vicinage.png';

export default function NavbarComponent (){

    return (
        <div className={styles.navWrapper}>
        <div className={styles.gradBar}></div>
        <nav className={styles.navBar}>
        <img src={vicinage} alt="Company Logo"/>
        <div className= {styles.menuToggle} id= {styles.mobileMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        </div>
        <ul className="nav no-search">
            <li className={styles.navItem}><a href="#">Home</a></li>
            <li className={styles.navItem}><a href="#">Rent</a></li>
            <li className={styles.navItem}><a href="#">Listings</a></li>
            <li className={styles.navItem}><a href="#">About</a></li>
            <li className={styles.navItem}><a href="#">Sign In</a></li>
            <FontAwesomeIcon icon={faSearch} className ={styles.searchIcon}/>
      <input class={styles.searchInput} type="text" placeholder="Search.."/>
        </ul>
        </nav>
        </div>
    )
}
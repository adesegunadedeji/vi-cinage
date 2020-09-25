import React from 'react';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function NavbarComponent (){

    return (
        <div className={styles.navWrapper}>
        <div className={styles.gradBar}></div>
        <nav className={styles.navBar}>
        <img src="data:image/png;base64,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" alt="Company Logo"/>
        <div className= {styles.menuToggle} id= {styles.mobileMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        </div>
        <ul className="nav no-search">
            <li className={styles.navItem}><a href="#">Home</a></li>
            <li className={styles.navItem}><a href="#">Rent</a></li>
            <li className={styles.navItem}><a href="#">Sell</a></li>
            <li className={styles.navItem}><a href="#">About</a></li>
            <li className={styles.navItem}><a href="#">Sign In</a></li>
            <FontAwesomeIcon icon={faSearch} className ={styles.searchIcon}/>
      <input class={styles.searchInput} type="text" placeholder="Search.."/>
        </ul>
        </nav>
        </div>
    )
}
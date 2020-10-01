import React from 'react';
import styles from './footer.module.css';




const Footer = ()=> {
    const resources = [
        {
            id:1,
            title: "Why Vicinage", 
            bullet: "Realtors",
            bullet2: "Browse Homes",
            bullet3:"Checklist & Forms",
            bullet4: "Pricing"

        }, 
            {
                id:2,
                title: "About",
                bullet: "Careers",
                bullet2: "Contact",
                bullet3: "Affiliate program",
                bullet4: "Privacy"
    }, {
        id:3,
        title: "Contact us",
        bullet: "Talk to sales",
        bullet2: "Talk to support",
        bullet3: "Expert HR",
        bullet4: "Case Studies"
    }
].map((resources)=> {
        return(
            <div key={resources.key}>
                
                <strong className= {styles.footerStrong}>{resources.title}</strong>
                <ul className= {styles.footerList}>
                     <li>{resources.bullet}</li>
                     <li>{resources.bullet2}</li>
                     <li>{resources.bullet3}</li>
                     <li>{resources.bullet4}</li>
                </ul>
            </div>
        )})
    return (
        <div className= {styles.footerContainer}>
    
            {resources}
        </div>
    )
}

export default Footer;
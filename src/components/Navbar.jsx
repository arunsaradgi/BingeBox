import React, { Fragment } from 'react'
import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import bell from '../assets/bell.svg'
import user from '../assets/user.svg'
import styles from '../styles/navbar.module.css'


const Navbar = () => {
    const searchClicked=()=>{
        console.log('search is clicked')
    }


    return (
        <div className={styles.flex}>
            <img className={styles.logo} src={logo} alt="logo" />
            <div className={styles.navbarButtons}>
                <button>Home</button>
                <button>Movies</button>
                <button>Shows</button>
                <button>New & Popular</button>
                <button>My List</button>
                <button>Browse By Languages</button>
            </div>
            <div>
                <img className={styles.search} src={search} alt="" onClick={searchClicked}/>
                <img className={styles.bell} src={bell} alt="" />
                <img className={styles.user} src={user} alt="" />
            </div>
        </div>

    )
}

export default Navbar

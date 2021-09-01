import React, { memo, useRef } from 'react';
import styles from './navbar.module.css';

const Navbar = memo(({onSearch,onHome}) => {
   
    const search = useRef();
    const handleSubmit=(event)=>{
        event.preventDefault();
        onSearch(search.current.value);
        search.current.value="";
    }
    const handleClickLogo=()=>{
        onHome();
    }
    return(
        <div className={styles.navbar}>
            <img  onClick={handleClickLogo} className={styles.logo} src="images/logo.png" alt="logo" />
            <p className={styles.title}>Youtube</p>
        <form className={styles.searchForm}>
            <input className={styles.inputSearch} ref={search} type="text" placeholder="search.."/>
            <button onClick={handleSubmit} type="submit"className={styles.searchBtn}><i className="fas fa-search"></i></button>
        </form>
        </div>
    );

})
export default Navbar;
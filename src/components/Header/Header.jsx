import React, { useState } from "react";
import styles from "./Header.module.css";

import logosvg from "../../assets/icons/Header/Logo.svg";
import burgersvg from "../../assets/icons/Header/Burger.svg";
import burgerclosedsvg from "../../assets/icons/Header/BurgerClosed.svg";
import cartsvg from "../../assets/icons/Header/Cart.svg";
import searchIcon from "../../assets/icons/Header/Search.svg";
import accountsvg from "../../assets/icons/Header/Account.svg";

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <section className={styles.Header}>
            <div className={styles.HeaderContainer}>
                <div className={styles.HeaderNavBar}>
                    <div className={styles.HeaderBurger} onClick={toggleMenu}>
                        <img
                            src={isMenuOpen ? burgerclosedsvg : burgersvg}
                            alt={isMenuOpen ? "burgerclosedsvg" : "burgersvg"}
                        />
                    </div>
                    {isMenuOpen ? (
                        <>
                            <div className={styles.SearchBlock}>
                                <img src={searchIcon} alt="searchIcon" />
                            </div>
                        </>
                    ) : null}
                    <div className={styles.HeaderLogo}>
                        <a href="/">
                            <img src={logosvg} alt="logosvg" />
                        </a>
                    </div>
                    {isMenuOpen ? (
                        <>
                            <div className={styles.AccountBlock}>
                                <img src={accountsvg} alt="accountsvg" />
                            </div>
                        </>
                    ) : null}
                    <div className={styles.HeaderCart}>
                        <img src={cartsvg} alt="cartsvg" />
                    </div>
                </div>
                <div className={styles.HeaderTitleBox}>
                </div>
            </div>
            {isMenuOpen && (
                <div className={styles.Menu}>
                    <ul className={styles.MenuList}>
                        <li className={styles.MenuListItem}>Main page</li>
                        <li className={styles.MenuListItem}>Catalog</li>
                        <li className={styles.MenuListItem}>About</li>
                        <li className={styles.MenuListItem}>Delivery</li>
                        <li className={styles.MenuListItem}>Contacts</li>
                        <li className={styles.MenuListItem}>Bonus program</li>
                        <li className={styles.MenuListItem}>Work process</li>
                        <li className={styles.MenuListItem}>Partners</li>
                    </ul>
                </div>
            )}
        </section>
    );
};

export default Header;

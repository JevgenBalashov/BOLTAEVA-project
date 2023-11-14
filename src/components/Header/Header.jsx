import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logosvg from "../../assets/icons/Header/Logo.svg";
import burgersvg from "../../assets/icons/Header/Burger.svg";
import burgerclosedsvg from "../../assets/icons/Header/BurgerClosed.svg";
import cartsvg from "../../assets/icons/Header/Cart.svg";
import searchIcon from "../../assets/icons/Header/Search.svg";
import searchIconWhite from "../../assets/icons/Header/SearchWhite.svg";
import accountsvg from "../../assets/icons/Header/Account.svg";
import AccountWhite from "../../assets/icons/Header/AccountWhite.svg";
import LogoBLACK from "../../assets/icons/Header/LogoBLACK.svg";
import CartBlack from "../../assets/icons/Header/CartBLACK.svg";
import arrLeft from "../../assets/icons/Header/arrowLeft.svg";
import arrRight from "../../assets/icons/Header/arrowRight.svg";
import BackIMG1 from "../../assets/header-1-img.png";
import BackIMG2 from "../../assets/header-2-img.jpg";
import BackIMG3 from "../../assets/header-3-img.jpg";
import BackIMG4 from "../../assets/header-4-img.jpg";
import BackIMG5 from "../../assets/header-5-img.jpg";




const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [backgroundImages] = useState([BackIMG1, BackIMG2, BackIMG3, BackIMG4, BackIMG5]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + backgroundImages.length) % backgroundImages.length);
    };

    const toggleMenu = () => setMenuOpen(!isMenuOpen);
    const renderConditionalContent = (content, condition) =>
        condition && content;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 4000);

        return () => clearInterval(intervalId);
    }, [backgroundImages.length]);

    return (
        <section className={styles.Header} style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}>
            <div className={`${styles.HeaderContainer} ${isMenuOpen && styles.MenuOpen}`}>
                <div className={`${styles.HeaderNavBar} ${isMenuOpen && styles.MenuOpen}`}>
                    <div className={styles.BigMenuItem}>
                        <span className={styles.BigItem}>Catalog</span>
                        <span className={styles.BigItem}>About</span>
                        <span className={styles.BigItem}>Delivery</span>
                    </div>
                    <div className={styles.HeaderBurger} onClick={toggleMenu}>
                        <img src={isMenuOpen ? burgerclosedsvg : burgersvg} alt={isMenuOpen ? "burgerclosedsvg" : "burgersvg"} />
                    </div>
                    {renderConditionalContent(<div className={styles.SearchBlock}><img src={searchIcon} alt="searchIcon" /></div>, isMenuOpen)}
                    <div className={styles.HeaderLogo}>
                        <a href="/">
                            <img src={isMenuOpen ? LogoBLACK : logosvg} alt="logosvg" />
                        </a>
                    </div>
                    {renderConditionalContent(<div className={styles.AccountBlock}><img src={accountsvg} alt="accountsvg" /></div>, isMenuOpen)}
                    <div className={styles.HeaderCart}>
                        <img src={isMenuOpen ? CartBlack : cartsvg} alt="cartsvg" />
                    </div>
                    <div className={styles.SVGbox}>
                        <span className={styles.BigItem}>Contacts</span>
                        <div className={styles.SVGitem}>
                            <img src={searchIconWhite} alt="searchIcon" />
                            <img src={cartsvg} alt="cartsvg" />
                            <img src={AccountWhite} alt="AccountWhite" />
                        </div>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className={styles.Menu}>
                    <ul className={`${styles.MenuList} ${isMenuOpen ? styles.open : ""}`}>
                        {["Main page", "Catalog", "About", "Delivery", "Contacts", "Bonus program", "Work process", "Partners"].map((item, index) => (
                            <li key={index} className={styles.MenuListItem}>
                                <a href="/" className={styles.HeaderLink}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div className={styles.ImageIndicator}>
                {backgroundImages.map((_, index) => (
                    <span
                        key={index}
                        className={index === currentImageIndex ? styles.ActiveDot : styles.Dot}
                        onClick={() => setCurrentImageIndex(index)}
                    >
                    </span>
                ))}
            </div>
            <div className={styles.HeaderTitleBox}>
                <div className={styles.Arrow} onClick={prevImage}><img className={styles.arrowImg} src={arrLeft} alt="arrLeft" /></div>
                <span className={styles.HeaderTitle}>
                    Capsule Collection
                </span>
                <div className={styles.Arrow} onClick={nextImage}><img className={styles.arrowImg} src={arrRight} alt="arrRight" /></div>
            </div>
        </section>
    );
};

export default Header;
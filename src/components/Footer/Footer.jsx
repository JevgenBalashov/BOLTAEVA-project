import React from "react";
import styles from "./Footer.module.css";
import FooterLogo from "../../assets/icons/Footer/Vector1.svg";
import Emailsvg from "../../assets/icons/Footer/Social/e-mail.svg";
import whatsupsvg from "../../assets/icons/Footer/Social/whatsapp.svg";
import facebooksvg from "../../assets/icons/Footer/Social/facebook.svg";
import twitersvg from "../../assets/icons/Footer/Social/twitter.svg";
import instsvg from "../../assets/icons/Footer/Social/inst.svg";
import youtubesvg from "../../assets/icons/Footer/Social/YouTube.svg";
import vksvg from "../../assets/icons/Footer/Social/vk.svg";

const socialIcons = [
    { icon: facebooksvg, alt: "facebooksvg" },
    { icon: instsvg, alt: "instsvg" },
    { icon: twitersvg, alt: "twitersvg" },
    { icon: youtubesvg, alt: "youtubesvg" },
    { icon: vksvg, alt: "vksvg" },
];

const NavigationList = [
    "Product catalog",
    "About company",
    "Bonus program",
    "Work process",
    "Partners",
    "Privacy Policy",
];

const ProductsList = [
    "Care cosmetics",
    "Eyebrow cosmetics",
    "Decorative cosmetics",
    "New in the collection",
    "Box and complect",
    "Accessories",
];

const renderList = (title, list) => (
    <div className={styles.FooterListBox}>
        <h3 className={styles.FooterTitle}>{title}</h3>
        <ul>
            {list.map((item, index) => (
                <li className={styles.listItem} key={index}>{item}</li>
            ))}
        </ul>
    </div>
);

const renderSocialButtons = () => (
    <>
        <button className={styles.SocialBtn}>
            <img src={Emailsvg} alt="Emailsvg" />
            <span>E-mail</span>
        </button>
        <button className={`${styles.SocialBtn} ${styles.SecondButton}`}>
            <img src={whatsupsvg} alt="whatsupsvg" />
            <span>Whatsapp</span>
        </button>
    </>
);

const Footer = () => {
    return (
        <section className={styles.Footer}>
            <div className={styles.FooterContainer}>
                <div className={styles.FooterLogoBox}>
                    <img src={FooterLogo} alt="FooterLogo" />
                </div>
                <div className={styles.FooterMainContetnt}>
                    <div className={styles.CompanyBox}>
                        <div className={styles.CompanyTxtInfo}>
                            <h3 className={styles.FooterTitle}>Company</h3>
                            <p className={styles.FooterTXTbox}>
                                The brand strives to create respect for its products among the
                                audience, so that the presence of the company`s products is a
                                sign of prestige.
                            </p>
                        </div>
                        <div className={styles.FooterSocialBtn}>
                            {renderSocialButtons()}
                        </div>
                        <div className={styles.FooterSocialMedia}>
                            {socialIcons.map((icon, index) => (
                                <div className={styles.Footersvgsocial} key={index}>
                                    <img src={icon.icon} alt={icon.alt} />
                                </div>
                            ))}
                        </div>
                    </div>
                    {renderList("Navigation", NavigationList)}
                    {renderList("Products", ProductsList)}
                    <div className={styles.ContactsBox}>
                        <h3 className={styles.FooterTitle}>Contacts</h3>
                        <p className={styles.FooterTXTbox}>
                            We are open to new opportunities, so you can contact our company
                            representatives for any questions
                        </p>
                        <div className={styles.SocialLink}>
                            <div className={styles.Link}>
                                <img src={Emailsvg} alt="Emailsvg" />
                                <span>E-mail</span>
                            </div>
                            <div className={styles.Link}>
                                <img src={whatsupsvg} alt="whatsupsvg" />
                                <span>Whatsapp</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.FooterAuthorcontainer}>
                        <span className={styles.FooterAuthorblock}>
                            All rights reserved (c) BOLTAEVA 2023
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;

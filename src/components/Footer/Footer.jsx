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
                            <h3 className={styles.CompanyTitle}>
                                Company
                            </h3>
                            <p className={styles.CompanyInfo}>
                                The brand strives to create respect for its products among the audience, so that the presence of the company`s products is a sign of prestige.
                            </p>
                        </div>
                        <div className={styles.FooterSocialBtn}>
                            <div className={styles.SocialBtn}>
                                <img src={Emailsvg} alt="Emailsvg" />
                            </div>
                            <div className={styles.SocialBtn}>
                                <img src={whatsupsvg} alt="whatsupsvg" />
                            </div>
                        </div>
                        <div className={styles.FooterSocialMedia}>
                            <img src={facebooksvg} alt="facebooksvg" />
                            <img src={instsvg} alt="instsvg" />
                            <img src={twitersvg} alt="twitersvg" />
                            <img src={youtubesvg} alt="youtubesvg" />
                            <img src={vksvg} alt="vksvg" />
                        </div>
                    </div>
                    <span className={styles.FooterAuthorblock}>
                    All rights reserved (c) BOLTAEVA 2023
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Footer;
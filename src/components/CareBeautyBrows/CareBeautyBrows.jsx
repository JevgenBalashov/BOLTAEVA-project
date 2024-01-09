import React from "react";
import styles from "./CareBeautyBrows.module.css";
import CareIMG from "../../assets/MainIMG/careIMG.jpeg";
import BeautyIMG from "../../assets/MainIMG/beautyIMG.png";
import BrowsIMG from "../../assets/MainIMG/browsIMG.png";

function CareBeatuBrows() {
    return (
        <section className={styles.MainSection}>
            <div className={styles.mainSecrionContent}>
                <div className={styles.sliderBox}>
                    <img className={styles.img} src={CareIMG} alt="CareIMG" />
                    <span className={styles.SlideTitle}>Care</span>
                </div>
                <div className={styles.sliderBox}>
                    <img className={styles.img} src={BeautyIMG} alt="BeautyIMG" />
                    <span className={styles.SlideTitle}>Beauty</span>

                </div>
                <div className={styles.sliderBox}>
                    <img className={styles.img} src={BrowsIMG} alt="BrowsIMG" />
                    <span className={styles.SlideTitle}>Brows</span>
                </div>
            </div>
        </section>
    );
}

export default CareBeatuBrows;
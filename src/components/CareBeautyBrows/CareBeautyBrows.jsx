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
                    <div className={styles.CareSlide}>
                        <img className={styles.img} src={CareIMG} alt="CareIMG" />
                    </div>
                </div>
                <div className={styles.sliderBox}>
                    <img className={styles.img} src={BeautyIMG} alt="BeautyIMG" />
                </div>
                <div className={styles.sliderBox}>
                    <img className={styles.img} src={BrowsIMG} alt="BrowsIMG" />
                </div>
            </div>
        </section>
    );
}

export default CareBeatuBrows;
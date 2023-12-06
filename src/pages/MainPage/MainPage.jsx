import React from "react";
import styles from "./MainPage.styles.css";
import CareBeatuBrows from "../../components/CareBeautyBrows/CareBeautyBrows";

const MainPage = () => {
    return (
        <div className={styles.MainPage}>
            <CareBeatuBrows />
        </div>
    );
};

export default MainPage;

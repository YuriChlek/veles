import styles from "./page.module.scss";
import React from "react";
import {useTranslations} from 'next-intl';

const Home = (): React.JSX.Element => {
    const t = useTranslations();
    return (
        <main>
            <h2>Home page</h2>
        </main>
    );
}

export default Home;

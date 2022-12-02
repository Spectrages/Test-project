import React from 'react';
import styles from './footer.module.scss'
import Container from "@mui/material/Container";

export const Footer = () => {
    const linkedInLink = `https://www.linkedin.com/in/artsiom-malyshev-459013170/`;
    const githubLink = `https://github.com/Spectrages`;

    const handleClick = (name) => {
        window.open(name, "_blank")

    };

    return (
        <div className={styles.root}>
            <Container maxWidth="lg">
                <div className={styles.textBlock}>
                    <span className={styles.text}>Created by Artsiom Malyshev</span>
                    <span className={styles.text}>Contact information: </span>
                    <span className={styles.text}>Email: spectrages@gmail.com</span>
                    <span className={styles.text} onClick={() => handleClick(linkedInLink)}>LinkedIn: My page (click me)</span>
                    <span className={styles.text} onClick={() => handleClick(githubLink)}>Github: My page (click me)</span>
                </div>
            </Container>

        </div>
    );
};
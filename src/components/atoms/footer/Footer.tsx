import React from "react"
import cx from "classnames"
import styles from "./footer.module.scss"
import iconFacebook from "../../../assets/image/social-media/facebook.svg"

export interface FooterProps {

}


export const Footer: React.FC<FooterProps> = ({
    ...props
}) => (
    <footer
        className={cx([
            styles.footer
        ])}
        {...props}
    >
        <div className={styles.footer__top}>
            <div className="row">
                <div className="col">
                    <h3 className={styles.footer__title}>Buy Home</h3>
                    <ul>
                        <li className={styles.footer__item}><a className={styles.footer__link} href="#">Buy home in Kathmandu</a></li>
                        <li className={styles.footer__item}><a className={styles.footer__link} href="#">Buy home in Kathmandu</a></li>
                        <li className={styles.footer__item}><a className={styles.footer__link} href="#">Buy home in Kathmandu</a></li>
                        <li className={styles.footer__item}><a className={styles.footer__link} href="#">Buy home in Kathmandu</a></li>
                        <li className={styles.footer__item}><a className={cx([styles.footer__link, styles['footer__link-all']])} href="#">See All</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3 className={styles.footer__title}>For Rent</h3>
                    <ul>
                        <li><a href="#">Kathmandu</a></li>
                        <li><a href="#">Pokhara</a></li>
                        <li><a href="#">Hetauda</a></li>
                        <li><a href="#">Biratnagar</a></li>
                        <li className={styles.footer__item}><a className={cx([styles.footer__link, styles['footer__link-all']])} href="#">See All</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3 className={styles.footer__title}>Search Home</h3>
                    <ul>
                        <li><a href="#">Kathmandu</a></li>
                        <li><a href="#">Pokhara</a></li>
                        <li><a href="#">Hetauda</a></li>
                        <li><a href="#">Biratnagar</a></li>
                        <li className={styles.footer__item}><a className={cx([styles.footer__link, styles['footer__link-all']])} href="#">See All</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3 className={styles.footer__title}>Tools</h3>
                    <ul>
                        <li><a href="#">Calculator</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className={styles.footer__bottom}>
            <div className="row">
                <div className="col">
                    <h1 className={styles.footer__bottom__logo}>BASNUS</h1>
                </div>
                <div className="col">
                    <nav>
                        <a href="#" className={styles.footer__bottom__logo__socialLink} aria-label="Facebook"><img src={iconFacebook} /></a>
                        <a href="#" className={styles.footer__bottom__logo__socialLink} aria-label="Facebook"><img src={iconFacebook} /></a>
                        <a href="#" className={styles.footer__bottom__logo__socialLink} aria-label="Facebook"><img src={iconFacebook} /></a>
                        <a href="#" className={styles.footer__bottom__logo__socialLink} aria-label="Facebook"><img src={iconFacebook} /></a>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col">© 2020 Basnus Pvt. Ltd.</div>
                <div className="col">
                    <ul className={styles.footer__bottom__linkContainer}>
                        <li><a className={styles.footer__bottom__link} href="#">Label#1</a></li>
                        <li><a className={styles.footer__bottom__link} href="#">Label#1</a></li>
                        <li><a className={styles.footer__bottom__link} href="#">Label#1</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </footer>
)

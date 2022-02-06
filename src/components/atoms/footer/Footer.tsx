import React from "react"
import cx from "classnames"
import styles from "./footer.module.scss"
import Image from 'next/image'
import Container from '../../common/Container'

interface IsocialMedia {
    name: string,
    link: string,
    image: string
}
export interface FooterProps {
    socialMedias: Array<IsocialMedia>
}

export const Footer: React.FC<FooterProps> = ({
    socialMedias,
    ...props
}) => (
    <footer
        className={cx([
            styles.footer,
            (props.className) ? props.className : ''
        ])}
    // {...props}
    >
        <div className={styles.footer__top}>
            <Container>
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
            </Container>
        </div>

        <div className={styles.footer__bottom}>
            <Container>
                <div className="row">
                    <div className="col">
                        <h1 className={styles.footer__bottom__logo}>BASNUS</h1>
                    </div>
                    <div className="col">
                        <nav>
                            {socialMedias.map((value, index) => {
                                return <a href={value.link} className={styles.footer__bottom__logo__socialLink} aria-label={value.name} title={value.name} key={index}><Image width={38} height={38} src={value.image} /></a>
                            })}
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col">© 2022 Basnus Pvt. Ltd.</div>
                    <div className="col">
                        <ul className={styles.footer__bottom__linkContainer}>
                            <li><a className={styles.footer__bottom__link} href="#">Label#1</a></li>
                            <li><a className={styles.footer__bottom__link} href="#">Label#1</a></li>
                            <li><a className={styles.footer__bottom__link} href="#">Label#1</a></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>

    </footer>
)

import Container from "../../../UI/Container/Container";
import styles from '../header.module.scss'
import {Logo} from "../../../UI/Logo/Logo";
import {Button} from "../../../UI/Button/Button";
import catalogImage from "../../../assets/catalog.svg"
import consultantImage from "../../../assets/consultant.png"
import {Trash} from "../../Trash/Trash";
import {TextSearch} from "../../TextSearch/TextSearch";
import {PriceListButton} from "../../../UI/PriceListButton/PriceListButton";
import {BurgerMenu} from "../../BurgerMenu/BurgerMenu";
import {CORRECT_TELEPHONE, SCHEDULE, TELEPHONE} from "../Top/constants";

export const HeaderBottom = () => {
    return (
        <div className={styles.bottom}>
            <Container>
                <div className={`${styles.wrapper || ''} ${styles.flex}`}>
                    <BurgerMenu/>
                    <Logo isWhite={false} class={styles.logo}/>
                    <Button isRounded={false}
                            title={"Каталог"}
                            class={`${styles.catalog} ${styles['mobile-hidden']}`}
                            urlImage={catalogImage}
                    />
                    <TextSearch htmlFor={'search'}
                                onClick={() => {
                                }}
                                class={`${styles.search} ${styles['mobile-hidden']}`}
                                onChange={() => {
                                }}/>
                    <div className={`${styles.consultant} ${styles['border-right']} ${styles['mobile-hidden']}`}>
                        <div className={styles['consultant-wrapper']}>
                            <div className={`${styles.title} ${styles['consultant-item']}`}>
                                <a href={`tel:${CORRECT_TELEPHONE}`} className={styles.href}>{TELEPHONE}</a>
                            </div>
                            <p className={`${styles.breadcrumbs} ${styles['consultant-item']}`}>
                                время работы: {SCHEDULE.start}-{SCHEDULE.end}
                            </p>
                            <a className={`${styles.href} ${styles['href_underline']} ${styles['consultant-item']}`}
                               href={'#'}>
                                Заказать звонок
                            </a>
                        </div>
                        <div className={styles['consultant-avatar']}>
                            <img src={consultantImage} className={styles['consultant-img']}
                                 alt="аватар консультанта"
                                 width={74} height={100}/>
                            <span className={styles['consultant-mode']}></span>
                        </div>

                    </div>
                    <PriceListButton
                        classes={[styles.prices, styles['prices_mobile'], styles['border-right'], styles['mobile-hidden']]}/>
                    <Trash/>
                </div>
            </Container>
        </div>
    );
};
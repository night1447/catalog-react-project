import styles from "./footer.module.scss";
import Container from "../../UI/Container/Container";
import whatsUpImage from '../../assets/decor/soc-links/whatsup.svg';
import telegramImage from '../../assets/decor/soc-links/telegram.svg';
import {SrOnly} from "../../UI/SrOnly/SrOnly";
import {PriceListButton} from "../../UI/PriceListButton/PriceListButton";
import {EmailSender} from "../EmailSender/EmailSender";
import {Logo} from "../../UI/Logo/Logo";
import {CORRECT_TELEPHONE, EMAIL, SCHEDULE, TELEPHONE} from "../../constants/info";
import {MENU} from "../../constants/navigation";
import visaImage from '../../assets/decor/payments/visa.svg'
import masterCardImage from '../../assets/decor/payments/mastercard.svg'
import { routes } from "../../routes/routes";
import { Link } from "react-router-dom";

interface ISocNetwork {
    imageUrl: string,
    value: string,
}

interface IPayment {
    value: string,
    imageUrl: string,
}

export const PAYMENTS: IPayment[] = [
    {
        value: 'visa',
        imageUrl: visaImage,
    },
    {
        value: 'mastercard',
        imageUrl: masterCardImage,
    }
]
export const SOC_NETWORKS: ISocNetwork[] = [
    {imageUrl: whatsUpImage, value: 'whatsUp'},
    {imageUrl: telegramImage, value: 'telegram'}];
export const CATEGORY: string[] = ['Бытовая химия', 'Косметика и гигиена', 'Товары для дома', 'Товары для детей и мам', 'Посуда'];
export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Logo isWhite={true} class={styles.logo}/>
                        <p className={styles.description}>
                            Компания «Султан» — снабжаем розничные магазины товарами
                            "под ключ" в Кокчетаве и Акмолинской области
                        </p>
                        <p className={styles.breadcrumbs}>Подпишись на скидки и акции</p>
                        <EmailSender htmlFor={'footer-email-sender'}/>
                    </li>
                    <li className={styles.item}>
                        <h2 className={styles.title}>
                            Меню сайта:
                        </h2>
                        <ul className={styles.properties}>
                            {MENU.map(value =>
                                <li className={styles.property} key={value}>
                                    <a href={'/'} className={styles.href}>
                                        {value}
                                    </a>
                                </li>)}
                        </ul>
                    </li>
                    <li className={styles.item}>
                        <h2 className={styles.title}>
                            Категории:
                        </h2>
                        <ul className={styles.properties}>
                            {CATEGORY.map(value =>
                                <li className={styles.property} key={value}>
                                    <a href={'/'} className={styles.href}>
                                        {value}
                                    </a>
                                </li>)}
                        </ul>
                    </li>
                    <li className={`${styles.item} ${styles.item_abs}`}>
                        <h2 className={`${styles.title} ${styles['mobile-hidden']}`}>
                            Скачать прайс-лист:
                        </h2>
                        <PriceListButton class={styles.prices}/>

                        <div className={`${styles['mobile-hidden']}`}>
                            <h3 className={styles.subtitle}>
                                Связь в мессенджерах:
                            </h3>
                            <ul className={styles['soc-links']}>
                                {SOC_NETWORKS.map(item =>
                                    <li className={`${styles['soc-link']}`}
                                        key={item.value}
                                        style={{backgroundImage: `url(${item.imageUrl})`}}>
                                        <a href={'/'} className={`${styles.href} ${styles.href_abs}`}>
                                            <SrOnly>
                                                Перейти по ссылке на {item.value}
                                            </SrOnly>
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <h2 className={styles.title}>
                            Контакты:
                        </h2>
                        <div className={styles['item-wrapper']}>
                            <div className={styles.contacts}>
                                <a href={`tel:${CORRECT_TELEPHONE}`}
                                   className={`${styles.href} ${styles.tel}`}>
                                    {TELEPHONE}
                                </a>
                                <p className={styles.schedule}>время работы: {SCHEDULE.start}-{SCHEDULE.end}</p>
                                <a href={'/'} className={`${styles.order} ${styles.href} ${styles.href_underline}`}>
                                    Заказать звонок
                                </a>
                                <a href={`mailto:${EMAIL}`} className={styles.email}>
                                    <span className={`${styles.href} ${styles.email_value}`}>{EMAIL}</span>
                                    На связи в любое время
                                </a>
                            </div>
                            <div className={styles.connection}>
                                <h3 className={styles.subtitle}>
                                    Связь в мессенджерах:
                                </h3>
                                <ul className={styles['soc-links']}>
                                    {SOC_NETWORKS.map(item =>
                                        <li className={`${styles['soc-link']}`}
                                            key={item.value}
                                            style={{backgroundImage: `url(${item.imageUrl})`}}>
                                            <a href={'/'} className={`${styles.href} ${styles.href_abs}`}>
                                                <SrOnly>
                                                    Перейти по ссылке на {item.value}
                                                </SrOnly>
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <ul className={styles.payments}>
                                {PAYMENTS.map(item =>
                                    <li className={styles.payment}
                                        style={{backgroundImage: `url(${item.imageUrl})`}}
                                        key={item.value}>
                                        <SrOnly>
                                            {item.value}
                                        </SrOnly>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </li>
                </ul>
            </Container>
        </footer>
    );
};
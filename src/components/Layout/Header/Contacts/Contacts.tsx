import * as React from 'react';
import styles from "../header.module.scss";
import addressImage from "../../../../assets/decor/helpers/address.svg";
import {address, EMAIL, SCHEDULE, TELEPHONE} from "../../../../constants/info";
import emailImage from "../../../../assets/decor/helpers/email.svg";
import telImage from "../../../../assets/decor/helpers/tel-black.svg";
import telWhiteImage from "../../../../assets/decor/helpers/tel-white.svg";
import {Button} from "../../../../UI/Button/Button";

interface contactsProps {
    class?: string,
}

export const Contacts = (props: contactsProps) => {
    return (
        <ul className={`${styles.blocks} ${props.class || ''}`}>
            <li className={styles.block} style={{backgroundImage: `url(${addressImage})`}}>
                <div className={styles.title}>{address}</div>
                <div className={styles.breadcrumbs}>(Рынок Восточный)</div>
            </li>
            <li className={styles.block} style={{backgroundImage: `url(${emailImage})`}}>
                <div className={styles.title}>
                    <a href={`mailto:${EMAIL}`} className={styles.href}>{EMAIL}</a>
                </div>
                <div className={styles.breadcrumbs}>На связи в любое время</div>
            </li>
            <li className={`${styles.block} ${styles['block-mobile']} ${styles.block_mb}`}
                style={{backgroundImage: `url(${telImage})`}}>
                <div className={styles.title}>
                    Отдел продаж
                </div>
                <div className={`${styles.breadcrumbs}`}><a href={`tel:${TELEPHONE}`}
                                                            className={`${styles.href}`}>{TELEPHONE}</a></div>
            </li>
            <li className={`${styles.block} ${styles['block-mobile']}`}>
                <div className={styles.breadcrumbs}>время работы: {SCHEDULE.start}-{SCHEDULE.end}</div>
            </li>
            <li className={`${styles.block} ${styles['block-mobile']} ${styles['block_flex']}`}>
                <Button isRounded={true}
                        class={`${styles['tel-button']}`}
                        imageClass={styles['tel-button_image']}
                        urlImage={telWhiteImage}/>
                <a href={`/`} className={`${styles.href} ${styles.href_underline} ${styles.href_little}`}>Заказать
                    звонок</a>
            </li>
        </ul>
    );
};
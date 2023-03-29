import styles from '../header.module.scss'
import {Navigation} from "../../Navigation/Navigation";
import Container from "../../../UI/Container/Container";
import {Contacts} from "../Contacts/Contacts";
import {Button} from "../../../UI/Button/Button";
import searchImage from '../../../assets/search-black.svg'
import catalogImage from '../../../assets/catalog-black.svg'

export const HeaderTop = () => {
    return (
        <div className={`${styles.top}`}>
            <Container>
                <div className={`${styles.grid || ''} ${styles.flex}`}>
                    <Contacts class={styles['mobile-hidden']}/>
                    <Navigation/>
                    <Button class={styles.button} imageClass={styles.button_image} isRounded={false} title={'Каталог'} urlImage={catalogImage}/>
                    <Button class={styles.button} imageClass={styles.button_image} isRounded={false} title={'Поиск'} urlImage={searchImage}/>
                </div>
            </Container>
        </div>
    );
};
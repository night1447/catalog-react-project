import styles from '../header.module.scss'
import {Navigation} from "../../../Navigation/Navigation";
import Container from "../../../../UI/Container/Container";
import {Contacts} from "../Contacts/Contacts";
import {Button} from "../../../../UI/Button/Button";
import searchImage from '../../../../assets/decor/helpers/search-black.svg'
import catalogImage from '../../../../assets/decor/helpers/catalog-black.svg'
import { routes } from '../../../../routes/routes';
import { Link } from 'react-router-dom';

export const HeaderTop = () => {
    return (
        <div className={`${styles.top}`}>
            <Container>
                <div className={`${styles.grid || ''} ${styles.flex}`}>
                    <Contacts class={styles['mobile-hidden']}/>
                    <Navigation/>
                    <Link to={routes.CATALOG} className={styles.button}><Button class={styles.button} imageClass={styles.button_image} isRounded={false} title={'Каталог'}
                            urlImage={catalogImage}/></Link>
                    <Button class={styles.button} imageClass={styles.button_image} isRounded={false} title={'Поиск'}
                            urlImage={searchImage}/>
                </div>
            </Container>
        </div>
    );
};
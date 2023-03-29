import styles from './logo.module.scss'
import {SrOnly} from "../SrOnly/SrOnly";
import whiteLogoImage from '../../assets/logo-white.svg';
import blackLogoImage from '../../assets/logo-black.svg';

interface LogoProps {
    isWhite: boolean,
    class?: string,
}

export const Logo = (props: LogoProps) => {
    return (
        <div className={`${styles.logo} ${props.class||''}`}
             style={{backgroundImage: `url(${props.isWhite ? whiteLogoImage : blackLogoImage})`}}>
            <SrOnly>Логотип</SrOnly>
        </div>
    );
};
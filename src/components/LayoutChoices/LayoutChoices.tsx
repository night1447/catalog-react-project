import styles from './layout.module.scss'
import {LayoutChoice} from "./LayoutChoice/LayoutChoice";
import gridImage from '../../assets/decor/helpers/grid-button.svg'
import rowImage from '../../assets/decor/helpers/row-button.svg'
import {IChoises, LayoutProps} from "./types";


const choices: IChoises[] = [{
    layout: 'row',
    urlImage: rowImage,
}, {
    layout: 'grid',
    urlImage: gridImage,
}]

export const LayoutChoices = (props: LayoutProps) => {
    return (
        <ul className={`${styles.layout} ${props.class || ''}`}>
            {choices.map(choice =>
                <LayoutChoice
                    urlImage={choice.urlImage}
                    layout={choice.layout}
                    key={choice.layout}/>)}
        </ul>
    );
};
import styles from './layout.module.scss'
import {LayoutChoice} from "./LayoutChoice/LayoutChoice";
import gridImage from '../../assets/grid-button.svg'
import rowImage from '../../assets/row-button.svg'
import {LayoutPayload} from "../../store/reducers/Filters/Layout/LayoutTypes";

interface IChoises extends LayoutPayload {
    urlImage: string,
}

const choices: IChoises[] = [{
    layout: 'row',
    urlImage: rowImage,
}, {
    layout: 'grid',
    urlImage: gridImage,
}]

interface LayoutProps {
    class?: string,
}

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
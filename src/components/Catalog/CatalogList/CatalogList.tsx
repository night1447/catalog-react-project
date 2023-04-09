import {CatalogItem} from "../CatalogItem/CatalogItem";
import styles from '../catalog.module.scss'
import {ICatalogProduct} from "../../../models/ICatalogProduct";
import {useTypedSelector} from "../../../hooks/useTypedSelector";


interface CatalogListProps {
    products: ICatalogProduct[],
    class?: string,
    start: number,
    end: number,
}


export const CatalogList = ({products, class: className, end, start}: CatalogListProps) => {
    const layout = useTypedSelector((state) => state.layoutReducer.layout);
    const displayList = () => {
        let list = [];
        for (let i = start; i < end; i++) {
            list.push(<CatalogItem isRow={layout === 'row'}
                                   product={products[i]}
                                   key={products[i].id}/>)
        }
        return list;
    }
    return (
        <ul className={`${styles.list} ${className || ''} ${layout === 'row' ? styles.list_row : ''}`}>
            {displayList().map(item => item)}
        </ul>
    );
};
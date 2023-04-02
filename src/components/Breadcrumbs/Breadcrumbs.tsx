import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import useReactRouterBreadcrumbs, {BreadcrumbData} from "use-react-router-breadcrumbs";
import styles from "./breadcrumbs.module.scss"
import {Routing} from "../../routes/routing";
import {useProductService} from "../../services/ProductService";
import {useParams} from "react-router";
import {routes} from "../../routes/routes";

interface CrumbItem extends BreadcrumbData {
    title: string,
}

const initialState: CrumbItem[] = [];
export const Breadcrumbs: React.FC = () => {
    const breadcrumbs = useReactRouterBreadcrumbs(Routing);
    const {getProductById} = useProductService();
    const [crumbs, setBreadcrumbs] = useState(initialState);
    let {id} = useParams();
    const location = useLocation();
    useEffect(() => {
        setBreadcrumbs(breadcrumbs as CrumbItem[])
    }, [])
    useEffect(() => {
        setBreadcrumbs((prevState) => prevState.map(item => {
            if (item.key === routes.MAIN) {
                item.title = 'Главная';
            }
            if (item.key === routes.TRASH) {
                item.title = 'Корзина';
            }
            if (item.key === routes.CATALOG) {
                item.title = 'Каталог';
            }
            if (item.key === routes.PRODUCT.replace('/:id', `/${id}`))
                getProductById(+(id || 0)).then(product => {
                    item.title = product.name;
                })
            return item;
        }))
    }, [breadcrumbs.length]);

    return (
        <div className={styles.breadcrumbs}>
            {crumbs.map(({match, breadcrumb, title},index) => (
                <Link
                    key={match.pathname}
                    to={match.pathname}
                    className={`${styles.item} ${match.pathname === location.pathname ? styles.disabled: ''}`}
                >
                    {title}
                </Link>
            ))}
        </div>
    );
};
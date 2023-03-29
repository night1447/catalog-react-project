import React from "react";
import {Link, useLocation} from "react-router-dom";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import {Routing} from "../Router/routing";
import styles from "./breadcrumbs.module.scss"

export const Breadcrumbs: React.FC = () => {
    const breadcrumbs = useReactRouterBreadcrumbs(Routing);
    const location = useLocation()
    console.log(breadcrumbs);
    return (
        <div className={styles.breadcrumbs}>
            {breadcrumbs.map(({match, breadcrumb}) => (
                <Link
                    key={match.pathname}
                    to={match.pathname}
                    className={`${styles.item} ${match.pathname === location.pathname ? styles.active : ''}`}
                >
                    {breadcrumb}
                </Link>
            ))}
        </div>
    );
};
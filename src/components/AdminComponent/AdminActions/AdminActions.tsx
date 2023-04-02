import {ICatalogProduct, TypeSize} from "../../../models/ICatalogProduct";
import {AdminField, CustomAdminField} from "../AdminField/AdminField";
import {Button} from "../../../UI/Button/Button";
import styles from './admin.module.scss'
import {FormEvent, useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {
    addMainProductAction,
    deleteProductAction,
    editProductAction
} from "../../../store/reducers/Products/ProductAction";
import {AdminProduct} from "../AdminProduct/AdminProduct";
import {setTypesProductAction} from "../../../store/reducers/Filters/TypesProduct/typesProductAction";


const obj: ICatalogProduct = {
    barCode: 0,
    brand: "",
    description: "",
    id: 0,
    manufacturer: "",
    name: "",
    price: 0,
    productImageUrl: "",
    size: "",
    typeSize: 'volume',
    types: [],
}
type objKeys = keyof typeof obj;
const createFields = (isArray: boolean, initialState?: ICatalogProduct | string[]) => {
    let result = [];
    if (!isArray) {
        const initObj = initialState ? initialState : obj;
        for (let key in initObj) {
            let item;
            let value = initObj[key as keyof typeof initObj];
            const typeKey = (typeof value).toString();
            if (key === 'types') {
                item = <CustomAdminField title={key} key={key} value={value as string[]} isNumber={typeKey === 'number'}/>
            } else {
                if (key === 'id') {
                    if (!initialState) {
                        item = <AdminField title={key} value={value} key={key} isNumber={typeKey === 'number'}/>
                    }
                } else {
                    item = <AdminField title={key} key={key} value={value} isNumber={typeKey === 'number'}/>
                }
            }
            result.push(item);
        }
    } else {
        result.push(<CustomAdminField title={'Type'} value={initialState as string[]} isNumber={false}/>)
    }
    return result;
}
type actionForm = 'none' | 'add' | 'edit' | 'editTypes';
let initialActionState: actionForm = 'none';
export const AdminActions = () => {
        const [editableProduct, setEditableProduct] = useState(obj);
        const [isAction, setIsAction] = useState(initialActionState);
        const dispatch = useDispatch();
        const products = useTypedSelector(state => state.productReducer.products);
        const types = useTypedSelector(state => state.typesProductReducer.typesProduct);
        const sendValueHandler = (event: FormEvent<HTMLFormElement>, form: HTMLFormElement, actionCreator: (value: ICatalogProduct | string[]) => any) => {
            event.preventDefault();
            const types: string[] = [];
            let result = {...obj};
            result.id = editableProduct.id;
            let error = false;
            const massive: HTMLInputElement[] = []
            for (let i = 0; i < form.elements.length; i++) {
                let item = form.elements.item(i);
                if (item && item?.tagName !== 'BUTTON') {
                    massive.push(item as HTMLInputElement);
                }
            }
            massive.map(item => {
                const id: objKeys = item.id as objKeys;
                if (item.value.length !== 0) {
                    if (id.includes('type-')) {
                        if (item.value !== '') types.push(item.value);
                        result.types = types;
                    } else if (id === 'price' || id === 'id' || id === 'barCode') {
                        result[id] = +item.value;
                    } else {
                        result[id] = item.value as string & string[] & TypeSize;
                    }
                } else {
                    error = true;
                    item.classList.add(styles.error);
                }
            })
            if (!error) {
                form.reset();
                if (isAction === 'edit') setEditableProduct(obj);
                if (isAction === 'editTypes') {
                    dispatch(actionCreator(types));
                } else {
                    dispatch(actionCreator(result));
                }
                setIsAction('none');
            }
        }

        const choiceActionCreator = useCallback((type: actionForm): any => {
                switch (type) {
                    case 'edit':
                        return editProductAction;
                    case 'add':
                        return addMainProductAction;
                    case 'editTypes':
                        return setTypesProductAction;
                    default:
                        return addMainProductAction
                }
            },
            [])
        const toggleAddFormAddHandler = () => {
            setIsAction(prevState => prevState === 'add' ? 'none' : 'add');
        };

        const editProductHandler = (product: ICatalogProduct) => {
            setIsAction('edit');
            setEditableProduct(product);
        };

        const removeProductHandler = (product: ICatalogProduct) => {
            dispatch(deleteProductAction(product))
        };

        const toggleAddTypesFormHandler = () => {
            setIsAction(prevState => prevState === 'editTypes' ? 'none' : 'editTypes');
        };

        return (
            <div className={styles.admin}>
                <h1 className={styles.title}>Админка</h1>

                {isAction !== "add" && isAction !== 'edit' && isAction !== 'editTypes' ?
                    products.length === 0 ?
                        <h2 className={styles.subtitle}>Товаров нет</h2>
                        :
                        <ul className={styles.list}>
                            {products.map(item => <AdminProduct key={item.id}
                                                                onRemove={() => removeProductHandler(item)}
                                                                onEdit={() => editProductHandler(item)}
                                                                product={item}/>)}
                        </ul>
                    :
                    <></>
                }
                {isAction !== 'editTypes' && isAction !== 'add' ?
                    <>
                        {types.length === 0 ? <>
                            <h2 className={styles.title}>Типов нет</h2>
                        </> : <>
                            <h2 className={styles.title}>Типы</h2>
                            <ul className={styles.list}>{types.map(type => <li className={styles.type}
                                                                               key={type}>{type}</li>)}</ul>
                        </>}
                    </> :
                    <></>
                }
                {isAction === 'add' ?
                    <form className={styles.form}
                          onSubmit={(e) => sendValueHandler(e, e.target as HTMLFormElement, choiceActionCreator(isAction))}>
                        {createFields(false)}
                        <Button
                            class={styles.btn}
                            type={'submit'}
                            isRounded={false}
                            title={'Добавить товар'}
                        />
                    </form>
                    : <></>}
                {isAction === 'edit' ?
                    <form className={styles.form}
                          onSubmit={(e) => sendValueHandler(e, e.target as HTMLFormElement, choiceActionCreator(isAction))}>
                        {createFields(false, editableProduct)}
                        <Button
                            type={'submit'}
                            isRounded={false}
                            title={'Изменить товар'}
                        />
                        <Button
                            type={'button'}
                            isRounded={false}
                            onClick={() => {
                                setEditableProduct(obj);
                                setIsAction('none')
                            }}
                            title={'Отменить изменения'}
                        />
                    </form>
                    : <></>}
                {isAction === 'editTypes' ?
                    <form className={styles.form}
                          onSubmit={(e) => sendValueHandler(e, e.target as HTMLFormElement, choiceActionCreator(isAction))}>
                        {createFields(true, types)}
                        <Button
                            type={'submit'}
                            isRounded={false}
                            title={'Изменить типы'}
                        />
                        <Button
                            type={'button'}
                            isRounded={false}
                            onClick={() => {
                                setIsAction('none')
                            }}
                            title={'Отменить изменения'}
                        />
                    </form>
                    : <></>}
                <div className={styles.btns}>
                    <Button isRounded={false}
                            title={`${isAction === 'add' ? "Скрыть форму добавления" : 'Показать форму добавления продукта'}`}
                            onClick={toggleAddFormAddHandler}/>
                    <Button isRounded={false}
                            title={`${isAction === 'editTypes' ? "Скрыть форму добавления типов" : 'Показать форму добавления типов'}`}
                            onClick={toggleAddTypesFormHandler}/></div>
            </div>
        );
    }
;
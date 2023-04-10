import * as reduxHooks from "react-redux";
import {fireEvent, render as rtlRender, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {Sort} from "../../components/Sort/Sort";
import {SortSlice} from "../../store/reducers/Filters/Sort/SortSlice";
import {DECREASE_OPTION, INCREASE_OPTION, NAME_OPTION, PRICE_OPTION} from "../../components/Sort/constants";
import {ICatalogProduct} from "../../models/ICatalogProduct";
import {CatalogContent, sortingMassiveByField} from "../../components/Catalog/CatalogContent/CatalogContent";

jest.mock('react-redux');
const jestUseSelector = jest.spyOn(reduxHooks, 'useSelector');
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const render = (component: JSX.Element) => rtlRender(<BrowserRouter>
    {component}
</BrowserRouter>);

describe('Sort setting test', () => {
    let products: ICatalogProduct[] = [];
    beforeEach(() => {
        products = [
            {
                "id": 1214,
                "name": "Мыло жидкое биоразлагаемое для мытья рук и тела SYNERGETIC",
                "productImageUrl": "https://mila.by/images/cache/_thumb_500x500xin_upload_iblock_1c3_4623722341310.webp",
                "price": 8.39,
                "size": "500 мл",
                "typeSize": "volume",
                "types": [
                    "Гигиена",
                    "Уход за руками"
                ],
                "barCode": 4623722341310,
                "manufacturer": "Синергетик",
                "brand": "SYNERGETIC",
                "description": "замечательное средство для мытья рук с натуральным составом, ароматом и привлекательным розовым цветом. Уникальная обволакивающая текстура мыла придаст коже чистоту и невероятную нежность. Мыло гипоаллергенное, глубоко увлажняет. Состоит полностью из растительных компонентов."
            },
            {
                "id": 1215,
                "name": "Гель для душа мицеллярный LE PETIT MARSEILLAIS SENSITIVE с Алоэ Вера и Цветком Апельсинового дерева",
                "productImageUrl": "https://mila.by/images/cache/_thumb_500x500xin_upload_iblock_af6_3574661575629.webp",
                "price": 10.17,
                "size": "400 мл",
                "typeSize": "volume",
                "types": [
                    "Гель для душа",
                    "Уход за телом"
                ],
                "barCode": 3574661575629,
                "manufacturer": "Johnson & Johnson S.p.A",
                "brand": "Le Petit Marseillais",
                "description": "Бережно очищает и эффективно удаляет частички пыли, и других загрязнений на коже. Увлажняет и успокаивает даже самую чувствительную и сухую кожу. Оставляет на теле после мытья мягкий, цветочный аромат и восхитительное ощущение чистоты, и комфорта."
            },
        ];
    })
    it('should be set filter', function () {
        const dispatch = jest.fn();
        mockedDispatch.mockReturnValue(dispatch);
        const mockedSetOption = jest.spyOn(SortSlice.actions, 'setOption')
        render(<Sort/>);
        const select = screen.getByRole('combobox');

        fireEvent.change(select);
        expect(dispatch).toHaveBeenCalled();
        expect(mockedSetOption).toHaveBeenCalledWith({sort: PRICE_OPTION});

        fireEvent.change(select, {target: {value: DECREASE_OPTION}});
        expect(dispatch).toHaveBeenCalled();
        expect(mockedSetOption).toHaveBeenCalledWith({sort: DECREASE_OPTION});
    });
    it('should function return sorting massive by field', function () {
        let massive = products;
        let sortedMassive = sortingMassiveByField(products, DECREASE_OPTION, true);
        expect(sortedMassive).toEqual(massive);
        sortedMassive = sortingMassiveByField(products, NAME_OPTION);
        expect(sortedMassive).toEqual(massive.reverse());
        sortedMassive = sortingMassiveByField(products, PRICE_OPTION);
        expect(sortedMassive).toEqual(massive.reverse());
        sortedMassive = sortingMassiveByField(products, INCREASE_OPTION);
        expect(sortedMassive).toEqual(massive);

    })
    it('should render products sorted by decrease price', function () {
        const sortedProducts: ICatalogProduct[] = [
            {
                "id": 1215,
                "name": "Гель для душа мицеллярный LE PETIT MARSEILLAIS SENSITIVE с Алоэ Вера и Цветком Апельсинового дерева",
                "productImageUrl": "https://mila.by/images/cache/_thumb_500x500xin_upload_iblock_af6_3574661575629.webp",
                "price": 10.17,
                "size": "400 мл",
                "typeSize": "volume",
                "types": [
                    "Гель для душа",
                    "Уход за телом"
                ],
                "barCode": 3574661575629,
                "manufacturer": "Johnson & Johnson S.p.A",
                "brand": "Le Petit Marseillais",
                "description": "Бережно очищает и эффективно удаляет частички пыли, и других загрязнений на коже. Увлажняет и успокаивает даже самую чувствительную и сухую кожу. Оставляет на теле после мытья мягкий, цветочный аромат и восхитительное ощущение чистоты, и комфорта."
            },
            {
                "id": 1214,
                "name": "Мыло жидкое биоразлагаемое для мытья рук и тела SYNERGETIC",
                "productImageUrl": "https://mila.by/images/cache/_thumb_500x500xin_upload_iblock_1c3_4623722341310.webp",
                "price": 8.39,
                "size": "500 мл",
                "typeSize": "volume",
                "types": [
                    "Гигиена",
                    "Уход за руками"
                ],
                "barCode": 4623722341310,
                "manufacturer": "Синергетик",
                "brand": "SYNERGETIC",
                "description": "замечательное средство для мытья рук с натуральным составом, ароматом и привлекательным розовым цветом. Уникальная обволакивающая текстура мыла придаст коже чистоту и невероятную нежность. Мыло гипоаллергенное, глубоко увлажняет. Состоит полностью из растительных компонентов."
            },
        ];
        const dispatch = jest.fn();
        mockedDispatch.mockReturnValue(dispatch);
        let initialState = {
            productReducer: {products: products},
            typesProductReducer: {typesProduct: [], selectedTypesProduct: []},
            filterReducer: {manufacturers: [], counter: {min: 0, max: 0}},
            sortReducer: {sort: DECREASE_OPTION}
        };
        jestUseSelector.mockReturnValue(initialState);
        render(
            <CatalogContent products={products} hasError={false} hasLoading={false}/>
        );
        let listProducts = screen.getAllByTestId('catalog-item');
        listProducts.forEach((item, index) => {
            const isCorrect = item.textContent?.search(sortedProducts[index].name);
            expect(isCorrect).not.toBe(-1);
        })
    });
})


export default {};
import * as reduxHooks from "react-redux";
import {fireEvent, render as rtlRender, screen} from "@testing-library/react";
import React from "react";
import {TrashItemType, TrashSection} from "../components/TrashSection/TrashSection";
import {BrowserRouter} from "react-router-dom";
import {TrashProduct} from "../store/reducers/Trash/TrashTypes";
import * as productsHook from "../services/ProductService";
import {ICatalogProduct} from "../models/ICatalogProduct";
import {TrashSlice} from "../store/reducers/Trash/TrashSlice";
import {expect} from "@jest/globals";

jest.mock('react-redux');
jest.mock('../services/ProductService');
const jestUseSelector = jest.spyOn(reduxHooks, 'useSelector');
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mockedProductService = jest.spyOn(productsHook, 'useProductService');
const render = (component: JSX.Element) => rtlRender(
    <BrowserRouter>
        {component}
    </BrowserRouter>);
describe("Trash", () => {
    let initialState: { count: number, totalPrice: string, products: TrashProduct[] };
    const products: ICatalogProduct[] = [{
        "id": 1215,
        "name": "Гель для душа мицеллярный LE PETIT MARSEILLAIS SENSITIVE с Алоэ Вера и Цветком Апельсинового дерева",
        "productImageUrl": "https://mila.by/images/cache/_thumb_500x500xin_upload_iblock_af6_3574661575629.webp",
        "price": 120,
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
    }, {
        "id": 1217,
        "name": "Гель для душа мицеллярный LE PETIT MARSEILLAIS SENSITIVE с Алоэ Вера и Цветком Апельсинового дерева",
        "productImageUrl": "https://mila.by/images/cache/_thumb_500x500xin_upload_iblock_af6_3574661575629.webp",
        "price": 57,
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
    }];
    beforeEach(() => {
        initialState = {
            count: 0,
            totalPrice: '0',
            products: [],
        };
        mockedProductService.mockReturnValue({
            getProductsByIds: async function (ids: number[]) {
                return products;
            },
            getAllProducts: async function () {
                return products;
            },
            getProductById: async function () {
                return products[0];
            },
            clearError: () => false,
            hasError: false,
            hasLoading: false
        })
    })
    it('should be correct display empty', async function () {
        jestUseSelector.mockReturnValue(initialState);
        render(<TrashSection/>);
        expect(screen.getByRole('heading').classList.contains('title_empty')).toBe(true);
    });
    it('should be correct display total price', async function () {
        initialState.totalPrice = '120';
        initialState.products = [{product: 1215, count: 1}];
        jestUseSelector.mockReturnValue(initialState);
        render(<TrashSection/>);
        const totalPrice = screen.getByTestId('total-trash');
        expect(totalPrice.textContent).toContain('120');
    });
    it('should display items', function () {
        initialState.totalPrice = '177';
        const trashProducts: TrashItemType[] = [...products.map(product => ({product, count: 1, state: true}))]
        initialState.products = [{product: 1215, count: 1}, {product: 1217, count: 1}];
        jestUseSelector.mockReturnValue(initialState);
        render(<TrashSection initialState={trashProducts}/>);
        expect(screen.getAllByRole('listitem')).toHaveLength(2);
    });
    it('should dispatch resetTrashProducts', function () {
        const dispatch = jest.fn();
        mockedDispatch.mockReturnValue(dispatch);
        initialState.products = [{product: 1215, count: 1}, {product: 1217, count: 1}];
        jestUseSelector.mockReturnValue(initialState);
        render(<TrashSection/>);
        const button = screen.getByText('Оформить заказ');
        fireEvent.click(button);
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith({type: TrashSlice.actions.resetProducts.type});
    });

})
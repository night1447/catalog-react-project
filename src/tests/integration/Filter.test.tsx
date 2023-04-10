import {filterStateType} from "../../store/reducers/Filters/Filter/FilterType";
import * as reduxHooks from "react-redux";
import {fireEvent, render as rtlRender, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {TypesProduct} from "../../components/TypesProduct/TypesProduct";
import {typesProductSlice} from "../../store/reducers/Filters/TypesProduct/typesProductSlice";
import {FilterSlice} from "../../store/reducers/Filters/Filter/FilterSlice";
import Filter from "../../components/Filter/Filter";
import {ICatalogProduct} from "../../models/ICatalogProduct";

jest.mock('react-redux');
const jestUseSelector = jest.spyOn(reduxHooks, 'useSelector');
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const render = (component: JSX.Element) => rtlRender(<BrowserRouter>
    {component}
</BrowserRouter>);

describe('Filter types product test', () => {
    let types: string[];
    beforeEach(() => {
        types = [
            'Уход за телом',
        ]
    })
    it('should be display correct types', function () {
        jestUseSelector.mockReturnValue({typesProduct: types, selectedTypesProduct: types});
        render(<TypesProduct/>);
        expect(screen.getAllByRole('listitem')).toHaveLength(1);
    });
    it("should be add type", function () {
        const dispatch = jest.fn();
        mockedDispatch.mockReturnValue(dispatch);
        const mockedAddType = jest.spyOn(typesProductSlice.actions, 'addTypeProduct');

        jestUseSelector.mockReturnValue({typesProduct: types, selectedTypesProduct: []});
        render(<TypesProduct/>);
        fireEvent.click(screen.getByRole('button'))
        expect(dispatch).toHaveBeenCalled()
        expect(mockedAddType).toHaveBeenCalledWith(types[0]);
    });
    it("should be remove type", function () {
        const dispatch = jest.fn();
        mockedDispatch.mockReturnValue(dispatch);
        const mockedRemoveType = jest.spyOn(typesProductSlice.actions, 'removeTypeProduct');

        jestUseSelector.mockReturnValue({typesProduct: types, selectedTypesProduct: types});
        render(<TypesProduct/>);
        fireEvent.click(screen.getByRole('button'))
        expect(dispatch).toHaveBeenCalled()
        expect(mockedRemoveType).toHaveBeenCalledWith(types[0]);
    });
})


describe('Filter setting test', () => {
    let settings: filterStateType;
    let products: ICatalogProduct[];
    beforeEach(() => {
        settings = {
            counter: {
                min: 5,
                max: 120,
            },
            manufacturers: ['Apple', 'Xiaomi'],
        }
        products = [
            {
                "id": 1217,
                "name": "Гель для стирки УШАСТЫЙ НЯНЬ для детского белья",
                "productImageUrl": "https://mila.by/images/cache/_thumb_500x500xin_upload_iblock_668_4820026412955.webp",
                "price": 20.71,
                "size": "1.2 л",
                "typeSize": "volume",
                "types": [
                    "Стрика и уборка",
                    "Гель для стирки"
                ],
                "barCode": 4600697020402,
                "manufacturer": "НЕВСКАЯ КОСМЕТИКА",
                "brand": "Ушастый нянь",
                "description": "Эффективно удаляет сложные пятна и запахи, придает белью мягкость и свежесть. Бережно относится к тканям, сохраняя их первоначальный вид. Придает белью мягкость, свежесть и яркость красок. Обладает антибактериальным эффектом. Подходит для стирки одежды детей любого возраста."
            },
            {
                "id": 1218,
                "name": "Гель для душа мужской EXXE UFC Тонизирующий 2 в 1 с ментолом",
                "productImageUrl": "https://mila.by/images/cache/_thumb_500x500xin_upload_iblock_6aa_4620739978614.webp",
                "price": 6.70,
                "size": "400 мл",
                "typeSize": "volume",
                "types": [
                    "Уход за телом",
                    "Гель для душа"
                ],
                "barCode": 4620739978614,
                "manufacturer": "ОРБИТА СП",
                "brand": "EXXE",
                "description": "Гель для душа мужской, который бережно очищает тело."
            },];
    })
    it('should be dispatch settings onClick', function () {
        const dispatch = jest.fn();
        mockedDispatch.mockReturnValue(dispatch);
        jestUseSelector.mockReturnValue(['test']);
        const mockedSetManufacturer = jest.spyOn(FilterSlice.actions, 'setManufacturer');
        const mockedSetMinValue = jest.spyOn(FilterSlice.actions, 'setMinValueCounter');
        const mockedSetMaxValue = jest.spyOn(FilterSlice.actions, 'setMaxValueCounter');
        const mockedAddTypeProduct = jest.spyOn(typesProductSlice.actions, 'addTypeProduct');
        render(<Filter products={products}/>)
        const submitButton = screen.getByText('Показать');
        fireEvent.click(submitButton);
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(mockedSetManufacturer).toHaveBeenCalledWith(['test'])
        expect(mockedSetMinValue).toHaveBeenCalledWith(6.7)
        expect(mockedSetMaxValue).toHaveBeenCalledWith(20.71)
    })
    ;
})


export default {};
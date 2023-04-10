import {ICatalogProduct} from "../../models/ICatalogProduct";
import {CatalogList} from "../../components/Catalog/CatalogList/CatalogList";
import {render as rtlRender, screen} from "@testing-library/react";
import * as reduxHooks from 'react-redux'
import {BrowserRouter} from "react-router-dom";
import React from "react";

const render = (component: JSX.Element) => rtlRender(<BrowserRouter>
    {component}
</BrowserRouter>);

jest.mock('react-redux');
const jestUseSelector = jest.spyOn(reduxHooks, 'useSelector');
describe('Products list Slice:', () => {
    let products: ICatalogProduct[];
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
            {
                "id": 1216,
                "name": "Гель-концентрат для стирки GRASS Alpi White для белых вещей",
                "productImageUrl": "https://mila.by/images/cache/_thumb_500x500xin_upload_iblock_69c_4670113605216.webp",
                "price": 26.99,
                "size": "1.8 л",
                "typeSize": "volume",
                "types": [
                    "Стрика и уборка",
                    "Гель для стирки"
                ],
                "barCode": 4670113605216,
                "manufacturer": "ТД ГраСС",
                "brand": "GRASS",
                "description": "Концентрированное жидкое средство для стирки белых и светлых тканей эффективно отстирывает даже самые сильные загрязнения, защищает ткань от появления серого оттенка, придает вещам ослепительную белизну, не повреждает структуру даже после многократных стирок. Легко выполаскивается из волокон ткани, придает вещам мягкость и облегчает глажение."
            },
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
            },]
    })

    it("should render the products with the given start and end indexes", () => {
        const start = 0;
        const end = 3;
        jestUseSelector.mockReturnValue(products);
        render(
            <CatalogList products={products} start={start} end={end}/>
        );
        expect(screen.getAllByRole("list")).toHaveLength(products.length - 1);
    });
    it("should render products in a row if layout is set to 'row'", () => {
        const start = 0;
        const end = 1;
        jestUseSelector.mockReturnValue('row');
        render(<CatalogList products={products} start={start} end={end}/>);
        const list = screen.getAllByRole("list");
        const index = list.findIndex(item => item.className.includes('list_row'));
        expect(index).not.toBe(-1);
    });

})


export default {};
import {ICatalogProduct} from "../../models/ICatalogProduct";
import {TrashSlice} from "../../store/reducers/Trash/TrashSlice";
import trashReducer from "../../store/reducers/Trash/TrashReducer";

describe('Trash Slice:', () => {
    let products: ICatalogProduct[];
    beforeEach(() => {
        products = [
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
            },
        ]
    })
    it('should add new Product', function () {
        const action = {type: TrashSlice.actions.addProduct, payload: products[0]};
        const result = trashReducer({products: [], totalPrice: '0', count: 0}, action);
        expect(result.products[0].product).toBe(1215);
    });
    it('should delete product', function () {
        const action = {type: TrashSlice.actions.removeProduct, payload: {product: products[0], count: 1,}};
        const result = trashReducer({
            products: [{product: 1215, count: 1}, {product: 1217, count: 1}],
            totalPrice: '16.87',
            count: 2
        }, action);
        expect(result.products).toEqual([{product: 1217, count: 1}]);
    });
    it('should be added to existing product', function () {
        const action = {type: TrashSlice.actions.addProduct, payload: products[0]};
        const result = trashReducer({
            products: [{product: 1215, count: 1}, {product: 1217, count: 1}],
            totalPrice: '16.87',
            count: 2
        }, action);

        expect(result.products[0].count).toBe(2);
    });
    it('should be added some values to existing product', function () {
        const action = {type: TrashSlice.actions.addProducts, payload: {product: products[0], count: 10}};
        const result = trashReducer({
            products: [{product: 1215, count: 1}, {product: 1217, count: 1}],
            totalPrice: '16.87',
            count: 2
        }, action);

        expect(result.products[0].count).toBe(11);
    });
});
import {typesProductSlice} from "../../store/reducers/Filters/TypesProduct/typesProductSlice";
import typesProductReducers from "../../store/reducers/Filters/TypesProduct/typesProductReducers";
import {filterStateType} from "../../store/reducers/Filters/Filter/FilterType";
import {FilterSlice} from "../../store/reducers/Filters/Filter/FilterSlice";
import filterReducer from "../../store/reducers/Filters/Filter/FilterReducer";


describe('Filter types product test', () => {
    let types: string[];
    beforeEach(() => {
        types = [
            'Уход за телом',
            'Уход за головой'
        ]
    })
    it('should replace old types', function () {
        const action = {type: typesProductSlice.actions.setAllTypesProduct, payload: [...types]}
        const result = typesProductReducers({typesProduct: [], selectedTypesProduct: []}, action);
        expect(result.typesProduct).toEqual(types);
    });
    it('should add new type', function () {
        const action = {type: typesProductSlice.actions.addTypeProduct, payload: types[0]}
        const result = typesProductReducers({typesProduct: [], selectedTypesProduct: []}, action);
        expect(result.selectedTypesProduct[0]).toEqual(types[0]);
    });
    it('should be reset types', function () {
        const action = {type: typesProductSlice.actions.resetTypesProducts}
        const result = typesProductReducers({typesProduct: types, selectedTypesProduct: types}, action);
        expect(result.selectedTypesProduct).toEqual([]);
    });

})
describe('Filter setting test', () => {
    let settings: filterStateType;
    beforeEach(() => {
        settings = {
            counter: {
                min: 5,
                max: 120,
            },
            manufacturers: ['Apple', 'Xiaomi'],
        }
    })
    it('should be reset Filters', function () {
        const action = {type: FilterSlice.actions.resetFilters}
        const result = filterReducer(settings, action);
        expect(result.manufacturers).toEqual([]);
        expect(result.counter.max).toBe(0);
        expect(result.counter.min).toBe(0);
    });
})


export default {};
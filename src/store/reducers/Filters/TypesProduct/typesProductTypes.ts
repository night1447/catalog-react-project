export interface IProduct {
    id: number,
    value: string
}

export interface IState {
    selectedTypesProduct: IProduct[],
    typesProduct: string[],
}
export type TypeSize = 'weight' | 'volume' | '';

export interface ICatalogProduct {
    id: number,
    name: string,
    productImageUrl: string,
    price: number,
    size: string,
    typeSize: TypeSize,
    types: string[],
    barCode: number,
    manufacturer: string,
    brand: string,
    description: string,
}

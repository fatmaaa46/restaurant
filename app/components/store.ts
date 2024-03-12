import { proxy } from "valtio";


type StoreType = {
    id: number;
    selectedCategorie: any
};

const defaultStateStore = {
    id: 0,
    selectedCategorie: ''

};

const initialStateStore = defaultStateStore;

const store = proxy<StoreType>(initialStateStore);


export function setId(id: number): void {
    store.id = id;
}
export function setSelectedCategorie(selectedCategorie: any): void {
    store.selectedCategorie = selectedCategorie;
}
export default store


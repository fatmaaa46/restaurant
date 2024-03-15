import { proxy } from "valtio";


type StoreType = {
    id: number;
    selectedCategorie: any;
    selectedImage: any
    Mode: {
        type: string;
        Heur: string;
    };
    Panier: any;
};

const defaultStateStore = {
    id: 0,
    selectedCategorie: '',
    selectedImage: "" ,
    Mode: {
        type: "Liv/Empo",
        Heur: "12h:30"
    },
    Panier: "" ,

};

const initialStateStore = defaultStateStore;

const store = proxy<StoreType>(initialStateStore);


export function setId(id: number): void {
    store.id = id;
}
export function setSelectedCategorie(selectedCategorie: any): void {

    store.selectedCategorie = selectedCategorie;
}
export function setSelectedImage(selectedImage: any): void {

    store.selectedImage = selectedImage;
}
export function setMode(): void {

    store.Mode = defaultStateStore.Mode;
}
export function setPanier(): void {

    store.Mode = defaultStateStore.Mode;
}
export default store


declare namespace PokemonInterface {

    export interface Phone {
        number: number | string;
    }

    export interface Pokemon {
        name: string;
        url: string;
    }

    export interface ApiResponse {
        count: number;
        next: string;
        previous: string;
        results: Pokemon[];
    }
}
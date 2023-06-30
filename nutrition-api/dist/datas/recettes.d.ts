export = recettes;
declare const recettes: {
    title: string;
    UserId: number;
    instructions: {
        instruction1: {
            order: number;
            produits: {
                quantite: number;
                ingredients: number;
            }[];
            description: string;
        };
        instruction2: {
            order: number;
            produits: {
                quantite: number;
                ingredients: number;
            }[];
            description: string;
        };
        instruction3: {
            order: number;
            produits: {
                quantite: number;
                ingredients: number;
            }[];
            description: string;
        };
        instruction4: {
            order: number;
            produits: {
                quantite: number;
                ingredients: number;
            }[];
            description: string;
        };
    };
}[];

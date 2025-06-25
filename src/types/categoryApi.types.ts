export interface CategoryItemInter {
            id:string,
            name:string,
            code:number,
            level:number,
            child:null | CategoryItemInter,
}

export type CategoryListInter = CategoryItemInter[]
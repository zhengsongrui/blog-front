export interface CategoryItemInter {
            id:number,
            name:string,
            level:number,
            // child:null | CategoryItemInter,
}

export type CategoryListInter = CategoryItemInter[]
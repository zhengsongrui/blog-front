export interface CategoryItemInter {
  id: number;
  name: string;
  level: number;
  sort:number;
  username: string;
  // child:null | CategoryItemInter,
}

export type CategoryListInter = CategoryItemInter[];

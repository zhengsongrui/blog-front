export interface SingleArticleInter {
    id:number, 
    title: string,
    description: string,
    createtime: string,
    categoryName: string,
    readCount: number,
    content:string
}

export type ArticleListInter = SingleArticleInter[]

export interface GetArticleParamsInter {
    id?:number, 
    name?: string,
    pagenum?:number
}


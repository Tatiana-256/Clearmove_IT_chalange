export type dataType = {
    name: string
    id: number
}


export const data: Array<dataType> = [
    {name: "find", id: 1},
    {name: "connection", id: 2},
    {name: "cursor", id: 3},
    {name: "database Instance", id: 4},
    {name: "deterministic", id: 5},
    {name: "application", id: 6},
    {name: "compile", id: 7},
    {name: "siblings", id: 8},
    {name: "syntax extension", id: 9},
    {name: "parent element", id: 10},
    {name: "open source library", id: 11},

]
export const dataApi = {

   async getData(searchString: string): Promise<Array<dataType>> {
       return new Promise((res, rej) => {
           if(searchString) {
               setTimeout(() => {
               let result = data.filter((word:dataType) => word.name.indexOf(searchString) > -1)
               res(result)
               }, 1500)
           } else res([])

       })
    }
}

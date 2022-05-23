const productos = [
    {
        id: "1",
        name: "nike Air",
        precio: "$1858"
    },
    {
        id: "2",
        name: "Adidas Stabil",
        precio: "$1245"
    }
]

export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    })
}
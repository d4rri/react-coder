const products = [
    { 
        id: '1', 
        name: 'Curso auto-maquillaje', 
        price: 8000, 
        category: 'curso', 
        img:'https://centralmakeup.mx/wp-content/uploads/2020/04/maquillaje-de-noche.jpg', 
        stock: 10, 
        description:'Descripcion del curso'
    },
    { id: '2', name: 'Curso de pieles', price: 6000, category: 'curso', img:'https://i0.wp.com/maquillajetonos.com/wp-content/uploads/2020/09/hdcutcreasemakeuptonos1-1.jpg?resize=595%2C595&ssl=1', stock: 10, description:'Descripcion del curso'},
    { id: '4', name: 'Curso de delineados', price: 5000, category: 'curso', img:'https://www.diariodesevilla.es/2021/06/29/wappissima/actualidad/tendencias-maquillaje-verano-podemos-deseando_1587752074_140678920_667x375.png', stock: 10, description:'Descripcion del curso'},
    { id: '5', name: 'Curso pieles glow', price: 4000, category: 'curso', img:'https://www.maybelline-ma.com/~/media/mny/latam/panama/consejos-de-maquillaje/maquillaje-ahumado.jpg?h=735&w=735&la=es-PA&hash=E539CAB0868C2B66187B758E27A7E4751730F714', stock: 10, description:'Descripcion del curso'},
    { id: '6', name: 'Curso maquillaje profesional', price: 10000, category: 'curso', img:'https://cdn2.actitudfem.com/media/files/images/2020/11/que-es-el-maquillaje-euphoria1.jpg', stock: 10, description:'Descripcion del curso'},
]

export const getProductsDeAlfredo = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}
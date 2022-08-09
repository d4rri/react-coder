const products = [
    { id: '1', name: 'Curso auto-maquillaje', price: 8000, category: 'curso amateur', img:'https://centralmakeup.mx/wp-content/uploads/2020/04/maquillaje-de-noche.jpg', stock: 10, description:'En este curso aprenderás lo necesario para arrancar con tu carrera de maquilladora'},                                                         
    { id: '2', name: 'Curso de pieles', price: 6000, category: 'curso amateur', img:'https://i0.wp.com/maquillajetonos.com/wp-content/uploads/2020/09/hdcutcreasemakeuptonos1-1.jpg?resize=595%2C595&ssl=1', stock: 10, description:'En este curso aprenderás lo necesario para arrancar con tu carrera de maquilladora'},
    { id: '3', name: 'Curso de ojos', price: 4000, category: 'curso inicial', img:'https://1.bp.blogspot.com/-wFt7_FFgEEM/X9p_hMTAnkI/AAAAAAAAdyM/-cohdsXMIJ8DQ-4bDbhfXRiYlp4gTaw2wCLcBGAsYHQ/s500/delineado-infinito-tendencia-maquillaje-2021.jpg', stock: 10, description:'En este curso aprenderás lo necesario para dar tus primeros pasos en el mundo del maquillaje'},
    { id: '4', name: 'Curso de delineados', price: 5000, category: 'curso inicial', img:'https://www.diariodesevilla.es/2021/06/29/wappissima/actualidad/tendencias-maquillaje-verano-podemos-deseando_1587752074_140678920_667x375.png', stock: 10, description:'En este curso aprenderás lo necesario para dar tus primeros pasos en el mundo del maquillaje'},
    { id: '5', name: 'Curso pieles glow', price: 4000, category: 'curso profesional', img:'https://www.maybelline-ma.com/~/media/mny/latam/panama/consejos-de-maquillaje/maquillaje-ahumado.jpg?h=735&w=735&la=es-PA&hash=E539CAB0868C2B66187B758E27A7E4751730F714', stock: 10, description:'En este curso aprenderás lo necesario para ser una profesional en el mundo del maquillaje'},
    { id: '6', name: 'Curso maquillaje profesional', price: 10000, category: 'curso profesional', img:'https://cdn2.actitudfem.com/media/files/images/2020/11/que-es-el-maquillaje-euphoria1.jpg', stock: 10, description:'En este curso aprenderás lo necesario para ser una profesional en el mundo del maquillaje'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}
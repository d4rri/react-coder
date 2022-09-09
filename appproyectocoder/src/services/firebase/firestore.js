import {getDocs, getDoc, doc, collection, query, where } from 'firebase/firestore'
import { db } from './index'
import { createAdaptedProductFromFirestore } from '../../adapters/productAdapter'
import { createAdaptedNavbarFromFirestore } from '../../adapters/navbarAdapter'


export const getProducts = (categoryId) => {
        const collectionRef = !categoryId 
            ? collection(db, 'products')
            : query(collection(db, 'products'), where('category', '==', categoryId))

        return getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                return createAdaptedProductFromFirestore(doc)
            })
            return productsAdapted
        }).catch(error => {
            return error
        })
}

export const getProductsId = (productId) => {
    return getDoc(doc(db, 'products', productId)).then(response => {
        const data = response.data()
        const productAdapted = { id: response.id, ...data}
        return productAdapted
    }).catch(error => {
        return error
    })
}

export const getNavbar = (categories) => {

        const collectionCategories = collection(db, 'categories');

        return getDocs(collectionCategories).then((response)=> {
                const categories = response.docs.map((snap) => {
                    return createAdaptedNavbarFromFirestore(snap)
                });
                return categories;
            });
}

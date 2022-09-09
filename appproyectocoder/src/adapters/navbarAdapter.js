export const createAdaptedNavbarFromFirestore = (snap) => {
    const data = snap.data()

    const navbarAdapted = {
        id: snap.id,
        name:data.name,
        path:data.path, 
    }

    return navbarAdapted
}


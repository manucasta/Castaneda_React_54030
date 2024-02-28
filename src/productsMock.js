export let products = [
  {
    id: 1,
    title: "Camiseta Titular",
    img: "https://res.cloudinary.com/dgzuk3rhi/image/upload/v1707242106/PU606527-04-1_kfrmw2.jpg",
    description: "Camiseta titular Independiente Temporada 23/24",
    price: 45000,
    stock: 10,
    category: "futbol",
  },

  {
    id: 2,
    title: "Camiseta Suplente",
    img: "https://res.cloudinary.com/dgzuk3rhi/image/upload/v1707241362/awayShirt.jpg",
    description: "Camiseta suplente Independiente Temporada 23/24",
    price: 45000,
    stock: 12,
    category: "futbol",
  },

  {
    id: 3,
    title: "Short Titular",
    img: "https://res.cloudinary.com/dgzuk3rhi/image/upload/v1707242381/PU606528-06-1_d4t7lo.jpg",
    description: "Short titular Independiente Temporada 23/24",
    price: 25000,
    stock: 15,
    category: "futbol",
  },

  {
    id: 4,
    title: "Medias Titular",
    img: "https://res.cloudinary.com/dgzuk3rhi/image/upload/v1707242450/independiente/771583_01_smjsp5.jpg",
    description: "Medias titulares Independiente Temporada 23/24",
    price: 15000,
    stock: 5,
    category: "futbol",
  },

  {
    id: 5,
    title: "Track Jacket",
    img: "https://res.cloudinary.com/dgzuk3rhi/image/upload/v1708017959/independiente/TrackJacket.webp",
    description: "Track Jacket Independiente Temporada 23/24",
    price: 85000,
    stock: 4,
    category: "urbano",
  },

  {
    id: 6,
    title: "CAI Shirt Edition",
    img: "https://res.cloudinary.com/dgzuk3rhi/image/upload/v1708018068/independiente/ab5cbb9d-7c8c-401a-a56a-a52db6c428ae-01863c708d38422d4517031720958490-1024-1024_g3d3cl.webp",
    description: "CAI Shirt Edition Independiente Temporada 23/24",
    price: 30000,
    stock: 9,
    category: "urbano",
  },
];

export const getProducts = () => {
  return new Promise ( (resolve, reject) => {
      if (products. length > 0){
        setTimeout(() => {
          resolve (products);
        }, 2000)
      } else {
        reject ("No hay productos")
      }
  })
}

export const getProduct = (id) => {
  return new Promise ((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find (product => product.id === id);
      setTimeout (() => {
        if (item){
          resolve (item);
        } else {
          reject (`No existe producto con id ${id}`)
        }
      },2000)
    }
  })
}
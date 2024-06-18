export async function load() {
    const res = await fetch('http://localhost:3000/products')
    const products  = await res.json()

    // console.log(`Fetching trains from server ${trains.length}  train(s)`)
    return {
        sum: products.map((product) => ({
            id: product.id,
            slug: product.slug,
            title: product.title,
            description: product.description,
            price: product.price,
            image: product.image
        }))
    }
}


export const actions = {

    create: async ({cookies, request}) => {
        const data = await request.formData()

        const post = {
            slug: data.get('slug'),
            title: data.get('title'),
            description: data.get('description'),
            price: data.get('price'),
            image: data.get('image')
        }

        const res = await fetch('http://localhost:3000/carts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(post)
        })


        console.log(`booking successfully ${res.status}`)
    
    },
    createlike: async ({cookies, request}) => {
        const data = await request.formData()

        const post = {
            slug: data.get('slug'),
            title: data.get('title'),
            description: data.get('description'),
            price: data.get('price'),
            image: data.get('image')
        }

        const res = await fetch('http://localhost:3000/likes', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(post)
        })


    
    }
    
}
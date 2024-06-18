import { error } from "@sveltejs/kit";
 export async function load({ params})  {
    const res  = await fetch(`http://localhost:3000/products?title=${params.title}`)
    const products = await res.json()
    const product = products[0]

    if (!product) throw error(404)

    return {
        product
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
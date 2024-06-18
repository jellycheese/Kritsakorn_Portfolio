export async function load({ url }) {
    const searchQuery = url.searchParams.get('search') || '';
    const res = await fetch(`http://localhost:3000/products`);
    const products = await res.json();
 
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
 
    return {
        products: filteredProducts
    };
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
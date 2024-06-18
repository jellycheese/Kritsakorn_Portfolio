export async function load() {
    const res = await fetch('http://localhost:3000/carts')
    const carts  = await res.json()

    // console.log(`Fetching trains from server ${trains.length}  train(s)`)
    return {
        sam: carts.map((cart) => ({
            id: cart.id,
            slug: cart.slug,
            title: cart.title,
            description: cart.description,
            price: cart.price,
            image: cart.image
        }))
    }
}

export const actions = {
    delete: async ({cookies, request}) => {
    const data = await request.formData()
    const postID = data.get('id')
    
    console.log(`Deleting post id = ${postID}`)
    const res = await fetch(`http://localhost:3000/carts/${data.get('id')}`, {
        method: 'DELETE',
    })
    console.log(`Delete post id=${postID} got status ${res.status}`)
    }
}
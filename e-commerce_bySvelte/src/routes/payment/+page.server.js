export async function load() {
    const res = await fetch('http://localhost:3000/carts')
    const pays  = await res.json()

    // console.log(`Fetching trains from server ${trains.length}  train(s)`)
    return {
        sum: pays.map((pay) => ({
            id: pay.id,
            slug: pay.slug,
            title: pay.title,
            description: pay.description,
            price: pay.price,
            image: pay.image
        }))
    }
}

export const actions = {
    delete: async ({cookies, request}) => {
    const data = await request.formData()
    const postID = data.get('id')
    
    console.log(`Deleting post id = ${postID}`)
    const res = await fetch(`http://localhost:3000/carts`, {
        method: 'DELETE',
    })
    console.log(`Delete post id=${postID} got status ${res.status}`)
    }
}
export async function load() {
    const res = await fetch('http://localhost:3000/likes')
    const likes  = await res.json()

    // console.log(`Fetching trains from server ${trains.length}  train(s)`)
    return {
        sim: likes.map((like) => ({
            id: like.id,
            slug: like.slug,
            title: like.title,
            description: like.description,
            price: like.price,
            image: like.image
        }))
    }
}

export const actions = {
    delete: async ({cookies, request}) => {
    const data = await request.formData()
    const postID = data.get('id')
    
    console.log(`Deleting post id = ${postID}`)
    const res = await fetch(`http://localhost:3000/likes/${data.get('id')}`, {
        method: 'DELETE',
    })
    console.log(`Delete post id=${postID} got status ${res.status}`)
    },

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
    
    }
}
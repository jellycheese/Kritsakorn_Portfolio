import { writable } from "svelte/store";

const initiallike ={
    posts:[],
}

function createlike() {
    const {subscribe, set, update} = writable(initiallike)

    return {
        subscribe,
        like: (post) =>
            update((state) => {
                const index = state.posts.findIndex((item) => item.title === post.title)
                if (index !== -1) {
                    state.posts[index].like +=1
                } else {
                    state.posts.push({ ...post })
                }
                return state
            }),
            unlike: (post) =>
            update((state) => {
                const index = state.posts.findIndex((item) => item.title === post.title);
                
                // If post not found, return the current state
                if (index === -1) {
                    return state;
                }
        
                // Check if thumbUp count is already zero
                if (state.posts[index].like === 0) {
                    // If thumbUp count is zero, return the current state without updating thumbDown count
                    return state;
                } else {
                    // Decrease thumbUp count by 1
                    state.posts[index].like -= 1;
        
                    // Increment thumbDown count by 1
                    state.posts[index].unlike += 1;
        
                    return state;
                }
            })
        
    }
}
export const like = createlike();
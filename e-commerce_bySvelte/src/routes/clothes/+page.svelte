<script>
  import { like } from "$lib/store.js";
  export let data;

  function getlike(title) {
    const index = $like.posts.findIndex((post) => post.title === title);

    if (index !== -1) {
      return $like.posts[index].like;
    }

    return 0;
  }

  function getunlike(title) {
    const index = $like.posts.findIndex((post) => post.title === title);

    if (index !== -1) {
      return $like.posts[index].unlike;
    }

    return 0;
  }
</script>

<style>
  .checkout{
      border: 1px solid;
      width: auto;
      margin: 20px;
      background-color: rgb(234, 248, 255);
      padding: 20px;
      border-radius: 7px;
  }
  .round{
      display: flex;
      /* border: 1px solid; */
      flex-wrap: wrap;
      /* margin-top: 10px; */
      width: 100%;
  }
  .filter{
    margin-top: 30px;
    /* border: 1px solid; */
    padding: 10px;
    width: 40%;
    display: flex;
    justify-content: space-around;
  }
  .remove{
        /* border: 1px solid; */
        float: right;
    }
</style>

<div class="content">
    <div style="margin-top:20px;">
        <h1>hidden text</h1>
    </div>
        <div class="filter">
          <button class="button"><a href="/product">All product</a></button>
          <button class="button"><a href="/accessory">Accessory</a></button>
          <button class="button"><a href="/clothes">Clothes</a></button>
          <button class="button"><a href="/books">Books</a></button>          
        </div>
      <div class="round">
          {#each data.sum as { id ,title, slug, description, price, image }}
              <div class="checkout">      
                <form method="POST" action="?/createlike">
                  <div class="remove">
                  <input name="title" type="hidden" bind:value={title}/>
                  <input name="slug" type="hidden" bind:value={slug}/>
                  <input name="description" type="hidden" bind:value={description}/>
                  <input name="price" type="hidden" bind:value={price}/>
                  <input name="price" type="hidden" bind:value={image}/>
                  <button class="button" type="submit">
                      <span class="icon">
                          <i class="fa fa-heart" style="font-size:24px;color:red"></i>
                      </span>
                  </button>
                </div>
              </form>  
                    <h5>{title}</h5>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <span><a href="/product/{title}"><img class="image is-128x128" src={image}></a></span>  
                      <p>{description}</p>
                      <p>{price} Baht</p>
                      <form method= "POST" action= "?/create">
                        <input name="title" type="hidden" bind:value={title}/>
                        <input name="slug" type="hidden" bind:value={slug}/>
                        <input name="description" type="hidden" bind:value={description}/>
                        <input name="price" type="hidden" bind:value={price}/>
                        <input name="image" type="hidden" bind:value={image}/>
                          <input type= "hidden" name= "id" value={id}>
                          <button class="button" type = "submit">
                              add to cart
                              </button>
                      </form>
                  </div>                 
          {/each}
      </div>
</div>




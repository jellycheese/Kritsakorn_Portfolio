<script>
    export let data;

  </script>
  
  <style>
    .checkout{
        border: 1px solid;
        width: auto;
        margin: 20px;
        background-color: rgb(255, 242, 254);
        padding: 20px;
        border-radius: 7px;
    }
    .round{
        display: flex;
        /* border: 1px solid; */
        flex-wrap: wrap;
        margin-top: 50px;
      width: 100%;
    }
    .like{
        margin-top: 100px;
    }
    .like-inside{
        margin: 30px;
    }
    .remove{
        /* border: 1px solid; */
        float: right;
    }
</style>

  <div class="content">
    <div class="like">
        <div class="like-inside">
            <h1><span class="icon">
                <i class="fa fa-heart" style="font-size:48px;color:red"></i>
            </span>Like Product</h1>
        </div>
    </div>
        <div class="round">
            {#each data.sim as { id ,title, slug, description, price, image}}
                <div class="checkout">      
                    <form method= "POST" action= "?/delete">
                        <div class="remove">
                            <input type= "hidden" name= "id" value={id}>
                        <button class = "button" style="border-radius:5px;" type = "submit">
                            <span class="icon-text has-text-danger">
                                <span class="icon">
                                  <i class="fas fa-ban"></i>
                                </span>
                              </span>
                            </button>
                        </div>
                    </form> 
                        <p>title : {title}</p>
                        <img class="image is-128x128" src={image}>
                        <p>description : {description}</p>
                        <p>price : {price} Baht</p>
                        <br>
                        <form method="POST" action= "?/create">
                            <input name="title" type="hidden" bind:value={title}/>
                            <input name="slug" type="hidden" bind:value={slug}/>
                            <input name="description" type="hidden" bind:value={description}/>
                            <input name="price" type="hidden" bind:value={price}/>
                            <input name="image" type="hidden" bind:value={image}/>
                            <button class = "button" type = "submit">
                                Add to cart
                                </button>
                        </form>
                    </div>                  
            {/each}
        </div>
  </div>


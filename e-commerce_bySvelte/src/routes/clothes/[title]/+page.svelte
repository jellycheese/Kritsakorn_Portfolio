<script>
    
    export let data


</script>
<style>
.test{
    /* border: 1px solid; */
    margin-top: 50px;
    padding: 30px;
}
.test2{
    border: 1px solid;
    margin: 50px;
    border-radius: 7px;
    padding: 20px;
    background-color: aliceblue;
}
.mint-freeze{
    /* border: 1px solid; */
    border-radius: 7px;
    padding: 0px;
    margin-top: 10px;
}
</style>
<div class="test">
<div class="test2">
    <div class='content' style="margin-top: 10px;">
        <span><img class="image is-128x128" src={data.product.image}></span>
        <div class="mint-freeze">
            <form method="POST" action="?/createlike">
                <input name="title" type="hidden" bind:value={data.product.title}/>
                <input name="slug" type="hidden" bind:value={data.product.slug}/>
                <input name="description" type="hidden" bind:value={data.product.description}/>
                <input name="price" type="hidden" bind:value={data.product.price}/>
                <input name="price" type="hidden" bind:value={data.product.image}/>
                <button class="button" type="submit">
                    <span class="icon">
                        <i class="fa fa-heart" style="font-size:24px;color:red"></i>
                    </span>
                </button>
                <p>Likes button</p>
            </form>            
        </div>
           <h1>categories : {data.product.slug}</h1>
           <p>title : {data.product.title}</p>
           <p>description : {data.product.description}</p>
           <p>price : {data.product.price} baht</p>
       </div>        
    <form method="POST" action="?/create">
       <div class="book">
       <input name="title" type="hidden" bind:value={data.product.title}/>
       <input name="slug" type="hidden" bind:value={data.product.slug}/>
       <input name="description" type="hidden" bind:value={data.product.description}/>
       <input name="price" type="hidden" bind:value={data.product.price}/>
       <input name="price" type="hidden" bind:value={data.product.image}/>
       <br>               
   <input class="button" type="submit" value="Add to Cart" />                   
</div>
   </form>
</div>
</div>

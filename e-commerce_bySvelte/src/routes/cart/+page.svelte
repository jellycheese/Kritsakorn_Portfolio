<script>
  export let data;

  let totalPrice = data.sam.reduce((sum, item) => sum + Number(item.price), 0);
</script>

<style>
  .checkout{
      border: 1px solid;
      width: auto;
      margin: 20px;
      background-color: rgb(226, 247, 227);
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
  .bot{
    margin-left: 20px;
  }
</style>

<div class="content">
  <h1>cart list</h1>
      <div class="round">
          {#each data.sam as { id ,title, slug, description, price, image}}
              <div class="checkout">       
                      <p>title : {title}</p>
                      <img class="image is-128x128" src={image}>
                      <p>description : {description}</p>
                      <p>price : {price} Baht</p>
                      <form method= "POST" action= "?/delete">
                          <input type= "hidden" name= "id" value={id}>
                          <button class = "button" type = "submit">
                              Remove
                              </button>
                      </form>
                  </div>                  
          {/each}
      </div>
</div>
<div class="bot">
  <h1>Total Price : {totalPrice}</h1>
  <button class="button"><a href="/payment"> Go to payment</a></button>

</div>

<script>
    export let image = "/favicon.png"
    export let title = "pro"
    export let quantity = 0
    export let price = 50
    export let totalprice = 0
 
 $: {
     totalprice = quantity * price
     console.log('Total price' + totalprice)
 }
 function increments() {
         quantity += 1
     }
     function decrement() {
         if (quantity == 0) {
             return
         }
         quantity -= 1
     }
 
 </script>
 
     <img  src="{image}" alt="image" />
 <div>
     <span>{title}</span>
 </div>
     <div class="quan">
     <span>{quantity}</span><br>
     <button on:click={decrement}>-</button>
     <button on:click={increments}>+</button>
 </div>
         <div>
     <span>{price}</span>
 </div>
             <div>
     <span>{totalprice}</span>
 </div>
 
 
 <style>
     .quan{
         text-align: center;
     }
 </style>
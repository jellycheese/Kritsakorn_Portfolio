<script>
	export let image = "/moon.jpg"
	export let title = "Product"
	export let quantity = 0
	export let price = 200
	let totalprice = 0
// reactivity concept by $:
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
<div>
	<span>Product: <br>{title}</span>
</div>

	<img class="image is-128x128" src="{image}" alt="image" />
<div>
	<span>Quantity : {quantity}</span>
    <br>
    <span>Price: {price}</span>
</div>

<button on:click={decrement}>-</button>
<button on:click={increments}>+</button>
<br>
<span>Total : {totalprice}</span>
<br>



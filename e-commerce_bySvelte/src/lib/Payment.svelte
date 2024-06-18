<script>
    export let productName = ""
    export let image = ""
    export let unitPrice = 0
    export let quantity = 0
    export let totalProductPrice = 0

    $: {
		totalProductPrice = quantity * unitPrice
		console.log('Total price' + totalProductPrice)
	}
</script>

<div>
    <span><img class="image is-128x128" src ="{image}" alt="{productName}" width="100"/></span>
    <p>ราคาสินค้ารายชิ้น: {unitPrice} ฿</p>
    <p>จำนวน: {quantity}</p>
    <p>ราคาสินค้ารวม: {totalProductPrice} ฿</p>
</div>
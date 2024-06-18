<!-- payment.svelte -->

<script>
    export let data;
     
    let ship = 50
    let name='';
    let phone= ''
    let address = ''

    // let orderDetails = {
    //     customerName: "Rawiwan",
    //     customerPhone: "(+66)987654321",
    //     deliveryAddress: "123 Street, City, Country",
    //     storeName: "Example Store",
    //     shippingCost: 50,
    //     paymentMethod: "Credit Card"
    // }
    let totalPrice = data.sum.reduce((sum, item) => sum +  Number(item.price), 0);
    let totalpay = totalPrice+ship;

    function addAddress() {
        console.log("Adding Address...");
    }

    function selectPaymentMethod() {
        console.log("Selected Payment Method:");
    }

    function confirmPayment() {
        console.log("Confirming Payment...");
        alert("Payment successful");
    }

    // $: {
    //     //chat gpt
    //     let productsTotal = ProductDetails.reduce((acc, product) => {
    //         return acc + (product.quantity * product.unitPrice);
    //     }, 0);
    //     totalpay = productsTotal + orderDetails.shippingCost;
    // }
</script>
<body>
    
<div class="pay">
    <h1>Payment Detail</h1>
    <div class="inside">

        <div class="row">           
            <div class="field">
                <div class="control">
                    <label>Name</label>
                        <input class="patuti" type="text" bind:value={name} placeholder="Enter Name">
           
                    <label>Phone No.</label>
       
                        <input class="patuti" type="text" bind:value={phone} placeholder="00-00000000">
        
                    <label>Address</label>
         
                        <input class="patuti" type="text" bind:value={address} placeholder="Enter you address">
                </div>
            </div>
            
            <div>
                <p>Name : {name}</p>
                <p>Phone No. : {phone}</p>
                <p>Address : {address}</p>
            </div>
            <br>
            <button class="button" on:click={addAddress}>เพิ่มที่อยู่</button>
        </div>

        <div style="margin-left: 20px;">
            <h2>รายละเอียดสินค้า</h2>

        </div>

        <div class="rows">
            {#each data.sum as { id ,title, slug, description, price, image}}
            <div>
                <h5>{slug}</h5>
                <span><img class="image is-128x128" src ="{image}" alt="{title}" width="100"/></span>
                <p>title: {title} ฿</p>
                <p>ราคาสินค้ารวม: {price} ฿</p>
            </div>
            {/each}
        </div>

        <div class="row">
            <h2>ค่าจัดส่ง</h2>
            <p>{ship} ฿</p>
        </div>

        <div class="row">
            <h2>ยอดชำระทั้งหมด</h2>
            <p>{totalpay} ฿</p>
        </div>
        
    </div>
</div>


<div class="final">
    <div class="select">
        <!-- <h2>ช่องทางชำระเงิน</h2> -->
        <select on:change={selectPaymentMethod}>
            <option disabled selected value="" >เลือกช่องทางการชำระเงิน</option>
            <option value="Credit Card">บัตรเครดิต</option>
            <option value="Bank Transfer">โอนเงินผ่านธนาคาร</option>
            <option value="Cash on Delivery">เก็บเงินปลายทาง</option>
        </select>
        <form method="POST" action="?/delete">
        <div>
            <button type="submit" id="1" on:click={confirmPayment}>ยืนยันการชำระเงิน</button>
        </div>
        </form>
    </div>
    <br>
</div>

<div class="final">
    <button class="button"><a href="/cart">Go Back</a></button>
</div>
</body>

<style>
    body{
        margin-top: 100px;
    }
    .inside{
        border: 1px solid;
        border-color: rgb(155, 255, 238);
        border-radius: 10px;
        width: 100%;
        background-color: rgb(155, 255, 238)

    }
    .pay{
        /* border: 1px solid; */
        margin: 10px;
        font-family: Open Sans, sans-serif;
    }
    .row{
        /* border: 1px solid; */
        border-radius: 10px;
        padding: 10px;
        margin: 5px;
        background-color: aliceblue;

    }
    .rows{
        /* border: 1px solid; */
        border-radius: 10px;
        margin: 10px;
        display: flex;
        justify-content: flex-start;
        background-color: aliceblue;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 20px;

    }
    .final{
        width: 45%;
        padding-left: 20px;
        /* border: solid; */
        margin-left: 20px;
        margin-bottom: 50px;
    }
    .patuti{
        border-radius: 7px;
        background-color: aliceblue;
        height: 30px;
        width: 200px;
    }
    button {
        background-color: #ef233c;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        margin-bottom: 15px;
    }

    button:hover {
        background-color: #d90429;
    }

    button a {
        color: white;
        text-decoration: none;
    }

    button a:hover {
        text-decoration: underline;
    }
    
</style>
<script>
    export let cart = 0
    let myName = "Sorachat"

</script>


<div class="top">
    <div class="dropdown is-active">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span>Product Type</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a href="/clothes" class="dropdown-item"> Clothes </a>
            <a href="/accessory" class="dropdown-item"> Accessory </a>
            <a href="/book" class="dropdown-item is-active"> Book </a>
          </div>
        </div>
    </div>
    <h1 class="hey">Welcome! {myName.toUpperCase()}</h1>
  
    <button class="button"><a href="/cart">Your Cart: {cart}</a></button>
  </div>
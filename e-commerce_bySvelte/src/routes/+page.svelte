<script>
 
    export let data;
    let search = '';
 
    function handleSearch(event) {
        event.preventDefault();
        const params = new URLSearchParams({ search });
        window.location.search = params.toString();
    }
 
 
</script>
 
<style>
    .search {
        display: flex;
        padding: 14px;
        border-radius: 28px;
        background: #dcdcdc;
        justify-content: center;
        transition: 0.25s;
        margin: 5em;
    }
 
    .search:focus-within {
        background: #f8dede;
    }
 
    .search input {
        width: 25em;
        border-radius: 28px;
        border: none;
        background: transparent;
        outline: none;
        color: red;
    }
 
    .content {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }
 
    .checkout {
        border: 1px solid;
        width: 500px;
        margin: 20px;
        background-color: rgb(234, 248, 255);
        padding: 20px;
        border-radius: 7px;
        text-align: center;
       
    }
 
    .checkout img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: 125px;
}
 
    .button {
        background-color: #ff6f61;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
 
    .button:hover {
        background-color: #ff5a4f;
    }
 
    .icon {
        margin-right: 8px;
    }
</style>
 
<form on:submit|preventDefault={handleSearch}>
    <div class="search">
        <input
            class="search-input"
            type="search"
            placeholder="search"
            bind:value={search}
            name="search"
        />
    </div>
</form>
 
<div class="content">
    {#each data.products as { id, title, slug, description, price, image }}
        <div class="checkout">
            <form method="POST" action="?/createlike">
                <div class="remove">
                    <input name="title" type="hidden" bind:value={title} />
                    <input name="slug" type="hidden" bind:value={slug} />
                    <input name="description" type="hidden" bind:value={description} />
                    <input name="price" type="hidden" bind:value={price} />
                    <input name="image" type="hidden" bind:value={image} />
                    <button class="button" type="submit">
                        <span class="icon">
                            <i class="fa fa-heart" style="font-size:24px;color:red"></i>
                        </span>
                    </button>
                </div>
            </form>
            <h5>{title}</h5>
            <a href="/product/{title}">
                <img class="image is-128x128" src={image} alt={title} />
            </a>
            <p>{description}</p>
            <p>{price} Bath</p>
            <form method="POST" action="?/create">
                <input name="title" type="hidden" bind:value={title} />
                <input name="slug" type="hidden" bind:value={slug} />
                <input name="description" type="hidden" bind:value={description} />
                <input name="price" type="hidden" bind:value={price} />
                <input name="image" type="hidden" bind:value={image} />
                <input type="hidden" name="id" value={id} />
                <button class="button" type="submit">
                    Add to Cart
                </button>
            </form>
        </div>
    {/each}
</div>
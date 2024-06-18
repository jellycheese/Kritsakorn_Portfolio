<script>
    let title = "";
    let description = "";
    let price = 0;
    let slug = "accessory"; 
    let image = "";

  
    async function addProduct() {
      const newProduct = {
        title,
        description,
        price,
        slug,
        image
      };
  
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
      });
  
      if (response.ok) {
        alert('Product added successfully!');
        // Clear the form after successful addition
        title = "";
        description = "";
        price = 0;
      } else {
        alert('Failed to add product!');
      }
    }
  </script>
  
  <style>
    /* Add your styling here */
    .container {
      width: 50%;
      margin-top: 160px;
      margin-bottom: 80px;
    }
  
    form {
      margin-top: 20px;
    }
  
    label {
      display: block;
      margin-bottom: 10px;
    }
  
    input[type="text"],
    input[type="number"],
    textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
    }
  
    button {
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #45a049;
    }
  </style>
  
  <div class="container">
    <h1>Add Product</h1>
    
    <form>
      <label>
        Category:
        <select bind:value={slug}>
          <option value="book">Book</option>
          <option value="accessory">Accessory</option>
          <option value="clothes">Clothes</option>
        </select>
      </label>
      <label>
        image:
        <textarea bind:value={image}></textarea>
      </label>
      
      <label>
        Title:
        <input type="text" bind:value={title}>
      </label>
      
      <label>
        Description:
        <textarea bind:value={description}></textarea>
      </label>
      
      <label>
        Price:
        <input type="number" bind:value={price}>
      </label>
      
      <button on:click={addProduct}>Add Product</button>
    </form>
  </div>
  
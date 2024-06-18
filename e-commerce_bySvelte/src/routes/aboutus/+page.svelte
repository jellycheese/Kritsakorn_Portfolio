<style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      /* margin-top: 50px; */
    }
    
    html {
      box-sizing: border-box;
    }
    
    *, *:before, *:after {
      box-sizing: inherit;
    }
    
    .column {
      float: left;
      width: 33.3%;
      margin-bottom: 16px;
      padding: 0 8px;
    }
    
    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      margin: 8px;
      justify-content: space-between;
      border: 1px solid;

    }
    
    .about-section {
      padding: 50px;
      text-align: center;
      background-color: #ffd1d1;
      color: rgb(0, 0, 0);
    }
    
    .container {
      padding: 0 16px;
    }
    
    .container::after, .row::after {
      content: "";
      clear: both;
      display: table;
    }
    
    .title {
      color: grey;
    }
    
    .button {
      border: none;
      outline: 0;
      display: inline-block;
      padding: 8px;
      color: white;
      background-color: #000;
      text-align: center;
      cursor: pointer;
      width: 100%;
    }
    .wrapper img {
        border-radius: 10px;
        width: 128px;
        height: 128px;
        object-fit: cover;
    }
    
    
    .button:hover {
      background-color: #555;
    }
    
    
    @media screen and (max-width: 650px) {
      .column {
        width: 100%;
        display: block;
      }
    }
    .all{
        margin-top: 80px;
    }
    h2 {
      margin-top: 15px;
    }
    .hi{
      border: 1px solid;
      margin: 20px;
      text-align: center;
      object-fit: cover;
      width: 170px;
      height: 128px;
      

    }
    .hiyo{
      width: 170px;
      height: 128px;
      object-fit: cover;

    }
    </style>
<body>
  <div class="all">
    <div class="about-section">
      <h1>About Us Page</h1>
      <p>Project IS411 ONCE Again </p>
      <p>Once Again is great!</p>
    </div>
   
    <h2 style="text-align:center">Our Team</h2>
    <div class="row">
      <div class="column">
        <div class="card">
          <div class="hi">
          <img src="waii.png" class="hiyo" alt="book" style="width:50%">
          </div>
          <div class="container">
            <h2>waidevil</h2>
            <p class="title">homesick devil</p>
            <p>wai</p>
            <p>wai@gmail.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
   
      <div class="column">
        <div class="card">
          <div class="hi">
          <img src="krit.png" class="hiyo" alt="book" style="width:50%">
          </div>
          <div class="container">
            <h2>kritsreallybad</h2>
            <p class="title">mahou shoujo kritschan</p>
            <p>krits</p>
            <p>krits@gmail.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
     
      <div class="column">
        <div class="card">
          <div class="hi">
            <img src="miu.png"  class="hiyo" alt="logo" style="width:50%">
          </div>
          <div class="container">
            <h2>Rawi is god</h2>
            <p class="title">dont call me angel, just miu</p>
            <p>miu</p>
            <p>miu@gmail.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
 
 
      <div class="column">
        <div class="card">
          <div class="hi">
          <img src="lee.png" class="hiyo" alt="book" style="width:50%">
          </div>
          <div class="container">
            <h2>leepoon</h2>
            <p class="title">supershine lee </p>
            <p>lee</p>
            <p>lee@gmail.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
 
 
      <div class="column">
        <div class="card">
          <div class="hi">
            <img src="dollar.png" class="hiyo" alt="book" style="width:50%">
            </div>
          <div class="container">
            <h2>Dollaremon</h2>
            <p class="title">dollar neverdie</p>
            <p>Tanatat</p>
            <p>dollar@gmail.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
 
      <div class="column">
        <div class="card">
          <div class="hi">
            <img src="tong.png" class="hiyo" alt="book" style="width:50%">
            </div>
          <div class="container">
            <h2>Tong</h2>
            <p class="title">Tong Tong</p>
            <p>Theerapat </p>
            <p>Tong@gmail.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
 
 
    </div>
 
 
    </div>
</body>   

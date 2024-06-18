


  <style>
    
    
    body {
      display: top;
      flex-direction: column;
      min-height: 100vh;
      margin: 0;
      
    }

   

    .footer {background-color: #8D99AE;
      width: 100%;   
      position: bottom;
      bottom: 0; 
    }
    .footer-col{
      width: 25%;
    }
    .footer-col h4{
      font-size: 18px;
      color: #EDF2F4;
      text-transform: capitalize;
      font-weight: 500;
      position: relative;
    }
    .footer-col h4::before{
    content: '';
    position: absolute;
    left:0;
    bottom: -10px;
    background-color: #D90429;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
  }
  .footer-col ul li:not(:last-child){
    margin-bottom: 10px;
  }
  .footer-col ul li a{
    font-size: 16px;
    text-transform: capitalize;
    color: #ffffff;
    text-decoration: none;
    font-weight: 300;
    color: #bbbbbb;
    display: block;
    transition: all 0.3s ease;
  }
  .footer-col ul li a:hover{
    color: #ffffff;
    padding-left: 8px;
  }
  .footer-col .social-links a{
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(255,255,255,0.2);
    margin:0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #ffffff;
    transition: all 0.5s ease;
  }
  .footer-col .social-links a:hover{
    color: #24262b;
    background-color: #ffffff;
  }
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 80px; 
    padding-top: 10px; /* ปรับการเรียงตำแหน่งของโลโก้ใน Navbar */
  }

  .navbar-brand img {
    
    height: 100%; /* ปรับความสูงของโลโก้ให้เท่ากับความสูงของ Navbar */
    max-height: 100px; /* จำกัดความสูงสูงสุดของโลโก้เพื่อป้องกันการเกินของขนาด */
  }


  .navbar-brand {
    display: flex; /* ให้ตัวอักษรแสดงเป็น flex */
    align-items: center; /* จัดวางตัวอักษรให้อยู่ตรงกลางของโลโก้ */

  }


  /*responsive*/
  @media(max-width: 767px){
    .footer-col{
      width: 50%;
      margin-bottom: 30px;
  }
  }
  @media(max-width: 574px){
    .footer-col{
      width: 100%;
  }
  }
  </style>

<body>
  <section class="hero">
    <!-- <div class="hero-body">
      <p class="title">Once Again</p>
      <p class="subtitle">Second hand shopping for your dreams</p>
    </div> -->
        <!-- <nav class="breadcrumb is-left" aria-label="breadcrumbs">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/product">Product</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/payment">Payment</a></li>
          </ul>
          
        </nav> -->
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="/"><img src="/1.png" alt="Logo" width="50" class="d-inline-block align-text-top">
              Once Again</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/product">Product</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/cart">Cart</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/likes">Like Product</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/addproduct">Selling</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/helpcenter">Help Center</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/login">Login</a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>

      
    </section>
    


    
    <slot />

    <footer class="footer">
      <!-- <div class="content">
        <p>
          <strong>TBS IS411</strong> by <a href="https://jgthms.com">MIS Dept</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div> -->
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>COMPANY</h4>
            <ul>
              <li><a href="/aboutus">about us</a></li>
              <li><a href="#">yeahhhhh</a></li>
              <li><a href="#">yahh hoooo</a></li>
              <li><a href="#">wowwwww</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4><a href="/helpcenter">GET HELP</a></h4>
            <ul>
              <li><a href="/helpcenter/payment">Payment</a></li>
              <li><a href="/helpcenter/how-to-shop">How To Shop</a></li>
              <li><a href="/helpcenter/exchange-return">Exchange/Return</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>PAYMENT</h4>
            <ul>
              <li><a href="/">about us</a></li>
              <li><a href="/">about us</a></li>
              <li><a href="/">about us</a></li>
              <li><a href="/">about us</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>FOLLOW US</h4>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Line</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
      
    </footer>
</body>


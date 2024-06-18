<style>
    body {
        font-family: Open Sans, sans-serif;
        background-color: #EDF2F4;
        color: #EDF2F4;
        justify-content: center;
        align-items: center;
        display: flex;
    }
  
    .wrapper {
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        background-color: none;
    }
  
    .wrapper img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        object-fit: cover;
    }
  
    .wrapper .content {
        margin-left: 15px;
        font-size: large;
        color: #D90429;
    }
  
    .container-fluid {
        width: 90%;
        justify-content: center;
        align-items: center;
        background-color: #EDF2F4;
        margin-bottom: 80px;
        padding: 30px;
        box-shadow: 9px 9px 16px #b1b1b1, -9px -9px 16px #ffffff;
        border-radius: 35px;
        margin-top: 160px;
    }
  
    .tab_box {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #8D99AE;
        font-size: 18px;
        font-weight: 600;
        position: relative;
    }
  
    .tab_box .tab_btn {
        font-size: 18px;
        font-weight: 600;
        color: #919191;
        background: none;
        border: none;
        padding: 18px;
    }
  
    .content_box {
        padding: 20px;
        color: #2B2D42;
    }
  
    
  
    
  
    .content_box .tab-content {
        display: block;
    }
  
    
  
    
  
    .button {
        width: 80px;
        height: 50px;
        color: #EDF2F4;
        background: #D90429;
        border-radius: 18px;
        cursor: pointer;
        outline: none;
        border: none;
        margin-top: 15px;
    }
  </style>
  
  <script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
  
    let user = null;
  
    onMount(() => {
        const userData = sessionStorage.getItem('user');
        if (userData) {
            user = JSON.parse(userData);
        } else {
            goto('/login');
        }
    });
  
    
    async function handleSave(event) {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/users/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            if (!response.ok) {
                throw new Error('Failed to update user');
            }
            alert('Profile updated successfully');
        } catch (err) {
            console.error(err);
            alert('Failed to update profile');
        }
    }
  </script>
  
  <body>
    {#if user}
    <div class="container-fluid">
        <div class="wrapper">
            <img src="/userpic.jpeg" alt="logo" width="50">
            <div class="content">Hello! {user.name}</div>
        </div>
        <div class="tab_box">
            <button class="tab_btn" data-for-tab="1">Account Setting</button>
            
        </div>
        <div class="content_box">
            <div class="tab-content active" data-tab="1">
                <form method="post" id="cusCreate" on:submit|preventDefault={handleSave}>
                    <h6 class="heading-small text-muted mb-4">User information</h6>
                    <div class="pl-lg-4">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group focused">
                                    <label class="form-control-label" for="input-username">Username</label>
                                    <input type="text" id="input-username" class="form-control form-control-alternative" bind:value={user.username} placeholder="Username">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label class="form-control-label" for="input-email">Email address</label>
                                    <input type="email" id="input-email" class="form-control form-control-alternative" bind:value={user.email} placeholder="xxx@example.com">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group focused">
                                    <label class="form-control-label" for="input-first-name">First name</label>
                                    <input type="text" id="input-first-name" class="form-control form-control-alternative" bind:value={user.name} placeholder="First name">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group focused">
                                    <label class="form-control-label" for="input-last-name">Last name</label>
                                    <input type="text" id="input-last-name" class="form-control form-control-alternative" bind:value={user.lname} placeholder="Last name">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group focused">
                                    <label class="form-control-label" for="input-tel">Phone Number</label>
                                    <input type="tel" id="input-tel" class="form-control form-control-alternative" bind:value={user.phone} placeholder="000-000-0000">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group focused">
                                    <label class="form-control-label" for="input-pic">Profile Picture</label>
                                    <input type="file" id="input-pic" class="form-control form-control-alternative">
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="my-4">
                    <h6 class="heading-small text-muted mb-4">Contact information</h6>
                    <div class="pl-lg-4">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group focused">
                                    <label class="form-control-label" for="input-address">Address</label>
                                    <input id="input-address" class="form-control form-control-alternative" bind:value={user.address} placeholder="Home Address" type="text">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="form-group focused">
                                    <label class="form-control-label" for="input-city">City</label>
                                    <input type="text" id="input-city" class="form-control form-control-alternative" bind:value={user.city} placeholder="City">
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group focused">
                                    <label class="form-control-label" for="input-country">Country</label>
                                    <input type="text" id="input-country" class="form-control form-control-alternative" bind:value={user.country} placeholder="Country">
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label class="form-control-label" for="input-country">Postal code</label>
                                    <input type="text" id="input-postal-code" class="form-control form-control-alternative" bind:value={user.postalCode} placeholder="Postal code">
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="button" id="updateBtn">Save</button>
  
                </form>
            </div>
            
        </div>
    </div>
    <script>
      document.getElementById('input-pic').addEventListener('change', function() {
                    const file = this.files[0]; // รับไฟล์ที่เลือก
                    const reader = new FileReader(); // ใช้ FileReader เพื่ออ่านไฟล์รูปภาพ
                    
                    reader.onload = function(e) {
                        const img = document.querySelector('.wrapper img'); // เลือกรูปภาพ
                        img.src = e.target.result; // ตั้งค่า src ของรูปภาพให้เป็นข้อมูล URL ของไฟล์รูปภาพ
                    }
                    
                    reader.readAsDataURL(file); // อ่านไฟล์รูปภาพให้เป็น URL
                });
    </script>
    {/if}
    
  </body>
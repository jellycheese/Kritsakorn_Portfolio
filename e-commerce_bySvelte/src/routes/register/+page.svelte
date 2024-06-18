<script>
    import { goto } from '$app/navigation';

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        // Convert form data to an object
        const user = Object.fromEntries(formData.entries());

        // Save user data to JSON server
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            // Redirect to login page after registration
            goto('/login');
        } else {
            console.error('Failed to register user');
        }
    };
</script>

<style>
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: url('bg3.png') repeat;
        background-size: initial;
        background-position: center;
    }
    .wrapper {
        width: 420px;
        background: #2B2D42;
        color: #EDF2F4;
        margin-top: 160px;
        margin-bottom: 20px;
        border-radius: 30px;
        padding: 30px 40px;
    }
    .wrapper h1 {
        font-size: 36px;
        text-align: center;
    }
    .wrapper .input-box {
        width: 100%;
        height: 50px;
        margin: 15px 0;
        align-items: center;
    }
    .input-box input {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background: none;
        outline: none;
        border: 1px solid #EDF2F4;
        padding: 20px 45px 20px 20px;
        color: #EDF2F4;
    }
    .input-box input::placeholder {
        color: #EDF2F4;
    }
    .wrapper form {
        width: 100%;
        max-width: 420px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .wrapper .button {
        width: 100px;
        height: 50px;
        background: #EDF2F4;
        border-radius: 18px;
        cursor: pointer;
        outline: none;
        border: none;
        margin-bottom: 15px;
    }
</style>

<body>
    <div class="wrapper" id="register" role="document">
        <h1>Register</h1>
        <form id="registerForm" on:submit|preventDefault={handleSubmit}>
            <div class="input-box">
                <input id="name" name="name" type="text" placeholder="First Name" required />
            </div>
            <div class="input-box">
                <input id="lname" name="lname" type="text" placeholder="Last Name" required />
            </div>
            <div class="input-box">
                <input id="username" name="username" type="text" placeholder="Username" required />
            </div>
            <div class="input-box">
                <input id="phone" name="phone" type="tel" placeholder="Phone Number" required />
            </div>
            <div class="input-box">
                <input id="email" name="email" type="email" placeholder="E-mail" required />
            </div>
            <div class="input-box">
                <input id="password1" name="password" type="password" placeholder="Password" required />
            </div>
            <div class="input-box error">
                <input id="password2" name="confirmPassword" type="password" placeholder="Confirm Password" required />
            </div>
            <div class="input-box">
                <input id="address" name="address" type="text" placeholder="Address"  />
            </div>
            <div class="input-box">
                <input id="city" name="city" type="text" placeholder="City"  />
            </div>
            <div class="input-box">
                <input id="country" name="country" type="text" placeholder="Country"  />
            </div>
            <div class="input-box">
                <input id="postalCode" name="postalCode" type="text" placeholder="Postal code"  />
            </div>
            <input class="button" type="submit" value="Submit" />
            
        </form>
        <a class="text" href="/login">Have an account?</a>

    </div>
</body>
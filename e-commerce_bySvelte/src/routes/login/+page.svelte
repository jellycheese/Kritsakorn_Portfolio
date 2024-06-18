<script>
    import { goto } from '$app/navigation';
    let email = '';
    let password = '';
    let error = '';

    async function handleLogin() {
        try {
            const response = await fetch('http://localhost:3000/users');
            const users = await response.json();

            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                sessionStorage.setItem('user', JSON.stringify(user));
                goto('/profile');
            } else {
                error = 'Invalid email or password';
            }
        } catch (err) {
            error = 'Failed to fetch user data';
        }
    }
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
    <div class="wrapper">
        <h1>Login</h1>
        <form id="loginForm" on:submit|preventDefault={handleLogin}>
            <div class="input-box">
                <input id="email" name="email" type="email" placeholder="E-mail" bind:value={email} required />
            </div>
            <div class="input-box">
                <input id="password" name="password" type="password" placeholder="Password" bind:value={password} required />
            </div>
            <input class="button" type="submit" value="Submit" />
        </form>
        {#if error}
            <p style="color: red;">{error}</p>
        {/if}
        <a class="text" href="/register">Don't have an account?</a>

    </div>
</body>

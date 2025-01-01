function LoginButton({ isLoggedIn }) {
    return (
        <button
            style={{ marginTop: "10px", padding: "2px 5px" }}
            type="button">
            {isLoggedIn ? "Logout" : "Login"}
        </button>
    )
}

export default LoginButton

import LoginButton from "./LoginButton"

function App() {
    return (
        <>

            <h2>Welcome to the website</h2>
            <LoginButton isLoggedIn={true} />

            <hr style={{ margin: "20px 0" }} />

            <h2>Welcome to the website</h2>
            <LoginButton isLoggedIn={false} />

        </>)

}

export default App

function Greet(props) {
    return <h2>Hello, {props.name ? props.name : "Guest"}! Welcome to the React training.</h2>
}

function App() {
    return (<>
        <Greet name="John" />
        <Greet />
    </>)
}

export default App

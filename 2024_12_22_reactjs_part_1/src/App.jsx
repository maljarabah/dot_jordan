import UserList from "./UserList"

function App() {
    const users = [
        { id: 1, name: "Alice", email: "alice@example.com" },
        { id: 2, name: "Bob", email: "bob@example.com" },
        { id: 3, name: "Charlie", email: "charlie@example.com" }
    ]

    return <UserList users={users} />
}

export default App

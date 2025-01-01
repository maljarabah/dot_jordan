import UserCard from "./UserCard"

function UserList({ users }) {
    return (<div>{users.map(
        (user) => <UserCard key={user.id} name={user.name} email={user.email} />
    )}</div>)
}

export default UserList

import React from "react";

const User = (props) => {
    const { users } = props;

    return (
        <div>
            <ul>
                {users.slice(0, 5).map((user) => {
                    return <li key={user.id}>{user.name}</li>;
                })}
            </ul>
        </div>
    );
};

export default User;

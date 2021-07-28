import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Card from "../components/CardComponent"
import {getUsers} from "../redux/actions/users";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users)
    const getUser = users.map(user => { return <Card user={user} key={user.id}/>})

    useEffect(() => {
        dispatch(getUsers([
            {
                id: 1,
                nome: "Isaac",
                company: {
                    name: 'RAV',
                    bordao: 'Soluções tecnológicas'
                }
            }
        ]));
    }, [dispatch])
    return (
        <div>
            {users.length === 0 && <p>Não há usuários</p>}
            {users.length != 0 && getUser}
        </div>


    )
}

export default Users;
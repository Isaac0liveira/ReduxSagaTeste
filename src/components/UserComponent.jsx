import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import Card from "../components/CardComponent"
import {getUsersRequest} from "../redux/actions/users";
import ModalComponent from "./ModalComponent";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users)
    const loading = useSelector(state => state.users.loading)
    const error = useSelector(state => state.users.error)
    const [isVisible, setVisible] = useState(false)
    const [user, setUser] = useState(null)

    const handleClick = (user) => {
        setUser(user);
        setVisible(true)
    }

    useEffect(() => {dispatch(getUsersRequest());}, [dispatch])

    return (
        <div className="App">
            {loading && <p>Carregando...</p>}
            {!loading && users && users.length === 0 && <p>Não há usuários</p>}
            {users && users.length !== 0 && users.map(user => {
                return <Card user={user} key={user.id} onClickPerform={() => handleClick(user)}/>})}
            {error && !loading && <p>{error}</p>}
            {isVisible && <ModalComponent user={user} onChange={value => setVisible(value)}/>}
        </div>
    )
}

export default Users;
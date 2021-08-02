import React from 'react'

const ModalComponent = (props) => {

    return (
            <div className="ModalBackground" onClick={() => props.onChange(false)}>
                <div className="Modal" onClickCapture={e => e.stopPropagation()}>

                    <p>Nome: {props.user && props.user.name}</p>
                    <p>Telefone: {props.user && props.user.phone}</p>
                    <p>Email: {props.user && props.user.email}</p>
                    <p>Cidade: {props.user && props.user.address.city}</p>
                </div>
            </div>
    )
}

export default ModalComponent;
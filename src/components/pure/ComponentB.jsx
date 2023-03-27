import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Contact } from '../../models/contact'

const ComponentB = ({ contact }) => {
    const [active, setActive] = useState(false)
    const connect = () => {
        if (active === true) {
            setActive(contact.active = false)
        }
        else {
            setActive(contact.active = true)
        }
    }

    return (
        <div>
            <h1> Nombre: {contact.name}</h1>
            <h2> Apellido: {contact.lastName}</h2>
            <h3> Email: {contact.email}</h3>
            <h4> Estado: {contact.active ? 'Contacto En Línea':'Contacto No Disponible'}</h4>
            <button onClick={connect}> Conectar/Desconectar</button>
        </div>
    )
}

ComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contact)

}

export default ComponentB

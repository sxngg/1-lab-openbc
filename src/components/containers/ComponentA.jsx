import React from 'react'
import { Contact } from '../../models/contact'
import ComponentB from '../pure/ComponentB';

const ComponentA = () => {
    const defaultContact = new Contact('Ramiro','Hernd','ramiher@gmail.com',false);

  return (
    <div>
        <ComponentB contact={defaultContact}> </ComponentB>
    </div>
  )
}


export default ComponentA
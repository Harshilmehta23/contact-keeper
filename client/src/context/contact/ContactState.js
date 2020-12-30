import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../type';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        _id: '1',
        name: 'Sara Smith',
        email: 'ssmith@gmail.com',
        phone: '111-111-1111',
        type: 'professional',
      },
      {
        _id: '2',
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '222-222-2222',
        type: 'personal',
      },
      {
        id: '3',
        name: 'Hary White',
        email: 'harry@gmail.com',
        phone: '333-333-3333',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //   ADD CONTACT

  // DELETE CONTACT

  // SET CURRET CONTACT

  // CLEAR CURRENT CONTACT

  // UPDATE CONTACT

  // FILTER CONTACTS

  // CLEAR CONTACT

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

import React, {createContext, useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'


export const ContactsListContext = createContext();

function ContactsListContextProvider({children}) {


const [contacts, setContacts] = useState([
  {firstName: "Daniel", lastName: "Zinser", phone: '55419333345854',key: Math.random()},
  {firstName: "Rodrigo", lastName: "Sanchez", phone: '55419458333354',key: Math.random()},
  {firstName: "Santiego", lastName: "ville", phone: '523442854',key: Math.random()},

]);




const addContact = (contact)=>{setContacts([...contacts, contact])}

const deleteContact = (id)=> {

  setContacts(contacts.filter((contact)=>{
    return contact.key !== Number(id);

  }))
return contacts;}

const editContact = (id, contact) =>{
  
  let _contacts = contacts.filter((el)=>{

    if(el.key === id){
      return false;
    }else{

      return true;
    }
  });

  setContacts([..._contacts, contact])
}



const [filteredContacts, setFilteredContacts] = useState(contacts);


const addFilteredContact= (contact)=>{
  setFilteredContacts([...filteredContacts, contact])
}

const deleteFilteredContact = (id)=>{

  setFilteredContacts(filteredContacts.filter((contact)=>{
    return contact.key !== Number(id);

  }))
  return filteredContacts;
}


const editFilteredContact = (id, contact) =>{

  let _contacts = filteredContacts.filter((el)=>{
    if(el.key === id){
      return false;
    }else{

      return true;
    }
  });
  setFilteredContacts([..._contacts, contact])
}


const updateFilteredContacts = (value)=>{

  setFilteredContacts(contacts.filter((contact)=>{

    var val = (value.replace(/\s/g, '')).toLowerCase();

    var hasFilter = false;
    let completeUser = (contact.firstName + contact.lastName + contact.phone).toLowerCase();

    if(contact.firstName.toLowerCase().includes(val) || contact.lastName.toLowerCase().includes(val) || contact.phone.toLowerCase().includes(val) || completeUser.includes(val)){
      hasFilter = true;
    }
    
    return hasFilter;
  }))

}



  return (
    <ContactsListContext.Provider value={
      {contacts, 
      addContact, 
      deleteContact,
       filteredContacts, 
       addFilteredContact, 
       deleteFilteredContact,
       updateFilteredContacts,
       editContact,
       editFilteredContact,
       }}>
        {children}
    </ContactsListContext.Provider>
  )
}


export default ContactsListContextProvider;
import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { ContactsListContext } from '../context/ContactsListContext'
import ContactCard from './ContactCard';
import { useState } from 'react/cjs/react.production.min';
import { clear } from 'react-native/Libraries/LogBox/Data/LogBoxData';



function ContactsList(props) {

    const {contacts, filteredContacts} = useContext(ContactsListContext);


    useEffect(()=>{

      
      console.log('-----')
      console.log(contacts)


      // console.log('-------------------------------')
      // console.log('Contacts: ' + contacts.length)
      // console.log('Filtered Contacts: ' + filteredContacts.length)

      // console.log('-------------------------------')


    },[ contacts, filteredContacts]);
    



   
  return (
      filteredContacts.length > 0 ?
      <View style={styles.containerStyle}>
        
      <FlatList
       renderItem={(contact)=>{
        return(
            <ContactCard 
            contact={contact.item}
          
            />
           
        )
       }}
       data={filteredContacts}
       />
    </View>:
    <View style={styles.emptyContainerStyle}><Text style={styles.textStyle}>Your PhoneBook is empty</Text></View>
  )
}

const styles = StyleSheet.create({

  containerStyle: {flex: 1, marginTop:20},
  textStyle:{
    textAlign: 'center',
    fontSize:20
  },
  emptyContainerStyle :{
    marginTop:'50%'
  }
});



export default ContactsList;
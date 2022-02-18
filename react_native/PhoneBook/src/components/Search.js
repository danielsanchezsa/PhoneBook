import { StyleSheet, TextInput} from 'react-native'
import React, { useContext, useState } from 'react'
import { ContactsListContext } from '../context/ContactsListContext';

export default function Search() {

const{filteredContacts, updateFilteredContacts} = useContext(ContactsListContext);

const [value, setValue] = useState('');

  return (
    <TextInput
          onChangeText={(val)=>{
            setValue(val)

          updateFilteredContacts(val);
          }}
          value={value}
          placeholder={'Search'}
          style={styles.textInputStyle}
          
          />
  )
}

const styles = StyleSheet.create({
  textInputStyle:{
    marginVertical:10,
    marginHorizontal:5,
    borderColor: 'rgba(52, 52, 52, 0.5)',
 
    borderWidth: 1,
    borderRadius:20,
    paddingHorizontal: 5,
    paddingVertical:10
  },

})
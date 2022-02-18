import { StyleSheet, Text, View , TextInput} from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ContactsListContext } from '../context/ContactsListContext';


export default function AddContact(props) {

    const {addContact, addFilteredContact} = useContext(ContactsListContext);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [complete, setComplete] = useState(true);

  return (
    <View style={styles.viewContainerStyle}>


      <Text style={styles.titleStyle}>AddContact</Text>
      <View>
      {complete ? (<View></View>):(<Text style={{color:"red"}}>All fields should be correct</Text>)}
      
      <View>
          <TextInput
          onChangeText={setFirstName}
          value={firstName}
          placeholder={'First Name'}
          style={styles.textInputStyle}
          />
         
      </View>
      <View>
          <TextInput
          onChangeText={setLastName}
          value={lastName}
          placeholder={'Last Name'}
          style={styles.textInputStyle}
          />
         
      </View>

          <View>
          <TextInput
          onChangeText={setPhone}
          value={phone}
          placeholder={'Phone Number'}
          keyboardType={'numeric'}
          style={styles.textInputStyle}
          
          />

          <View style={styles.horizontalStyle}>


          <TouchableOpacity
        
        onPress={()=>{

          if(lastName.length >3 && firstName.length >3 && phone.length >3) {

            let key = Math.random();

           
            addFilteredContact({firstName: firstName, lastName: lastName, phone: phone, key:key})
            addContact({firstName: firstName, lastName: lastName, phone: phone, key:key})
            setComplete(true);
            props.dismiss(false)
          }else{
            setComplete(false)
          }


        }}
        >
            <Text style={styles.confirmStyle}>Confirm</Text>
        </TouchableOpacity>


        <TouchableOpacity
      
        onPress={()=>{
          props.dismiss(false)
        }}
        >
            <Text style={styles.cancelStyle}>Cancel</Text>
        </TouchableOpacity>

          </View>

        
         
      </View>

      </View>
  
    </View>
  )
}

const styles = StyleSheet.create({

  horizontalStyle:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'center'
    
  },

  confirmStyle:{
  
    marginTop:20,
    marginHorizontal:20,
    fontSize:16,
    color:'blue',

  },

  cancelStyle:{
    marginTop:20,
    marginHorizontal:20,
    fontSize:16,
    color:'red'

  },


  viewContainerStyle:{
    height: "70%",
     minWidth:"90%"
    },

  titleStyle:{
    paddingBottom:20,
    fontSize:20,
    textAlign:'center'
  },

  textInputStyle:{
    marginVertical:10,
    borderColor: 'rgba(52, 52, 52, 0.5)',
 
    borderWidth: 1,
    borderRadius:20,
    paddingHorizontal: 5,
    paddingVertical:10
  }


})
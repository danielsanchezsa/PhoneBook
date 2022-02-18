import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { StackActions } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ContactsListContext } from '../context/ContactsListContext';

export default function EditContact(props) {

  const{editContact, editFilteredContact} = useContext(ContactsListContext)

  const [firstName, setFirstName] = useState(props.contact.firstName);
  const [lastName, setLastName] = useState(props.contact.lastName);
  const [phone, setPhone] = useState(props.contact.phone);


  return (
    <View style={styles.viewContainerStyle}>


    <Text style={styles.titleStyle}>AddContact</Text>
    <View>
    
    
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

          let newContact = {firstName: firstName, lastName: lastName, phone: phone,key: props.contact.key};
    

          editContact(props.contact.key,newContact);
          editFilteredContact(props.contact.key,newContact);
          props.dismiss(false)
          props.navigation.dispatch(StackActions.pop());
        
        

          

        
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



    // <View>
    //   <Text>EditContact</Text>

    //   <TouchableOpacity
    //   onPress={()=>{


    //     try{
    //       let newContact = {firstName: "Jausadfasdfn Pablo", lastName: "Zinser", phone: '5541945854',key: Math.random()};
    

    //       editContact(props.contact.key,newContact);
    //       editFilteredContact(props.contact.key,newContact);

    //       props.dismiss(false)
    //       props.navigation.dispatch(StackActions.pop());
        
    //     //  });

          

    //     }catch(e){

    //       console.log('catch: ' + e)  

    //     }


    //   }}>
    //       <Text>
    //           Confirm
    //       </Text>
    //   </TouchableOpacity>
    // </View>
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


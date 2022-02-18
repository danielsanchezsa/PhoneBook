import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackActions } from 'react-navigation';
import { ContactsListContext } from '../context/ContactsListContext';
import {Alert, Modal} from 'react-native';
import EditContact from './EditContact';

export default function ContactScreen(props) {

    const { deleteFilteredContact,deleteContact, updateContact} = useContext(ContactsListContext);

    
    let contact = props.navigation.getParam('contact');
    let navigation = props.navigation.getParam('navigation')


    const [modalVisible, setModalVisible] = useState(false);


    
    

  return (
    <View >

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
           <EditContact contact={contact}navigation={props.navigation} dismiss={setModalVisible} ></EditContact>
          </View>
        </View>
      </Modal>



        <View style={styles.detailStyle}>
      <Text style={styles.hintTextStyle}>First Name:</Text>
      <Text style={styles.titleTextStyle}>{contact.firstName}</Text>
      </View>

      <View style={styles.detailStyle}>
      <Text style={styles.hintTextStyle}>Last Name:</Text>
      <Text style={styles.titleTextStyle}>{contact.lastName}</Text>
      </View>

      
      <View style={styles.detailStyle}>
      <Text style={styles.hintTextStyle}>Phone Number:</Text>
      <Text style={styles.titleTextStyle}>{contact.phone}</Text>
      </View>
      

     
     


     <TouchableOpacity
     style={styles.buttonContainerStyle}
      onPress={()=>{
        deleteFilteredContact(contact.key);
          deleteContact(contact.key);
          navigation.dispatch(StackActions.pop());
      }}>
      <Text style={styles.confirmStyle}>Remove Contact</Text>
      </TouchableOpacity>


     <TouchableOpacity
     style={styles.buttonContainerStyle}
      onPress={()=>{
        setModalVisible(!modalVisible);

      }}>
      <Text style={styles.editStyle}>Edit Contact</Text>
      </TouchableOpacity>


    
     
    </View>
  )
}



const styles = StyleSheet.create({
  detailStyle:{
    borderBottomWidth:2,
    borderColor:'grey',
    paddingVertical:20,
    borderRadius:100

  },
  buttonContainerStyle:{
    marginTop:30,
    alignItems: 'center',
    justifyContent:'center'

  },
  confirmStyle:{
    color:'red',

  },
  editStyle:{
    color:'blue',

  },
    hintTextStyle:{
      marginLeft:10,
      paddingVertical:20,
      color:'grey'
    },
    titleTextStyle:{
      textAlign:'center',
      fontSize:24,

    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
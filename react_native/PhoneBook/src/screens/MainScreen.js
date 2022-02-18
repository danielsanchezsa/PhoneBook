
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from "react";
import Search from '../components/Search'
import ContactsList from '../components/ContactsList'
import {Alert, Modal} from 'react-native'
import ContactsListContextProvider from '../context/ContactsListContext'
import ActionButton from 'react-native-action-button'
import AddContact from './AddContact';

export default function MainScreen(props) {

    const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1}}>
        <Search/>

     <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
 
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
           <AddContact dismiss={setModalVisible} ></AddContact>
          </View>
        </View>
      </Modal>
      <View style={{flex:1}}>
      <ContactsList navigation={props.navigation}/>
      <ActionButton 
        buttonColor={'blue'}
        title='Button'
        onPress={()=>{
            setModalVisible(!modalVisible);
            //props.navigation.navigate('AddContact')
        }}
        position= 'right'
 
        >

        </ActionButton>
      </View>
 
    </View>
  )
}

const styles = StyleSheet.create({
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
  
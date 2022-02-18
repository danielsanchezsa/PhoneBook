import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import { withNavigation } from 'react-navigation';

function ContactCard(props) {



  return (
    
      <TouchableOpacity
      onPress={()=>{   props.navigation.navigate('ContactScreen', {contact: props.contact, navigation: props.navigation})}
      }>

        <View style={styles.containerStyle}>
         <Text style={styles.textStyle}>{props.contact.firstName} {props.contact.lastName}</Text>
         <Text style={styles.phoneStyle}>{props.contact.phone}</Text>
        </View>
      </TouchableOpacity>
    

  )
}

const styles = StyleSheet.create({

  containerStyle:{
    padding:20,
    marginHorizontal:5,
    marginVertical:5,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5

  },
  phoneStyle:{
    fontSize:12,
    color:'grey',
    marginTop:10,
  },
  textStyle:{
    fontSize:20,
  }

})

export default withNavigation(ContactCard);
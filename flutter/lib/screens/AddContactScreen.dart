
import 'package:flutter/material.dart';
import 'package:phone_book/objects/User.dart';
import 'package:phone_book/objects/Users.dart';
import 'package:phone_book/widgets/CustomAlertDialog.dart';
import 'package:phone_book/widgets/CustomTextField.dart';
import 'package:provider/provider.dart';


class AddContactScreen extends StatefulWidget {
  static String id = "AddContactScreen";

  @override
  _AddContactScreenState createState() => _AddContactScreenState();
}

class _AddContactScreenState extends State<AddContactScreen> {

  String name ="", lastName ="", phone ="";
  late Users users;

  void addContact(){
    if(name.length < 3 ||phone.length < 3 ||lastName.length < 3){
      showDialog(context: context, builder: (BuildContext dialogContext){
        return CustomAlertDialog(title:'Some of the fields is invalid.',
          showCancelButton: false,
          onPressed:(){
            Navigator.pop(dialogContext);
          },
          onCancelPressed: (){
            Navigator.pop(dialogContext);
          },
        );
      });

    }else{
      users.addUser(User(firstName:name, lastName:lastName, phone:phone,dateAdded: DateTime.now()));
      Navigator.pop(context);
    }
  }

  @override
  Widget build(BuildContext context) {
    users= Provider.of<Users>(context);

    return GestureDetector(
      onTap: () {
        FocusScope.of(context).requestFocus(new FocusNode());
      },
      child: Padding(
        padding: MediaQuery.of(context).viewInsets,
        child: Container(
          height: MediaQuery.of(context).size.height *0.7,
          child: Container(
            decoration: const BoxDecoration(
              color: Colors.white,
            ),
            child: ListView(

              children: [
              const Padding(
                padding: const EdgeInsets.only(top: 20),
                child: Center(child: Text('Add User', style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 24),)),
              ),
               Padding(padding: EdgeInsets.all(20),
                 child:   CustomTextField(
                   function: (s){
                     name = s;
                   },
                   hintText: 'First Name',
                   labelText: 'First Name',

                 ),

               ),
                Padding(padding: EdgeInsets.all(20),
                  child:   CustomTextField(
                    function: (s){
                      lastName = s;
                    },
                    labelText: 'Last Name',
                    hintText: 'Last Name',

                  ),

                ),
                Padding(padding: EdgeInsets.all(20),
                  child:   CustomTextField(
                    function: (s){
                      phone = s;
                    },
                    hintText: 'Phone Number',
                    labelText: 'Phone Number',
                    keyboardType: TextInputType.phone,

                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(20),
                  child: TextButton(onPressed: (){
                    addContact();
                  }, child: Text('Add Contact')
                  ),
                )
            ],)
          ),
        ),
      ),
    );
  }
}



import 'package:flutter/material.dart';
import 'package:phone_book/objects/User.dart';
import 'package:phone_book/objects/Users.dart';
import 'package:phone_book/widgets/CustomAlertDialog.dart';
import 'package:phone_book/widgets/CustomTextField.dart';
import 'package:provider/provider.dart';

class EditUserScreen extends StatefulWidget {
  final User user;
  EditUserScreen({required this.user});


  @override
  _EditUserScreenState createState() => _EditUserScreenState();
}

class _EditUserScreenState extends State<EditUserScreen> {
  String name ="", lastName ="", phone ="";

  late Users users;

  @override
  void initState() {
    name= widget.user.firstName;
    lastName = widget.user.lastName;
    phone = widget.user.phone;
    super.initState();
  }


  void addContact(){
    if(name.length < 3 ||phone.length < 3 ||lastName.length < 3){
      showDialog(context: context, builder: (BuildContext dialogContext){
        return CustomAlertDialog(title:'Some of the fields is invalid.',
          showCancelButton: false,
          onPressed:(){
            Navigator.pop(dialogContext);
          },

        );
      });

    }else{
     users.editUser(user: widget.user, name: name, lastName: lastName,phone: phone);
      Navigator.pop(context);
    }
  }

  @override
  Widget build(BuildContext context) {

    users = Provider.of<Users>(context);

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
                child: Center(child: Text('Confirm', style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 24),)),
              ),
              Padding(padding: EdgeInsets.all(20),
                child:   CustomTextField(
                  function: (s){
                    name = s;
                  },
                  initialValue: widget.user.firstName,
                  hintText: 'First Name',
                  labelText: 'First Name',

                ),

              ),
              Padding(padding: EdgeInsets.all(20),
                child:   CustomTextField(
                  function: (s){
                    lastName = s;
                  },
                  initialValue: widget.user.lastName,
                  labelText: 'Last Name',
                  hintText: 'Last Name',

                ),

              ),
              Padding(padding: EdgeInsets.all(20),
                child:   CustomTextField(
                  function: (s){
                    phone = s;
                  },
                  initialValue: widget.user.phone,
                  hintText: 'Phone Number',
                  labelText: 'Phone Number',
                  keyboardType: TextInputType.phone,

                ),
              ),
              Padding(
                padding: const EdgeInsets.all(20),
                child: TextButton(onPressed: (){
                  addContact();
                }, child: Text('Confirm')
                ),
              )
            ],)
          ),
        ),
      ),
    );
  }
}

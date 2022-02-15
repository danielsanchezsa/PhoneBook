
import 'package:flutter/material.dart';
import 'package:phone_book/objects/User.dart';
import 'package:phone_book/objects/Users.dart';
import 'package:phone_book/screens/AddContactScreen.dart';
import 'package:phone_book/widgets/CustomTextField.dart';
import 'package:phone_book/widgets/CustomUserCard.dart';
import 'package:provider/provider.dart';

class MainScreen extends StatefulWidget {

  static String id = 'MainScreen';

  @override
  _MainScreenState createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {

  String filter = "";

  @override
  Widget build(BuildContext context) {
    final Users users= Provider.of<Users>(context);
    return Scaffold(
      floatingActionButton: FloatingActionButton(
        child: const Icon(Icons.add),
        onPressed: (){
          showModalBottomSheet<dynamic>(
              isScrollControlled: true,
              context: context,
              builder: (BuildContext bc) {
                return AddContactScreen();
              });

        },
      ),
      body: (users.users.isNotEmpty)?
      Column(
        children: [
        Padding(
          padding: const EdgeInsets.only(top: 20, left: 10),
          child: Row(
            children: [
              Expanded(
                child: Container(
                height: 70.0,
                child: CustomTextField(
                  initialValue: '',
                  labelText: 'Search',
                  hintText: 'Search',
                  underLine: false,
                  function: (value) {
                    setState(() {
                      filter = value;

                    });

                  },
                ),
                ),
              ),
              const Padding(
                padding: const EdgeInsets.all(8.0),
                child: Icon(Icons.search,color: Colors.blueAccent, size: 30,),
              )
            ],
          ),
        ),
        Expanded(
            flex: 1,
            child: Padding(
              padding: EdgeInsets.only(top: 20),
              child: ListView.builder(itemBuilder: (_,index){

                bool hasValue = false;

                String megaValue = (users.users[index].firstName +" "+
                    users.users[index].lastName + " " +
                    users.users[index].phone).toLowerCase();

                if(megaValue.contains(filter.toLowerCase())){

                  hasValue = true;
                }

                if(hasValue){
                  return CustomUserCard(user: users.users[index]);
                }else{
                  return const SizedBox();
                }

              },
                itemCount: users.users.length,
              ),
            ),
          )
      ],)

          : Center(child: Text('Your Phone Book is empty, try adding a new one.')),
      appBar: AppBar(title: Text('PhoneBook'),),
    );
  }
}


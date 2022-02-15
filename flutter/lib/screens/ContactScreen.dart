
import 'package:flutter/material.dart';
import 'package:phone_book/objects/User.dart';
import 'package:phone_book/objects/Users.dart';
import 'package:phone_book/screens/EditUserScreen.dart';
import 'package:phone_book/widgets/CustomAlertDialog.dart';
import 'package:phone_book/widgets/CustomLabelText.dart';
import 'package:provider/provider.dart';

class ContactScreen extends StatefulWidget {
  final User user;
  ContactScreen({required this.user});
  static String id = 'ContactScreen';

  @override
  _ContactScreenState createState() => _ContactScreenState();
}

class _ContactScreenState extends State<ContactScreen> {
  @override
  Widget build(BuildContext context) {

    final Users users = Provider.of<Users>(context);

    return Scaffold(
      appBar: AppBar(title: Text('${widget.user.firstName} ${widget.user.lastName}')),
      body: Container(
        child: ListView(
          children: [

            Padding(
              padding: const EdgeInsets.only(top: 50),
              child: CustomLabelText(child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  hintText('First Name:'),

                  valueText(widget.user.firstName),
                ],)
              ),
            ),
            CustomLabelText(child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [

                hintText('Last Name:'),

                valueText(widget.user.lastName),
              ],)
            ),
            CustomLabelText(child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [

                hintText('Phone Number:'),

                valueText(widget.user.phone),
              ],)
            ),

            CustomLabelText(child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [

                hintText('Created:'),


                valueText('${widget.user.dateAdded.month} / ${widget.user.dateAdded.day} / ${widget.user.dateAdded.year} '
                    ' at: ${widget.user.dateAdded.hour}:${widget.user.dateAdded.minute} '),
              ],)
            ),


            TextButton(onPressed: (){

              showModalBottomSheet<dynamic>(
                  isScrollControlled: true,
                  context: context,
                  builder: (BuildContext bc) {
                    return EditUserScreen(user: widget.user);
                  });

            }, child: const Text('Edit Contact', style: TextStyle(color: Colors.blueAccent),)),

            Padding(
              padding: const EdgeInsets.only(top: 20),
              child: TextButton(onPressed: (){

                showDialog(context: context, builder: (BuildContext dialogContext){
                  return CustomAlertDialog(title:'Are you sure you want to delete this contact?',
                    onPressed:(){
                      users.removeUser(widget.user);
                      Navigator.pop(dialogContext);
                      Navigator.pop(dialogContext);
                    },
                    onCancelPressed: (){
                      Navigator.pop(dialogContext);
                    },
                  );
                });

              }, child: const Text('Delete Contact', style: TextStyle(color: Colors.red),)),
            )



          ],
        ),
      ),
    );
  }
  Widget hintText(String text){
    return Text(text, style: TextStyle(color: Colors.black26, fontSize: 16),);
  }

  Widget valueText(String text){
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: Center(child: Text(text, style: TextStyle(color: Colors.black, fontSize: 21),)),
    );
  }
}

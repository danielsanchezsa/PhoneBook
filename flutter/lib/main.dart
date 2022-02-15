import 'package:flutter/material.dart';
import 'package:phone_book/objects/User.dart';
import 'package:phone_book/objects/Users.dart';
import 'package:phone_book/screens/AddContactScreen.dart';
import 'package:phone_book/screens/ContactScreen.dart';
import 'package:phone_book/screens/MainScreen.dart';
import 'package:provider/provider.dart';

void main() => runApp(Main());

class Main extends StatelessWidget {
  
  Users users = Users();

  @override
  Widget build(BuildContext context) {


    return MultiProvider(
      providers: [
        ChangeNotifierProvider<Users>(create:(context) => users, )
      ],
      child: MaterialApp(
        theme: ThemeData(
          
        ),
        initialRoute: MainScreen.id,
        routes: {
          MainScreen.id: (context) => MainScreen(),
          AddContactScreen.id: (context) => AddContactScreen(),

        },
      ),
    );
  }
}
import 'package:flutter/cupertino.dart';
import 'package:phone_book/objects/User.dart';

class Users extends ChangeNotifier{
   List<User> users =[
   ];

   void addUser(User user){
     users.add(user);
     notifyListeners();
   }

   void removeUser(User user){
     users.remove(user);
     notifyListeners();
   }

   void editUser({required User user,required String name,required String lastName,required String phone}){

     users.forEach((element) {
       if(element == user){
         element.editUser(User(firstName: name, lastName: lastName,phone: phone, dateAdded: user.dateAdded));
         notifyListeners();
       }
     });
   }
}
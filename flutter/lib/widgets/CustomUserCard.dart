
import 'package:flutter/material.dart';
import 'package:phone_book/objects/User.dart';
import 'package:phone_book/screens/ContactScreen.dart';

class CustomUserCard extends StatelessWidget {
  final User user;
  CustomUserCard({required this.user});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: GestureDetector(
        onTap: (){
          Navigator.push(context,
            MaterialPageRoute(
              builder: (context) => ContactScreen(
                user: user,
              ),
            ),
          );
        },
        child: Container(
          padding: EdgeInsets.all(15),
          decoration: const BoxDecoration(
            color: Colors.white,

              borderRadius: BorderRadius.all(
                  Radius.circular(10.0)
              ),

              boxShadow: [BoxShadow(blurRadius: 10,color: Colors.black,offset: Offset(1,3))]
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text('${user.firstName} ${user.lastName}',style: const TextStyle(fontSize: 20),),
              const Text('>', style: const TextStyle(fontSize: 20, color: Colors.grey),)
            ],
          ),
        ),
      ),
    );
  }
}

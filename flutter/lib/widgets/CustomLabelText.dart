
import 'package:flutter/material.dart';

class CustomLabelText extends StatelessWidget {
  final Widget child;
  CustomLabelText({required this.child});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 15, vertical: 20),
      child: Container(

        width: double.infinity,
        padding: EdgeInsets.all(8),
        decoration: const BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.all(
                Radius.circular(10.0)
            ),
            boxShadow: [
              BoxShadow(
              spreadRadius: 0.1,
                blurRadius: 5,color: Colors.black,offset: Offset(1,3))]
        ),
        child: child,
      ),
    );
  }
}


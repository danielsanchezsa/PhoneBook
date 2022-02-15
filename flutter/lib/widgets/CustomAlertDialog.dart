import 'package:flutter/material.dart';



class CustomAlertDialog extends StatelessWidget {
  final String title;
  final String? okButtonText;
  final Widget? subtitle;
  final List<Widget>? actions;
  final bool customActions, showCancelButton;

  final void Function()? onPressed, onCancelPressed;

  CustomAlertDialog(
      {required this.title,
        this.okButtonText,
        this.subtitle,
        this.actions,
        this.customActions = false,
        this.onPressed,
        this.showCancelButton = true,
        this.onCancelPressed,

      });


  @override
  Widget build(BuildContext context) {
    if(customActions){
      return AlertDialog(
        title: Text(okButtonText ?? title),
        content: subtitle,
        actions:actions,

      );
    }else{
      return AlertDialog(

        title: Text(title),
        content: subtitle,
        actions:[
          TextButton(onPressed: onPressed!, child: Text('ok')),
          if(showCancelButton)TextButton(child: Text('Cancel'), onPressed: onCancelPressed!),

        ],

      );
    }
  }
}

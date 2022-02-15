import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

// ignore: must_be_immutable
class CustomTextField extends StatefulWidget {
  final String hintText;
  final String labelText;
  TextInputType? keyboardType;
  int? maxLines;

  final Function(String val) function;
  final bool underLine;
  final initialValue;
  final limit;

  CustomTextField(
      {this.limit = 10000,
        this.initialValue = '',
        this.underLine = true,
        required this.function,
        this.hintText = "",
        this.labelText = "",

        this.keyboardType,
        this.maxLines});

  @override
  _CustomTextFieldState createState() => _CustomTextFieldState();
}

class _CustomTextFieldState extends State<CustomTextField> {
  final FocusNode myFocusNode = FocusNode();

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      inputFormatters: [
        LengthLimitingTextInputFormatter(widget.limit),
      ],
      initialValue: widget.initialValue,
      onChanged: (value) {
        widget.function(value);
      },
      maxLines: widget.maxLines,
      focusNode: myFocusNode,
      cursorColor: Colors.blueAccent,
      keyboardType: widget.keyboardType,
      decoration: InputDecoration(
        border: !widget.underLine
            ? OutlineInputBorder(
          borderRadius: BorderRadius.circular(50),
        )
            : null,
        focusedBorder: UnderlineInputBorder(
          borderSide: BorderSide(color: Colors.blueAccent),
        ),
        hintText: widget.hintText,
        labelText: widget.labelText,
        labelStyle: TextStyle(
          color: Colors.grey,

        ),
      ),
    );
  }
}
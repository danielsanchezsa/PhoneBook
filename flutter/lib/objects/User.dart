class User{
  String firstName, lastName, phone;
  DateTime dateAdded;

  User({required this.firstName,required this.lastName, required this.phone, required this.dateAdded});

  void editUser(User user){
    firstName = user.firstName;
    lastName = user.lastName;
    phone = user.phone;
  }

}
class Contact {
  constructor(
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    phonenumber,
    email
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phonenumber = phonenumber;
    this.email = email;
  }
}
module.exports = Contact;

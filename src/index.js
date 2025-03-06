const AddressBook = require("./services/AddressBook");
const Contact = require("./models/Contact");

const addressBook = new AddressBook();

try {
  const contact1 = new Contact(
    "Sejal ",
    "Chouhan",
    "Bhopal",
    "India",
    "In",
    "3245",
    "1234567890",
    "helloworld123@gmail.com"
  );
  console.log(addressBook.addContact(contact1));
  console.log(addressBook.getAllContacts());
} catch (error) {
  console.error("Error:", error.message);
}

try {
  const invalidContact = new Contact(
    "Bulbul",
    "Rai",
    "abctt",
    "In",
    "I",
    "100A01",
    "12345",
    "invalid-email"
  );
  console.log(addressBook.addContact(invalidContact));
} catch (error) {
  console.error("Error:", error.message);
}

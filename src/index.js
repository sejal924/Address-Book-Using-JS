const AddressBook = require("./services/AddressBook");
const Contact = require("./models/Contact");

const addressBook = new AddressBook();

try {
  const contact1 = new Contact(
    "Sejal",
    "Chouhan",
    "Bhopal",
    "India",
    "Madhya",
    "324567",
    "9996667778",
    "helloworld@gmail.com"
  );
  console.log(addressBook.addContact(contact1));

  const contact2 = new Contact(
    "Riya",
    "Verma",
    "Bhopal",
    "India",
    "Madhya",
    "100000",
    "6666699999",
    "chandalala@gmail.com"
  );
  console.log(addressBook.addContact(contact2));
  console.log("All Contacts Before editing", addressBook.getAllContacts());
  console.log(
    addressBook.editContact("Riya", {
      address: "Pipariya",
      city: "New York",
      phone: "9234567890",
    })
  );
  console.log("All Contacts After editing", addressBook.getAllContacts());
  console.log(addressBook.deleteContact("Riya"));
  console.log("All Contacts After Deleting:", addressBook.getAllContacts());
} catch (error) {
  console.error("Error:", error.message);
}

try {
  const invalidContact = new Contact(
    "Riya",
    "ver",
    "abc",
    "Ind",
    "I",
    "100A01",
    "12345",
    "invalid-email"
  );
  console.log(addressBook.addContact(invalidContact));
} catch (error) {
  console.error("Error:", error.message);
}

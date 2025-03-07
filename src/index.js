const AddressBook = require("./services/AddressBook");
const Contact = require("./models/Contact");

const addressBook = new AddressBook();

try {
  const contact1 = new Contact(
    "Sejal",
    "Chouhan",
    "Bhopal",
    "India",
    "Madhya Pradesh",
    "462001",
    "9876543210",
    "helloworld@gmail.com"
  );
  console.log(addressBook.addContact(contact1));

  const contact2 = new Contact(
    "Riya",
    "Verma",
    "Bhopal",
    "India",
    "Madhya Pradesh",
    "462002",
    "9564873210",
    "chandalala@gmail.com"
  );
  console.log(addressBook.addContact(contact2));

  console.log("All Contacts Before editing", addressBook.getAllContacts());
  console.log(
    addressBook.editContact("Riya", {
      address: "Raura",
      city: "London",
      phone: "9234567890",
    })
  );
  console.log("All Contacts After editing", addressBook.getAllContacts());
  console.log(addressBook.deleteContact("Ramu"));
  console.log("All Contacts After Deleting:", addressBook.getAllContacts());
  console.log("Total Contacts:", addressBook.countContacts());

  const duplicateContact = new Contact(
    "Riya",
    "Verma",
    "Bhopal",
    "India",
    "Madhya Pradesh",
    "462001",
    "9876543270",
    "helloiworld@gmail.com"
  );
  console.log(addressBook.addContact(duplicateContact));
} catch (error) {
  console.error("Error:", error.message);
}

try {
  const invalidContact = new Contact(
    "Ma",
    "Pa",
    "Ind",
    "India",
    "MP",
    "100001",
    "12345",
    "invalid-email"
  );
  console.log(addressBook.addContact(invalidContact));
} catch (error) {
  console.error("Error:", error.message);
}

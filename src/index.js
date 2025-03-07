const AddressBook = require("./services/AddressBook");
const Contact = require("./models/Contact");

const addressBook = new AddressBook();
// console.log(Object.getOwnPropertyNames(AddressBook.prototype));

try {
  const contact1 = new Contact(
    "Sejal",
    "Chouhan",
    "Aanand Nagar",
    "Bhopal",
    "Madhya Pradesh",
    "462001",
    "9876543210",
    "helloworld@gmail.com"
  );
  console.log(addressBook.addContact(contact1));

  const contact2 = new Contact(
    "Bulbul",
    "Patel",
    "Narela",
    "Bhopal",
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
      phone: "9284567890",
    })
  );
  console.log("All Contacts After editing", addressBook.getAllContacts());
  console.log(addressBook.deleteContact("Riya"));
  console.log("All Contacts After Deleting:", addressBook.getAllContacts());
  console.log("Total Contacts:", addressBook.countContacts());

  const duplicateContact = new Contact(
    "Sejal",
    "Chouhan",
    "Aanand Nagar",
    "Bhopal",
    "Madhya Pradesh",
    "462033",
    "9876559210",
    "helloworldrt@gmail.com"
  );
  console.log(addressBook.addContact(duplicateContact));

  console.log("Contacts in India:");
  console.log(addressBook.searchByCityOrState("Bhopal"));
  console.log("Viewing Persons by City or State:");
  console.log(addressBook.viewPersonsByCityOrState());
} catch (error) {
  console.error("Error:", error.message);
}

try {
  const invalidContact = new Contact(
    "Bulb",
    "Pate",
    "abcd",
    "In",
    "I",
    "109A01",
    "123445",
    "Invalid-email"
  );
  console.log(addressBook.addContact(invalidContact));
} catch (error) {
  console.error("Error:", error.message);
}

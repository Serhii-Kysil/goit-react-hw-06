import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "../redux/contactsSlice";
import { setFilter } from "../redux/filtersSlice";
import { lazy, Suspense } from "react";
import { Loader } from "./Loader/Loader";
const ContactForm = lazy(() => import("./ContactForm/ContactForm"));
const ContactList = lazy(() => import("./ContactList/ContactList"));
const SearchBox = lazy(() => import("./SearchBox/SearchBox"));

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div>
        <Suspense fallback={<Loader />}>
          <h1>Phonebook</h1>
          <ContactForm onAddContact={handleAddContact} />
          <SearchBox value={filter} onChange={handleFilterChange} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={handleDeleteContact}
          />
        </Suspense>
      </div>
    </>
  );
}

export default App;

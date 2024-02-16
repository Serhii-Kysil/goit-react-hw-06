import { lazy, Suspense } from "react";
import { Loader } from "./Loader/Loader";
const ContactForm = lazy(() => import("./ContactForm/ContactForm"));
const ContactList = lazy(() => import("./ContactList/ContactList"));
const SearchBox = lazy(() => import("./SearchBox/SearchBox"));

function App() {
  return (
    <>
      <div>
        <Suspense fallback={<Loader />}>
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </Suspense>
      </div>
    </>
  );
}

export default App;

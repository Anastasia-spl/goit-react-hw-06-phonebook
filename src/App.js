import Section from './components/Section';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactsList';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <Container><h1>Phonebook</h1></Container>
        <Section title="Add contact:">
            <ContactForm />
        </Section>
        <Section>
            <Filter  />
        </Section>
        <Section title="Contacts">
            <ContactList />
        </Section>
    </div>
  );
}

export default App;

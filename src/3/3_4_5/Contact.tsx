import { ContactType } from './App';

export default function Contact({ contact, expanded, onToggleExpanded }: { contact: ContactType, expanded: boolean, onToggleExpanded: () => void }) {
  return (
    <>
      <p><b>{contact.name}</b></p>
      {expanded &&
        <p><i>{contact.email}</i></p>
      }
      <button onClick={onToggleExpanded}>
        {expanded ? 'Hide' : 'Show'} email
      </button>
    </>
  );
}

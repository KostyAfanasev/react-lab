import { useState } from 'react';
import Contact from './Contact';

export default function ContactList() {
  const [reverse, setReverse] = useState(false);
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  const toggleExpanded = (id: number) => {
    setExpandedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <>
      <label>
        <input
          type="checkbox"
          //value={reverse}
          onChange={e => {
            setReverse(e.target.checked)
          }}
        />{' '}
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map((contact) =>
          <li key={contact.id}>
            <Contact
              contact={contact}
              expanded={expandedIds.has(contact.id)}
              onToggleExpanded={() => toggleExpanded(contact.id)}
            />
          </li>
        )}
      </ul>
    </>
  );
}

export type ContactType = {
  id: number;
  name: string;
  email: string;
}

const contacts: ContactType[] = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Bob', email: 'bob@mail.com' },
  { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];

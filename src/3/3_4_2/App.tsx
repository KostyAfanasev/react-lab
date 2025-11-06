import { useState } from 'react';

export default function App() {
  const [reverse, setReverse] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );

  if (reverse) {
    return (
      <>
        <Field label="Last name" text={lastName} onChange={setLastName}/>
        <Field label="First name" text={firstName} onChange={setFirstName}/>
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field label="First name" text={firstName} onChange={setFirstName}/>
        <Field label="Last name" text={lastName} onChange={setLastName}/>
        {checkbox}
      </>
    );
  }
}

function Field({ label, text, onChange }: { label: string, text: string, onChange: (text: string) => void }) {
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
}



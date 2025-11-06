import { useState } from 'react';

export default function EditProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState('Taylor');
    const [lastName, setLastName] = useState('Swift');

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        setIsEditing(!isEditing);
    };

    const handleFirstNameChange = (e: any) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e: any) => {
        setLastName(e.target.value);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                First name:{' '}
                {isEditing ? (
                    <input
                        id="firstNameInput"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                ) : (
                    <b id="firstNameText">{firstName}</b>
                )}
            </label>
            <label>
                Last name:{' '}
                {isEditing ? (
                    <input
                        id="lastNameInput"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                ) : (
                    <b id="lastNameText">{lastName}</b>
                )}
            </label>
            <button type="submit" id="editButton">
                {isEditing ? 'Save Profile' : 'Edit Profile'}
            </button>
            <p id="helloText">
                Hello {firstName} {lastName}!
            </p>
        </form>
    );
}
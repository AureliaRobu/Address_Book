import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Contact = {
  name: string;
  telephone: string;
};

function AddressBookForm() {
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [contacts, setContacts] = useState<Contact[]>([]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleTelephoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelephone(e.target.value);
  };

  function handleAddContact() {
    if (name && telephone) {
      setContacts((prevContacts) => [...prevContacts, { name, telephone }]);
      setName('');
      setTelephone('');
    }
  }

  return (
    <div className="max-w-md mx-auto mt-4 p-4 border border-gray-300 rounded-lg shadow">
      <div className="mb-4">
        <label htmlFor="name" className="block font-semibold mb-2">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Name"
          />
        </label>
      </div>
      <div>
        <label htmlFor="telephone" className="block font-semibold mb-2">
          Telephone:
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={telephone}
            onChange={handleTelephoneChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Telephone"
          />
        </label>
      </div>
      <button
        type="button"
        onClick={handleAddContact}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-600"
      >
        Add Contact
      </button>
      {contacts.length > 0 && (
        <div className="mt-4">
          <h2 className="font-semibold">Contacts:</h2>
          <ul className="mt-2">
            {contacts.map((contact) => (
              <li key={uuidv4()} className="border-t py-2">
                <span className="font-semibold">{contact.name}</span> -{' '}
                {contact.telephone}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AddressBookForm;

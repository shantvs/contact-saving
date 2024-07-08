// src/App.js
import React, { useState } from 'react';
import supabase from './supabaseClient';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('contacts')
      .insert([{ name, email }]);

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage('Contact added successfully!');
      console.log('Inserted data:', data); // Use the data variable
      setName('');
      setEmail('');
    }
  };

  return (
    <div>
      <h1>Add Contact</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add Contact</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;

import React, { useState } from 'react';

const App = () => {
  const [keywords, setKeywords] = useState('');
  const [idea, setIdea] = useState('');

  const generateIdea = () => {
    const words = keywords.toLowerCase().split(/,|\s+/).map(w => w.trim()).filter(Boolean);

    if (words.includes('phoenix') && words.includes('freedom')) {
      setIdea('A phoenix bursting into flight, wings shaped like flames, symbolizing freedom through rebirth.');
    } else if (words.includes('fire') && words.includes('freedom')) {
      setIdea('Flames breaking chains — fire as the force of liberation.');
    } else {
      setIdea('An abstract symbol combining your chosen themes in a unique tattoo motif.');
    }
  };

  return (
    <div style={{ padding: 30, fontFamily: 'sans-serif' }}>
      <h1>Tattoo Idea Generator</h1>
      <textarea
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Enter keywords like fire, phoenix, freedom..."
        rows={4}
        style={{ width: '100%', marginBottom: 10 }}
      />
      <br />
      <button onClick={generateIdea} style={{ padding: '10px 20px' }}>Generate</button>
      {idea && (
        <div style={{ marginTop: 20, padding: 10, border: '1px solid #ccc', borderRadius: 8 }}>
          <strong>Idea:</strong> {idea}
        </div>
      )}
    </div>
  );
};

export default App;
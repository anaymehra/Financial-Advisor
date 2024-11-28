import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './FinancialAdvisor.css';

function FinancialAdvisor() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error('Failed to get response');
      }

      const data = await res.json();
      setResponse(data.message);
    } catch (err) {
      setError('Failed to get advice. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="financial-advisor">
      <h2>Ask for Financial Advice</h2>
      <form onSubmit={handleSubmit} className="advice-form">
        {/* <label htmlFor="financial-question" className="sr-only">Enter your financial question</label> */}
        <input
          id="financial-question"
          type="text"
          placeholder="Enter your financial question..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={loading}
          className="advice-input"
        />
        <button type="submit" disabled={loading} className="advice-button">
          {loading ? 'Getting Advice...' : 'Get Advice'}
        </button>
      </form>
      {error && <p className="error" role="alert">{error}</p>}
      {response && (
        <div className="response">
          <h3>Financial Advice:</h3>
          <div className="markdown-content">
            <ReactMarkdown>{response}</ReactMarkdown>
          </div>
        </div>
      )}
      <div className="contact-info">
        <p>
          Not satisfied? Talk with us personally at{' '}
          <a href="tel:+1234567890">+1234567890</a>
        </p>
      </div>
    </div>
  );
}

export default FinancialAdvisor;


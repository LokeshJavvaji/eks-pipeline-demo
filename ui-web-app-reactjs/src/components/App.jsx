import React, { useState } from 'react';

const App = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleApiCall = async (e) => {
    const apiName = e.target.name;
    const url = `/api/${apiName}`; // Using the relative path as per your Ingress configuration

    try {
      setLoading(true);
      const res = await fetch(url);
      const json = await res.json();
      setResponse(json);
      setError(null);
    } catch (err) {
      setError('An error occurred while fetching the data.');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="pv5 bg-gold black-80">
        <h1 className="mt0 mb1 tc">Web App</h1>
        <div className="tc ttc">Microservices-Architect-Config-Starter</div>
        <div className="tc ttc">Sample Microservice Calls</div>
      </header>
      <div className="pt4 pb1 tc">
        Go save the world with JavaScript
        <br/> <br/> <br/>
        <button name="shoe" onClick={handleApiCall} style={{margin:'0px 10px'}}>Shoes</button>
        <button name="offer" onClick={handleApiCall} style={{margin:'0px 10px'}}>Offers</button>
        <button name="cart" onClick={handleApiCall} style={{margin:'0px 10px'}}>Cart</button>
        <button name="wishlist" onClick={handleApiCall} style={{margin:'0px 10px'}}>Wishlist</button>
        <br/> <br/> <br/>
        {loading && <p>Loading...</p>}
        {response && (
          <div>
            <p>API Response:</p>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
        {error && (
          <div>
            <p>Error:</p>
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </div>
        )}
      </div>
    </>
  );
};

export default App;

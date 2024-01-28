import React, {useState, useEffect} from 'react'

const App = () => {

  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [displayData, setDisplayData] = useState({url:''})
  const [details, setDetails] = useState('');

  
  const getUserGeolocationDetails = () => {
    fetch("/myip")
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setDetails(data.url)
        });
  }

  useEffect(()=>{
    getUserGeolocationDetails()
  },[])
  const [displayedDetails, setDisplayedDetails] = useState('');

  const shoesData = [
    {
      id: 1,
      brand: 'Nike',
      model: 'Air Max',
      price: 99.99,
      color: 'Black',
    },
    {
      id: 2,
      brand: 'Adidas',
      model: 'Ultra Boost',
      price: 129.99,
      color: 'White',
    },
    {
      id: 3,
      brand: 'Puma',
      model: 'RS-X',
      price: 79.99,
      color: 'Red',
    },
    {
      id: 4,
      brand: 'New Balance',
      model: '990v5',
      price: 149.99,
      color: 'Grey',
    },
  ];

  const offersData = [
    {
      id: 1,
      title: 'Back to School Sale',
      discount: '20% off on all shoes',
      expiryDate: '2024-09-30',
    },
    {
      id: 2,
      title: 'Summer Clearance',
      discount: 'Buy one, get one 50% off',
      expiryDate: '2024-08-15',
    },
  ];

  const cartData = [
    {
      id: 1,
      brand: 'Reebok',
      model: 'Classic Leather',
      price: 69.99,
      color: 'Blue',
      quantity: 1,
    },
  ];

  const wishlistData = [
    {
      id: 1,
      brand: 'Vans',
      model: 'Old Skool',
      price: 59.99,
      color: 'Black/White',
    },
    {
      id: 2,
      brand: 'Converse',
      model: 'Chuck Taylor All Star',
      price: 49.99,
      color: 'Red',
    },
  ];

  const handleButtonClick = (category) => {
    switch (category) {
      case 'shoes':
        setDisplayedDetails(JSON.stringify(shoesData, null, 2));
        break;
      case 'offers':
        setDisplayedDetails(JSON.stringify(offersData, null, 2));
        break;
      case 'cart':
        setDisplayedDetails(JSON.stringify(cartData, null, 2));
        break;
      case 'wishlist':
        setDisplayedDetails(JSON.stringify(wishlistData, null, 2));
        break;
      default:
        setDisplayedDetails('');
    }
  };


  return (
    <>
      <header className="pv5 bg-gold black-80">
        <h1 className="mt0 mb1 tc">Web App</h1>
        <div className="tc ttc">microservices-architect-config-starter</div>
        <div className="tc ttc">Sample Microservice calls</div>
      </header>
      <div>
      <Button label="Shoes Information" onClick={() => handleButtonClick('shoes')} />
      <Button label="Offers Information" onClick={() => handleButtonClick('offers')} />
      <Button label="Cart Information" onClick={() => handleButtonClick('cart')} />
      <Button label="Wishlist Information" onClick={() => handleButtonClick('wishlist')} />

      <div>
        <h2>Displayed Details:</h2>
        <pre>{displayedDetails}</pre>
      </div>
    </div>
    </>
  )
}

export default App
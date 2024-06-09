import React,{useState, useEffect} from 'react'

const MtnCalculation = () => {

    const [items] = useState([
        { id: 2, name: '2GB', price: 10.5 },
        { id: 3, name: '3GB', price: 15.5 },
        { id: 4, name: '4GB', price: 19 },
        { id: 5, name: '5GB', price: 23.5 },
        { id: 8, name: '8GB', price: 33.5 },
        { id: 10, name: '10GB', price: 40 },
        { id: 15, name: '15GB', price: 57 },
        { id: 20, name: '20GB', price: 71 },
        { id: 30, name: '30GB', price: 109 },
        { id: 40, name: '40GB', price: 145 },
        { id: 50, name: '50GB', price: 167 },
        { id: 100, name:'100GB', price: 325 },
      ]);
    
      // State to manage the input and selected items
      const [inputIds, setInputIds] = useState('');
      const [selectedItems, setSelectedItems] = useState([]);

      useEffect(() => {
        const savedInputIds = localStorage.getItem('inputIds');
        const savedSelectedItems = localStorage.getItem('selectedItems');
    
        if (savedInputIds) {
          setInputIds(savedInputIds);
        }
    
        if (savedSelectedItems) {
          setSelectedItems(JSON.parse(savedSelectedItems));
        }
    
        const timer = setInterval(() => {
          setDate(new Date());
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);
    
      // Function to handle the input change
      const handleInputChange = (event) => {
        setInputIds(event.target.value);
      };
    
      // Function to parse the input and update selected items
      const parseAndSetItems = () => {
        const ids = inputIds.split('+').map(id => parseInt(id.trim(), 10));
        const selected = items.filter(item => ids.includes(item.id));
        setSelectedItems(selected);
      };
    
      // Function to handle key press events in the input field
      const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          parseAndSetItems();
        }
      };

      const [date, setDate] = React.useState(new Date());

      React.useEffect(() => {
        const timer = setInterval(() => {
          setDate(new Date());
        }, 1000);
      },[]);

        // Function to copy results to clipboard
       const copyToClipboard = () => {
          const resultText = selectedItems.map(item => `${item.name} - GH₵${item.price.toFixed(2)}`).join('\n') + `\nTotal: GH₵${selectedTotalPrice.toFixed(2)}` + `\nDate and Time: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
          navigator.clipboard.writeText(resultText).then(() => {
            alert('Copied to clipboard');
          });
        };

    
      // Calculate the total price of the selected items
      const selectedTotalPrice = selectedItems.reduce((total, item) => total + item.price, 0);
  return (
    <div>
    <div className='text-center rounded w-full mt-7'>
      <p className='text-xs text-yellow-700 font-bold'> 
        DAILY SALES CALCULATOR FOR MTN <br /> TAP BUTTON TO EXIT
      </p>
      <div className='shadow-lg mx-5 rounded-lg border py-5 mt-6'>
        <p>Enter your sales package <br /> separated with +</p>
        <input
          type="text"
          value={inputIds}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="10 + 7 + 9 + 6"
          className=" border-yellow-400 border-2 p-2 mr-2 rounded text-center mt-4 bg-transparent "
        />
        <div className='flex flex-col justify-center items-center my-5 text-center '>
          <button 
            className='bg-blue-700 text-white p-3 my-6 rounded-md hidden'
            onClick={parseAndSetItems}
          >
            Calculate Sales
          </button>
        </div>
      </div>
      <div className='shadow-lg mx-5 rounded-lg border py-5 mt-7'>
        <div className='flex text-center items-center justify-center font-bold underline'>
          <p>Package</p>
          <p className='ml-5'>Prices</p>
        </div>
        {selectedItems.length > 0 && (
          <div>
            <ul>
              {selectedItems.map((item) => (
                <li key={item.id}>
                  {item.name} ------- &#8373;{item.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <h3 className=' my-3'>Total: GH&#8373; {selectedTotalPrice.toFixed(2)}</h3>
                
              <h4 className=' text-red-600'>{`${date.toLocaleDateString()}    ${date.toLocaleTimeString()}`}</h4>

              <button className=' bg-yellow-500 px-4 py-2 rounded-lg mt-2' onClick={copyToClipboard}>Copy</button>
          </div>
        )}
      </div>
    </div>
  </div>

  )
}

export default MtnCalculation
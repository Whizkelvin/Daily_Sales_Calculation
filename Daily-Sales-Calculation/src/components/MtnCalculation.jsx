import React,{useState} from 'react'

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
    
      // Calculate the total price of the selected items
      const selectedTotalPrice = selectedItems.reduce((total, item) => total + item.price, 0);
  return (
    <div>
    <div className='text-center rounded w-full mt-7'>
      <p className='text-xs text-yellow-700 font-bold'> 
        DAILY SALES CALCULATION FOR MTN <br /> TAP BUTTON TO EXIT
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
                  {item.name} ----- ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <h3>Total: GH&#8373; {selectedTotalPrice.toFixed(2)}</h3>
          </div>
        )}
      </div>
    </div>
  </div>

  )
}

export default MtnCalculation
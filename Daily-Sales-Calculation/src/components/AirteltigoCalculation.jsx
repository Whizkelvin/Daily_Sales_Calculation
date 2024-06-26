import React,{useState} from 'react'

const AirteltigoCalculation = () => {

    const [items] = useState([
        { id: 1, name: '1GB', price: 3.3 },
        { id: 2, name: '2GB', price: 6.5 },
        { id: 3, name: '3GB', price: 9.5 },
        { id: 4, name: '4GB', price: 13.5 },
        { id: 5, name: '5GB', price: 16.0 },
        { id: 6, name: '6GB', price: 19 },
        { id: 7, name: '7GB', price: 21 },
        { id: 8, name: '8GB', price: 25 },
        { id: 10, name: '10GB', price: 31 },
        { id: 15, name: '15GB', price: 45 },
        { id: 20, name: '20GB', price: 60 },
        { id: 30, name: '30GB', price: 89 },
        { id: 40, name: '40GB', price: 116 },
        { id: 50, name: '50GB', price: 145 },
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
    
      const [date, setDate] = React.useState(new Date());

      React.useEffect(() => {
        const timer = setInterval(() => {
          setDate(new Date());
        }, 1000);
      },[]);

      const [isCopy, setIsCopy] = useState("copy");

      const copyToClipboard = () => {
        const resultText = `AirtelTigo Data Sales\n\nPack  Price\n\n` + selectedItems.map(item => `${item.name} - GH₵${item.price.toFixed(2)}`).join('\n') + `\n\nTotal: GH₵${selectedTotalPrice.toFixed(2)}` + `\n\nOrder Placed on:\n${date.toLocaleDateString()} ${date.toLocaleTimeString()} \n\nMAKE PAYMENT TO \n053-790-5668\nJude Nii Djan Dodoo`;
        navigator.clipboard.writeText(resultText).then(() => {
          setTimeout(() => {
            setIsCopy("copied")
            setTimeout(() => {
              setIsCopy("copy")
            }, 2000)
          }, 200);
        });
      };

  return (
    <div>
      <div className='text-center rounded w-full mt-7'>
        <p className='text-xs text-red-700 font-bold'> 
          DAILY SALES CALCULATOR FOR AIRTELTIGO <br /> TAP BUTTON TO EXIT
        </p>
        <div className='shadow-lg mx-5 rounded-lg border py-5 mt-6'>
          <p>Enter your sales package <br /> separated with +</p>
          <input
            type="text"
            value={inputIds}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="10 + 7 + 9 + 6 + 4"
            className="border p-2 mr-2 rounded-md text-center mt-5 bg-transparent border-blue-700 border-2"
          />
          <div className='flex flex-col justify-center items-center my-5'>
            <button 
              className='bg-blue-700 text-white p-3 my-6 rounded-md hidden'
              onClick={parseAndSetItems}
            >
              Calculate Sales
            </button>
          </div>
        </div>
        <div className='shadow-lg rounded-lg border py-5 mt-7 mx-5'>
          <div className='flex text-center items-center justify-center font-bold underline  text-2xl font-extrabold text-red-700'>
            <p>Packages</p>
            <p className='ml-5'>Prices</p>
          </div>
          {selectedItems.length > 0 && (
            <div>
              <ul className=' text-xl font-extrabold'>
                {selectedItems.map((item) => (
                  <li key={item.id}>
                    {item.name} ------- &#8373;{item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
              <h3 className=' my-3 text-xl font-extrabold'>Total: GH&#8373; {selectedTotalPrice.toFixed(2)}</h3>

              <h3 className=' text-xl font-extrabold text-red-600'>Order Placed on <br /></h3>

              <h4 className=' text-blue-950 text-xl font-extrabold'>{`${date.toLocaleDateString()}    ${date.toLocaleTimeString()}`}</h4>

              <button className=' bg-blue-500 px-4 py-2 rounded-lg mt-2 ' onClick={copyToClipboard}>{isCopy}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AirteltigoCalculation
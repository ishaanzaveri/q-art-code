import React, {useEffect, useState} from 'react';

function Customers() {
    const [customers, setCustomers] = useState([]); 

    useEffect(() => {
        fetch('/api/customers')
        .then(res => res.json())
        .then(setCustomers);
    },[]);

  return (
    <div className="App">
      <h2>Hello World</h2>
        {/* {console.log(customers)} */}
        {customers.map(item => 
       <div key={item.id}> {item.firstName} {item.lastName}</div>)}
    </div>
  );
}



export default Customers;

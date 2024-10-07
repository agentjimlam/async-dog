import { useEffect, useState } from "react";
import axios from "axios";

function EffectsExample() {
  const [selectedId, setSelectedId] = useState(1);
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    let ignore = false;

    const getCustomer = async (id) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

      // Simulate a delay on loading the 1st customer
      if (selectedId === 1) {
        setTimeout(() => {

          // if the effect runs again, don't set this state because we are aborting it
          if (!ignore) setCustomer(response.data);
        }, 3000);
      } else {
        setCustomer(response.data);
      }
    };

    getCustomer(selectedId);

    // Cleanup function (optional)
    // runs when the component is unmounted or before the effect runs again
    return () => {
      ignore = true;
    };
  }, [selectedId]);

  return (
    <div>
      <h1>Effects Example</h1>
      <button onClick={() => setSelectedId(1)} disabled={selectedId === 1}>
        1 - Leanne
      </button>
      <button onClick={() => setSelectedId(2)} disabled={selectedId === 2}>
        2 - Ervin
      </button>
      <button onClick={() => setSelectedId(3)} disabled={selectedId === 3}>
        3 - Clementine
      </button>

      {customer && (
        <div
          style={{
            marginTop: 20,
            border: "1px solid #eee",
            borderRadius: 5,
            backgroundColor: "white",
            padding: 10,
            width: 200,
          }}
        >
          <p>{customer.name}</p>
          <p>{customer.email}</p>
        </div>
      )}
    </div>
  );
}

export default EffectsExample;

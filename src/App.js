//import logo from './logo.svg';
//import './App.scss';
import './App.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
      <style type="text/css">
        {`
    .btn-flat {
      background-color: purple;
      color: grey;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style>

        <p >
          Hey.
        </p>
        <Button variant="flat" size="xxl" onClick={() => setIsOpen(true)}>
        YOU
      </Button>
      {isOpen && (
       <div>
        <div>
          know
        </div>

        <Button  variant="flat" size="xxl" onClick={() => setIsOpen(false)}>
         I Love You
        </Button>
       </div>
         )}
         

       
      </header>
    </div>
  );
}

export default App;



/*<style type="text/css">
        {`
    .btn-flat {
      background-color: gray;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style> */
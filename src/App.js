//import logo from './logo.svg';

import { useState } from 'react';
import { supabase } from './supabaseClient';
import logo from './willow.jpg';
import './App.css';

function Library() {
  const [myBooks, setMyBooks] = useState([]);
  async function getBooks() {
    let { data: books, error } = await supabase
      .from('books')
      .select('*')
    setMyBooks(books);
  }
  getBooks();
  
  return (
    <table className="favorite-books">
      {
        myBooks.map(b => (
          <tr>
            <td>{b.title}</td>
            <td>{b.author}</td>
            <td>{b.isbn}</td>
          </tr>
        ))
      }
    </table>
  )
}



const species = [
  {id: 1, title: 'Weeping Willow', theme: 'deciduous', isAvailable: true},
  {id: 1, title: 'Spruce', theme: 'evergreen', isAvailable: false},
  {id: 1, title: 'White Oak', theme: 'deciduous', isAvailable: true},
];

function TreeTypes() {
  const listTrees = species.map(trees =>
    <li 
      key={trees.id}
      style={{
        color: trees.isAvailable ? 'yellow' : 'green'
      }}
      >
        {trees.title}
      </li>
    );
  return (
    <ul>{listTrees}</ul>
  )
}

const willow = {
  name: 'Weeping Willow',
  kingdom: 'Plantae',
  binomial: 'Salix babylonica',
  image: logo,
  width: '350px',
  height: '400px'
};

function WillowAdvertisement() {
  return (
    <div>
      <h2>{willow.name} ({willow.binomial})</h2>
      <p>{willow.kingdom}</p>
      <img 
        className="willowCover"
        src={willow.image}
        alt={willow.name}
        style={{
          width: willow.width,
          height: willow.height
        }}
      />
    </div>
  );
}


function OrderButton() {
  const [count, setCount] = useState(0);
  function doMagic() {
    setCount(count + 1);
  }
  return (
    <div>
      <h3>Click here to place an order!</h3>
      <button onClick={doMagic}>Order {count}</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library />
        <TreeTypes />
        <WillowAdvertisement />
        <OrderButton />
      </header>
    </div>
  );
}


export default App;

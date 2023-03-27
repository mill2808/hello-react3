//import logo from './logo.svg';
import logo from './willow.jpg';
import './App.css';

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
        alt={willow.name + ' cover'}
        style={{
          width: willow.width,
          height: willow.height
        }}
      />
    </div>
  );
}


function OrderButton() {
  return (
    <div>
      <h3>Click here to place an order!</h3>
      <button>Order</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TreeTypes />
        <WillowAdvertisement />
        <OrderButton />
      </header>
    </div>
  );
}


export default App;

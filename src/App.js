const styles = {
  color: 'blue',
  fontStyle: 'italic',
}

const str = <h1 style={ styles }>Hello JSX</h1>

const cars = [
  'toyota',
  'honda',
  'civic'
]

// function greate(name){
//   return `Hello func ${name}`
// }

function App() {
  return (
    <div className="App">
      Grocery List:
      <ul>
         {cars.map(e => <li>{ e }</li>)}
      </ul>
    </div>
  );
}

export default App;

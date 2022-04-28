const styles = {
  color: 'blue',
  fontStyle: 'italic',
}

const str = <h1 style={ styles }>Hello JSX</h1>

const error = true

// function greate(name){
//   return `Hello func ${name}`
// }

function App() {
  return (
    <div className="App">
      {str} 
      {/* {greate('Taste that ger')} */}
      <label> name <input /></label>
      {(error) ? <div style={{ color: 'red'}}>Invalid name </div> : null}
    </div>
  );
}

export default App;

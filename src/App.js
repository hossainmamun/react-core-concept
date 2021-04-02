import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function App() {
  const productList = [
    {product: "iphone11Pro", price: "$999"},
    {product: "macbookPro15", price: "$1500"},
    {product: "samsung", price: "$700"},
    {product: "hpNoteBook1000", price: "$700"},
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <p style = {{color: "aquamarine", fontSize: "32px", marginTop: "30px", textTransform: "capitalize"}}>hi i am world no-1 react developer</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
      
      <header className="app-header-player">
        <Player name="messi" club="bersalona" salary="1 million" position="forward"></Player>
        <Player name="ronaldo" club="jubentus" salary="1.5 million" position="winger"></Player>
        <Player name="m.sala" club="liverpool" salary=".5 million" position="mid-fielder"></Player>
        <Player name="sadio mane" club="liverpool" salary=".45 million" position="forward"></Player>
        <Player name="neymer" club="psg" salary="1.3 million" position="mid-fielder"></Player>
        <Player name="ozil" club="manchester united" salary=".9 million" position="mid-fielder"></Player>
      </header>

      <header className="app-header-product">
        <Product productName={productList[0]}></Product>
        <Product productName={productList[1]}></Product>
        <Product productName={productList[2]}></Product>
        <Product productName={productList[3]}></Product>
      </header>
    </div>
  );
}

// static data pass..
// declare component. [function is the easiest way to declare component]
// in this function/component is return html tag.
function Person() {
  // apply style..
  const personStyle = {
    border: "4px solid red",
    margin: "10px",
    padding: "15px",
    backgroundColor: "orange",
    color: "#fff",
  }
  return (
    <div style = {personStyle}>
      <h4>developer name : hossain mamun</h4>
      <h4>id : 01234</h4>
      <p>skill : font end developer</p>
    </div>
  )
}

// dynamic data pass..
// note: [must pass (props) parameter in component/function]
function Player(props){
  // apply style..
  const playerStyle = {
    color: "#000",
    textTransform: "capitalize",
    backgroundColor: "#00cccc",
    margin: "15px",
    padding: "10px"    
  }
  return (
    <div style= {playerStyle}>
      <h3 style={{margin: "10px"}}>players name: {props.name}</h3>
      <h5 style={{margin: "10px"}}>club: {props.club}</h5>
      <p style={{margin: "10px"}}>salary: {props.salary}</p>
      <p style={{margin: "10px"}}>position: {props.position}</p>
    </div>
  )
}


// Pass object to components and access object
function Product(props){
  // console.log(props)
  // applying object destructuring
  const {product, price} = props.productName;
  // apply style
  const productStyle = {
    color: "#000",
    textTransform: "capitalize",
    backgroundColor: "#FFDAB9	",
    margin: "15px",
    padding: "10px"    
  }
  // apply style for button
  const btnStyle = {
    color: "#fff",
    backgroundColor: "#000",
    padding: "10px",
    fontSize: "18px",
    textTransform: "capitalize",
    border: "none",
    cursor: "pointer",
  }
  return (
    <div style={productStyle}>
      <h3>product-name: {product}</h3>
      <h5>price: {price}</h5>
      <button style={btnStyle}>buy now</button>
    </div>
  )
}

export default App;

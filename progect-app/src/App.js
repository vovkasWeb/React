import './App.css';
import Header from './Header/Header';
import Test	from './Test';
import Goods from './Goods';

const headerData={
	siteName:"About React" ,
	nav:[
		{"link": "nav1", "text" : "my link"},
		{"link": "nav2", "text" : "my link 2"},
		{"link": "nav3", "text" : "my link 3"},
	]
}
const goods =[
	{"title": "apple","cost": 330, "image" : "https://cdn4.iconfinder.com/data/icons/fruits-79/48/04-apple-64.png"},
	{"title":"pear","cost": 530, "image" : "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Pear-64.png"},
]
function App() {
  return (
    <>
	 <Header data={headerData} />
	 <Test/>
	 {
		goods.map(item=> <Goods key={item.title} title={item.title} cost={item.cost} image={item.image}/>)
	 }
	 {/* <Goods title={goods[0].title} cost={goods[0].cost} image={goods[0].image}/> */}
	 </>
  );
}

export default App;

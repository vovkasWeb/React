function Goods(props){
	return(
<div className="goods-block" key={props.title}>
	<h3>{props.title}</h3>
	<p>{props.cost}</p>
	<img src={props.img} alt={props.title} />
</div>
	);
}

export default Goods;
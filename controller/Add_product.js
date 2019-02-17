const path=require('path');
let inner_data=[];
const fs=require('fs');
// const file_=path.dirname(process.mainModule.filename);
let Product_data=require("../modal/all_file_data.js");
let Cart=require("../modal/cart.js");
console.log(Product_data)
exports.add_product_data_controller=(req,res,next)=>{
	let product=new Product_data(req.body.Title,req.body.Image,req.body.price,req.body.description);	
	product.save();
	// product.fetch();
	setTimeout(()=>{
		let ert=Product_data.fetch((mobile)=>{
			inner_data=mobile;
		});
	},300);
	res.redirect("/");
}
exports.order_controller=(req,res,next)=>{
	res.render("order");
	res.end();
}
exports.admin_product_controller=(req,res,next)=>{
	res.render("Admin_product");
	res.end();
}
exports.cart_controller=(req,res,next)=>{
	res.render("cart");
	res.end();
}
exports.carts_controller=(req,res,next)=>{
	let id=req.body.productId;
	let Price=req.body.price;
	console.log(Cart.cart(id,Price));
	// cart.cart_add(id);
	res.redirect("cart");
	res.end();
}
exports.products_controller=(req,res,next)=>{
	res.render("product");
	res.end();
}
exports.product_controller=(req,res,next)=>{
	const uid=req.params.productId;
	const data=req.params.dat;
	console.log("hello my id is->"+uid);
	console.log("hello my data is->"+data);//amathi data te lidha che
	Product_data.fetch_Id_product(uid,detail=>{
		console.log("my identifieable "+detail.uid);
		res.render("product",{id_data:detail});
		res.end();
	});//problem occur
	// res.redirect('/shop');	
}
exports.delete=(req,res,next)=>{
	console.log('delete function is start');
	res.end();
}
exports.shop_controller=(req,res,next)=>{
	
	console.log(inner_data.length);
	console.log(inner_data);
	if(inner_data.length==0)
	{
		console.log("::");
		let file=path.join(path.dirname(process.mainModule.filename),"data","package.json");		
		console.log(file);
		fs.readFile(file,(err,filecontent)=>{
			inner_data=JSON.parse(filecontent);
			console.log(inner_data);		
		});
		
	}
	//problem case
	res.render("shop",{data:inner_data});
	res.end();
}
exports.home_controller=(req,res,next)=>{
	res.render("index");
	res.end();
}
exports.add_product_controller=(req,res,next)=>{
	res.render("Add_product");
	res.end();
}
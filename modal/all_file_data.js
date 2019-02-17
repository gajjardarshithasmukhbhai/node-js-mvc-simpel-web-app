const fs=require('fs');
const path=require('path');
let product=[];
// const getProductFile=(cb)=>{
// 	
// }
module.exports=class Product_data{
	constructor(Title,Image,price,description)//take the data
	{
		// super(); it's uses to call the parent class
		this.Title=Title;
		this.Image=Image;
		this.price=price;
		this.description=description;

		// console.log("--",this.Title,";;;");//jyare aa rite
		// call karso to value undefined avase but /
		
	}
	save()//save the data
	{
		var text = "";
  		var possible = "0123456qwemnbvclkjhsajo02889182789";
	  	for (var i = 0; i < 5; i++)
	  	{
	    	text += possible.charAt(Math.floor(Math.random() * possible.length))
		}

		this.uid=text;
		let file=path.join(path.dirname(process.mainModule.filename),"data","package.json");		
		console.log(file);
		fs.readFile(file,(err,filecontent)=>{
			JSON.parse(filecontent);
			if(err){
				console.log("error will be occur");
			}
			else{
				product.push({
					title:this.Title,
					Image:this.Image,
					price:this.price,
					description:this.description,
					uid:this.uid,
				});
				fs.writeFile(file,JSON.stringify(product,null,2),(err)=>{
					console.log(err);
				});
			}
		});
	}
	static fetch(cb)//get the data
	{
		const file_=path.join(path.dirname(process.mainModule.filename),"data","package.json");
		fs.readFile(file_,(err,filecontent)=>{
			return cb(JSON.parse(filecontent));
		});
	}
	static product_all_data(cb)
	{
		const file_=path.join(path.dirname(process.mainModule.filename),"data","package.json");
		fs.readFile(file_,(err,filecontent)=>{
			return cb(JSON.parse(filecontent));
		});	
	}
	static fetch_Id_product(id,cb)
	{
		//problem occur
		this.product_all_data(products=>{
			console.log("shardi",products);
			const product=products.find(p=>p.uid===id);
			// console.log(product,"</>");
			cb(product);
		});
	}
}
const fs=require('fs');
const path=require('path');
const json_file=path.join(path.dirname(process.mainModule.filename),"data","package.json");
let cart_data_find=[];
let totalprice=[];
module.exports=class Cart{
	static cart(id,Price)
	{
		fs.readFile(json_file/*file_name*/,(err,filecontent)=>{
			if(!err)
			{
				cart_data_find=JSON.parse(filecontent);
			}
			// console.log(">",cart_data_find);
			const check_data=cart_data_find.find(p=>p.uid==id);	
			
			if(check_data)
			{
				//problem
				//data ne sum karaana che 
				//use je add kare e
			}		
		});

	}
}
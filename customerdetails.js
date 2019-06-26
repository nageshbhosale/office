var express=require('express');
var app=express();

var c=function(req,res)
{
	
	var customer=[
	{customer_id:1000,customer_name:"ATOS",Address:"India",Token_ID:"5372845759",Token_Status:"Open"},
	{customer_id:1001,customer_name:"Alibaba",Address:"China",Token_ID:"5352645759",Token_Status:"Close"},
	{customer_id:1002,customer_name:"Apple",Address:"U.S.A",Token_ID:"5372898559",Token_Status:"Open"},
	{customer_id:1003,customer_name:"YOYO",Address:"Germany",Token_ID:"5625845759",Token_Status:"Close"},
	{customer_id:1004,customer_name:"TATA",Address:"India",Token_ID:"5372823559",Token_Status:"Open"},
];
	res.send(customer);
};

app.get('/customer',c);

var server=app.listen(8040,function()
{
   var host=server.address().address
   var port=server.address().port
   console.log("Myserver is listening at http://localhost:8040", host, port)
});
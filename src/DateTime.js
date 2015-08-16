// Given a date in string format, return the day it corresponds to.
exports.GetDay = function(dateString){
	var d=new Date(dateString);
   if(dateString===""||dateString==null||dateString==="invalid datestring"||d==="Invalid Date")
	   return "hello";
   else 
	   return d.getDay();
}


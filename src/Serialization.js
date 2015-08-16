exports.ParseNumber = function(str){
   var sign=1,key=0,sum=0,i=0;
   if(str==null)
	   return "hello";
   if(str[0]=='-')
   {
	   sign=-1;i=1;
   }
   while(i<str.length)
   {
      sum=sum*10+(str[i]-'0');
	  i++;
   }
   sum=sum*sign;
   return sum;
}

exports.ConvertNumberToString = function(num){
  var temp="";
  if(typeof(num)==='number')
     return temp+num;
  else
	 return temp; 
}

exports.ParseDate = function(str){
	var x;
   if(str===null)
	   return "hello";
   else
   {
	   x=new Date(str);
	   return x;
   }
}

exports.ConvertDateToString = function(dateValue){
	var temp="";
   return temp+dateValue;
}

//Parse a string containing a comma seperated sequence of numbers
// and return an array containing the numbers. Return NaN for invalid
// numbers in the string.
exports.ParseStringOfNumbers = function(str){
	var i=0,temp="",arr=new Array();
	if(typeof(str)==='string')
	{
	while(i<str.length)
	{
		temp="";
		while(str[i]!=','&&i<str.length)
		{
			temp=temp+str[i];
			i++;
		}
	  arr.push(parseInt(temp));
	  i++;
	}
	}
	else 
		arr=[];
	return arr;
}

exports.ConvertArrayOfNumbersToString = function(obj){
   var temp="";
   if(obj===[]||typeof(obj)==='string')
	   return "";
   else
	   return temp+obj;
}


exports.ConvertStringToObject = function(str){
	var x;
   if(str=="")
	   return null;
   else
   {
       try {
       x= JSON.parse(str);
    } catch (e) {
        return null;
    }
    return x;
   }
}

exports.ConvertObjectToString = function(obj){
	if(obj==="")
		return null;
	else
    return JSON.stringify(obj);
}



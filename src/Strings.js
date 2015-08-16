exports.ReverseString = function(str){
    var i,temp="";
	for(i=str.length-1;i>=0;i--)
	{
		temp=temp+str[i];
	}
	return temp;
}

// Given a string with lname,fname - return an array with the first names.
// Example: SplitString("Gates,Bill;Jobs,Steve;Page,Larry") should return
// an array ["Bill","Steve","Larry"]

exports.GetFirstNames = function(str){
	var temp="",arr=new Array();
	if(str!=null&&str!=";"&&str!="")
	{
	for(i=0;i<str.length;i++)
	{
		temp="";
		while(str[i]!=','&&i<str.length)
		{
			i++;
		}
		i++;
		while(str[i]!=';'&&i<str.length)
		{
			temp=temp+str[i];
			i++;
		}
		arr.push(temp);
	}
    }
	else if(str===null)
		return null;
	else if(str===";"||str==="")
		arr=[];
	return arr;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
    var i=0,j=0,temp="";
	for(i=0;i<arrayOfStrings.length;i++)
	{
		temp="";
		for(j=arrayOfStrings[i].length-1;j>=0;j--)
	{
		temp=temp+arrayOfStrings[i][j];
	}
	arrayOfStrings[i]=temp;
	}
	return arrayOfStrings;	
}

// Given an array of sentences, create a paragraph by concatenating all the strings and adding
// fullstop (.) after each senetences.
exports.CreateParagraph = function(arrayOfStrings){
   var i,temp="";
   if(arrayOfStrings===null)
	  temp=null;
   if(arrayOfStrings===[])
	   temp=[];
   if(arrayOfStrings!=null)
   {
   for(i=0;i<arrayOfStrings.length;i++)
	   temp=temp+arrayOfStrings[i]+'.';
   }
   return temp;
}


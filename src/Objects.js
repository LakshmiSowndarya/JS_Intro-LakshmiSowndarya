exports.GetObjectPropertyNames = function(obj) {
	var x=new Array();
 if(obj==null)
	 return null;
 for(prop in obj)
	 x.push(prop);
 return x;
}

exports.GetObjectPropertyValues = function(obj) {
    var x=new Array();
	if(obj===null)
		return null;
	for(val in obj)
	{
		x.push(obj[val]);
	}
	return x;
}


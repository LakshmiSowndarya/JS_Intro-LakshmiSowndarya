exports.SumOfArray = function(arrayOfNums){
	var i,sum=0;
  for(i=0;i<arrayOfNums.length;i++)
	  sum=sum+arrayOfNums[i];
  return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var unique=new Array();
	var k=0,sum=0;
	arrayOfNums.sort();
	for(i=0;i<arrayOfNums.length;i++)
	{
		while(arrayOfNums[i]==arrayOfNums[i+1])
			i++;
			unique[k++]=arrayOfNums[i];
	}
	for(i=0;i<unique.length;i++)
		sum=sum+unique[i];
	return sum;
}

//2-D array exercises
// Given a 2-d array, verify it is of equal dimensions and return
// the sum of diagonal elements.

exports.SumOfDiagonalCells = function(array2d){
	var i,j,sum=0,c1=0,c2=0;
  if(array2d[0]===undefined)
      sum=undefined;	  
  /*if(typeof(array2d)!='object')
	  sum="hello";*/
  for(i=0;i<array2d.length;i++)
	  if(array2d[i]!='object')
		  c1++
  for(i=0;i<array2d.length;i++)
     if(array2d[i].length!=array2d.length)
        c2++;
	if(c1!=0||c2!=0)
		sum="hello";
	if(c2==0)
	{
		sum=0;
   for(i=0;i<array2d.length;i++)
   {
		 sum=sum+array2d[i][i] ;   
   } 
    }   
   return sum;
}

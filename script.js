function threeSum(arr, target) {
// write your code here
	var ar = [];
	for(let i=0;i<arr.length;i++)
		{
			ar.push(arr[i]+arr[i+1]+arr[i+2]);
		}
  ar.sort();
	return ar[0];
}

module.exports = threeSum;

/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var countTriangles = 0;
	var last, prelast, preprelast;

	for(var i=preferences.length; i>=0; i--){
		last = preferences[i];
		prelast = preferences[last - 1];
		preprelast = preferences[prelast -1];

		if (preprelast == i+1 && last > i+1 && prelast > i+1){
            countTriangles++;
		}	
	};

	return countTriangles;
}
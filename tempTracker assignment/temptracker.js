var a = [20, 21, 22, 23, 21, 25, 30];


function insert(element) { //Function for insert
	a.push(element)


}


function get_max(param) { //Function for getting max temperature
	param.sort();
	return (param[param.length - 1]);


}


function get_min(param) {  //function for getting min temperature
	param.sort();
	return (param[0])


}


function get_mean(param) { //function for getting mean of a temperature

	var total = 0;
	for (var i = 0; i < param.length; i++) {
		total += param[i];
	}
	var avg = total / param.length;
	return avg;


}


function get_mode(arr) { //temperature of getting mode of  a temp


	var mode = 0;

	var count = 0;
	var a = [1, 2, 3];

	for (var i = 0; i < arr.length; i++) {

		for (var j = 0; j < i; j++) {

			if (arr[j] === arr[i]) {

				mode = arr[j];

				count++;

				//console.log(count);

			}

		}

	}

	return mode;

}


insert(10);//inserting element
insert(20);
console.log(get_max(a));//getting max element
console.log(get_min(a));//getting min element
console.log(get_mean(a));//getting mean of elements of temp
console.log(get_mode(a))//getting mode of a elements of temp

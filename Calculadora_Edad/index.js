const btn = document.querySelector('.get_date');

var nowDate = new Date();

var year = nowDate.getFullYear();
var month = nowDate.getMonth() + 1;
var day = nowDate.getDate();

btn.addEventListener('click', () => {

	let inputDay;
	let inputMonth;
	let inputYear;

	
	inputDay = document.getElementById('day').value;
	inputMonth = document.getElementById('month').value;
	inputYear = document.getElementById('year').value;
	
	let temp = new Date().getDate();
/*
TODO: controlar cuando todos los input estan vacios, cuando hay uno mas datos invalidos.
*/
	if (inputDay == "" || inputMonth == "" || inputYear == "")
		return (input_error(inputDay, inputMonth, inputYear));
	if ((inputDay < 1 || inputDay > 31) && (inputMonth < 1 || inputMonth > 12))
		return (invalid_error("month"))
	console.log(year + "/" + month + "/" + day);

	/*
	if (parseInt(inputDay)) {
		console.log(inputDay);
	}else{
		console.log(`dias de febrero ${temp}`);
	}
	*/
})

function mesage_error(err_input) 
{
	let i = 0;

	while (i < err_input.length)
	{
		if (!err_input[i].className.includes("action")  && err_input[i].localName != 'input')
		{	
			err_input[i].classList.toggle("action");
		}
		i++;
	}
	console.log(err_input);
}

function control_input(clase)
{
	let i = 0;

	while (i < clase.length)
	{
		if (clase[i].classList.toggle("action") == true)
			clase[i].classList.remove("action")
		i++;
	} 
}

function input_error(eDay, eMonth, eYear) {

	const classDay = document.querySelector(".section_day").children;
	const classMonth = document.querySelector(".section_month").children;
	const classYear = document.querySelector(".section_year").children;

	let controlDay = eDay == "" ? mesage_error(classDay) : control_input(classDay);
	let controlMonth = eMonth == "" ? mesage_error(classMonth) : control_input(classMonth);
	let cotrolYear = eYear == "" ? mesage_error(classYear) : control_input(classYear);

}

function invalid_error() {
	console.log("error2");
}
const btn = document.querySelector('.get_date');

var nowDate = new Date();

//var year = nowDate.getFullYear();
//var month = nowDate.getMonth() + 1;
//var day = nowDate.getDate();

var year = 2023;
var month = 7;
var day = 2;
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
	* Listo. Ahora validar la entrada de la fecha
	! Controlar la fechar actual
	! Actiualizar la funcion control_input para controlar invalid_error
*/
	if (inputDay == "" || inputMonth == "" || inputYear == "")
		return (input_error(inputDay, inputMonth, inputYear));
	if ((inputDay < 1 || inputDay > 31) || (inputMonth < 1 || inputMonth > 12))
		return(invalid_error(inputDay, inputMonth, inputYear));
	control_input();
	get_date(inputDay, inputMonth, inputYear);

	
})

function get_date(inpDay, inpMonth, inpYear)
{
	const showDay = document.querySelector(".info_day");
	const showMonth = document.querySelector(".info_month");
	const showYear = document.querySelector(".info_year");
	let controlDay = new Date(inpYear, inpMonth, 0).getDate();

	if (inpDay > controlDay)
		return (invalid_error(inpDay, inpMonth, inpYear));

	let diff_year = year - inpYear;
	let diff_month = month - inpMonth;
	let diff_day = day - inpDay;
	
	if (inpMonth > month)
	{
		diff_month = 12 - (inpMonth - month);
		diff_year -= 1;
	}
	if (inpDay > day)
	{
		diff_month -= 1;
		diff_day = controlDay - (inpDay- day);
	}

	
	
	console.log(diff_year, diff_month, diff_day);


}

function control_input()
{
	const classDay = document.querySelector(".section_day").children;
	const classMonth = document.querySelector(".section_month").children;
	const classYear = document.querySelector(".section_year").children;
	const classSection = document.querySelector(".section").children;

	let arr = new Array(classDay, classMonth, classYear);
	let i = 0;

	while (i < arr.length)
	{
		let j = 0;
		while(j < arr[i].length)
		{
			if (arr[i][j].className.includes("input_err"))
				arr[i][j].classList.remove("input_err");
			j++;
		}
		i++;
	}

	//console.log(classSection[3].className.includes("invalid_err"));
	if (classSection[3].className.includes("invalid_err"))
	{
		classSection[3].classList.remove("invalid_err");
		let j = 0;

		while (j < classSection.length)
		{
			let i = 0;
			while (i < classSection[j].children.length)
			{
				if (classSection[j].children[i].className.includes("invalid_err_lab") || classSection[j].children[i].className.includes("invalid_err_inp"))
				{
					classSection[j].children[i].classList.remove("invalid_err_lab");
					classSection[j].children[i].classList.remove("invalid_err_inp");
				}
				i++;
			}
			j++;
		}
		
	}
}

function message_input(err_input) 
{
	let i = 0;

	while (i < err_input.length)
	{
		if (!err_input[i].className.includes("input_err")  && err_input[i].localName != 'input')
			err_input[i].classList.toggle("input_err");
		i++;
	}
}

function message_invalid(err_invalid)
{
	let i = 0;

	while (i < err_invalid.length)
	{
		if (!err_invalid[i].className.includes("invalid_err") && err_invalid[i].localName != 'input' && !err_invalid[i].className.includes("mesage_err"))
			err_invalid[i].classList.toggle("invalid_err");
		i++;
	}
}

function input_error(eDay, eMonth, eYear)
{	
	const classDay = document.querySelector(".section_day").children;
	const classMonth = document.querySelector(".section_month").children;
	const classYear = document.querySelector(".section_year").children;

	if (eDay == "")
		message_input(classDay);
	if (eMonth == "")
		message_input(classMonth);
	if (eYear == "")
		message_input(classYear);
}

function invalid_error(eDay, eMonth, eYear)
{
	const classSection = document.querySelector(".section").children;
	const classErr = document.querySelector(".mesage_inv");
	let i = 0;
	
	
	if (!classErr.className.includes("invalid_err"))
		classErr.classList.add("invalid_err");
	while (i < classSection.length)
	{
		let j = 0;
		while (j < classSection[i].children.length)
		{
			if (!classSection[i].children[j].className.includes("invalid_err_lab") && classSection[i].children[j].localName == "label")
				classSection[i].children[j].classList.toggle("invalid_err_lab");
			if (!classSection[i].children[j].className.includes("invalid_err_inp") && classSection[i].children[j].localName == "input")
				classSection[i].children[j].classList.toggle("invalid_err_inp");
			j++;
		}
		i++;
	}
}
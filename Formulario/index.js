const btn_back = document.querySelector('#btn_back');
const btn_next = document.querySelector('#btn_next');
const b = document.getElementById("");
const options = document.querySelector('.side_bar');
const form = document.querySelector('.steps_form');

let select_act = {
	id: 0,
	e_side: null,
	e_form: null
};
// *btn back del formulario
btn_back.addEventListener("click", () => {
	let actinf = get_id();

	update_id(actinf, false);
	//console.log(actinf.e_form);

});

// *btn next del formulario
btn_next.addEventListener("click", () => {
	let actinf = get_id();

	update_id(actinf, true);
	
	//console.log(actinf.e_form);	

});

function get_id()
{
	let side_bar = [...options.children];
	let steps_form = [...form.children];
	
	side_bar.forEach(element => {
		let temp = [...element.children];
		
		temp.forEach(item => {
			if (item.classList.contains('select'))
			{
				select_act.id = parseInt(item.innerText);
				select_act.e_side = item;
			}
		});
	});
	steps_form.forEach(element => {
		if (element.classList.contains('select'))
			select_act.e_form = element;
	});

	//hide_btn(select_act);
	return (select_act);
}

function update_id(inf, bol)
{
	let side_bar = [...options.children];
	let steps_form = [...form.children];
	let temp_id = inf.id;
	
	console.log(steps_form, inf);
	//* Cuando pulsan el boton next
	if (bol && inf.id != 4)
	{
		inf.e_side.classList.remove('select');
		side_bar.forEach(element => {
			let temp = [...element.children];

			temp.forEach(item => {
				if (parseInt(item.innerText) == temp_id + 1)
				{
					inf.e_form.classList.remove('select');
					item.classList.add('select');
					steps_form[temp_id].classList.add('select');
					inf.id = temp_id + 1;
					inf.e_side = item;
					inf.e_form = steps_form[temp_id];
				}
			});
		});
	}
	//* Cuando pulsan el boton back
	if (!bol && inf.id != 1)
	{
		inf.e_side.classList.remove('select');
		side_bar.forEach(element => {
			let temp = [...element.children];

			temp.forEach(item => {
				if (parseInt(item.innerText) == temp_id - 1)
				{
					inf.e_form.classList.remove('select');
					item.classList.add('select');
					steps_form[temp_id - 2].classList.add('select');
					inf.id = temp_id - 1;
					inf.e_side = item;
					inf.e_form = steps_form[temp_id - 2];
				}
			});
		});
	}
	console.log(steps_form, inf);
}

function hide_btn(inf)
{
	if (inf.id == 1 && !btn_back.classList.contains('none'))
		btn_back.classList.add('none');
	if (inf.id == 4 && !btn_next.classList.contains('none'))
		btn_next.classList.add('none');
}
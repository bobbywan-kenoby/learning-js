window.addEventListener("load", event => {
	console.log("loaded");
	main(event);
});

const main = event => {
	let data = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
	let myTable = document.createElement("div");
	document.body.appendChild(myTable);
	data.forEach(element => {
		createRow(element,myTable);
	});
}

const createRow = (element,table) => {
	let row = document.createElement("div");
	let content = document.createElement("div");
	let buttonMove = document.createElement("div");
	buttonMove.style.width = "50px";
	buttonMove.style.cursor = "move";
	buttonMove.style.backgroundColor = "#b4b4b4";
	buttonMove.addEventListener("mousedown", event => {
		console.log("click");
		row.setAttribute( "class", "move" );
		content.style.backgroundColor = "#67ddf7";
	});
	row.addEventListener("mouseup", event => {
		console.log("clack");
		let elemsMove = document.getElementsByClassName("move");
		for (elem of elemsMove) {
			elem.firstChild.style.backgroundColor = "white";
			elem.classList.remove("move");
		}
	});
	row.addEventListener("mousemove", event => {
		let elemsMove = document.getElementsByClassName("move");
		if (elemsMove.length == 0) return ;
		table.insertBefore(elemsMove[0], row);
	});
	content.innerHTML = element;
	content.style.width = "100%";
	row.style.height = "50px";
	row.style.display = "flex";
	row.style.border = "1px solid";
	row.appendChild(content);
	row.appendChild(buttonMove);
	table.appendChild(row);
}

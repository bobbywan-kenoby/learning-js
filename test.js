window.addEventListener("load", event => {
	console.log("loaded");
	main(event);
});

const main = event => {
	let table1 = new Table();
}

class Table {
	constructor() {
		this.dragElement;
		this.onmove = false;
		let data = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
		this.bodyOfTable = document.createElement("tbody");
		this.myTable = document.createElement("table");
		this.myTable.style.width = "100%";
		this.myTable.style.border = "1px solid";
		this.myTable.appendChild(this.bodyOfTable);
		this.mapOfRow = new Map();
		document.body.appendChild(this.myTable);
		data.forEach(element => {
			this.addRow(element);
		});
	}

	addRow(contenu){
		console.log(contenu);
		let newRow = new Row(contenu);
		this.mapOfRow.set(contenu,newRow);
		this.bodyOfTable.appendChild(newRow.getRow());
		newRow.getRow().addEventListener("mousedown", event => {
			console.log("click");
    	this.onmove = true;
			this.dragElement = newRow;
			console.log(newRow.getRow());
    });
		newRow.getRow().addEventListener("mouseup", event => {
      console.log("clack");
			this.dragElement.getRow().style.backgroundColor = "white"
    	this.onmove = false;
    });
		newRow.getRow().addEventListener("mousemove", event => {
      if (this.onmove === false) return ;
			this.bodyOfTable.insertBefore(this.dragElement.getRow(), newRow.getRow().nextSibling);
			this.dragElement.getRow().style.backgroundColor = "#67ddf7"
    });
	}
}

class Row{
	constructor(contenu) {
		this.copiForMove;
		this.myRow = document.createElement("tr");
		let col = document.createElement("td");
		col.style.border = "1px solid";
		this.myRow.style.height = "50px";
		col.innerHTML = contenu;
		this.myRow.appendChild(col);
	}
	getRow(){
		return this.myRow;
	}
}

window.addEventListener("load", event => {
	console.log("loaded");
	main();
});

async function main(event) {

	let a = fakesProfils(500);

	let less18y = await usersByAge(a, 18)

	console.log(less18y);

	printProfil(less18y)

}
// https://clipartart.com/images/default-profile-picture-clipart-3.jpg

function printProfil(profils) {
	let maincontainer = document.getElementById('main')
	profils.forEach((profil, i) => {

		//create DOM element
		let profilContainer = document.createElement('div')
		let pp = document.createElement('img')
		let infosContainer = document.createElement('div')
		let firstName = document.createElement('span')
		let lastName = document.createElement('span')
		let country = document.createElement('span')
		let age = document.createElement('span')
		let gender = document.createElement('span')

		//fill element with data
		pp.setAttribute('src', 'https://clipartart.com/images/default-profile-picture-clipart-3.jpg');
		profilContainer.setAttribute('class', 'profil');
		infosContainer.setAttribute('class', 'infos');
		firstName.innerHTML = profil.firstName;
		lastName.innerHTML = profil.lastName;
		country.innerHTML = profil.country;
		age.innerHTML = profil.age;
		gender.innerHTML = profil.gender;

		//append element to document
		profilContainer.appendChild(pp);
		profilContainer.appendChild(infosContainer);
		infosContainer.appendChild(firstName);
		infosContainer.appendChild(lastName);
		infosContainer.appendChild(country);
		infosContainer.appendChild(age);
		infosContainer.appendChild(gender);
		maincontainer.appendChild(profilContainer);
	});
}

function sleep(ms) {
	let callback, prom = new Promise(resolve => callback = resolve);
	setTimeout(callback, ms);
	return prom;
}

function fakesProfils(nbProfils) {
	let listFakeProfil = new Array(nbProfils).fill(undefined);
	return listFakeProfil.map(elem => elem = {
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		country: faker.address.country(),
		age: faker.random.number() % 99 + 1,
		gender: faker.random.arrayElement(["homme", "femme"])
	});
}

async function usersByAge(users, userAge) {
	await sleep(1000);
	return users.filter(user => user.age < userAge);
}
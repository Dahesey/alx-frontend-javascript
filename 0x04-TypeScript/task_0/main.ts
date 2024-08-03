interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student1: Student = {
    firstName: 'christy',
    lastName: 'dodzi',
    age:19,
    location: 'amanfrom',
}

const student2: Student = {
    firstName: 'kelvin',
    lastName: 'dodzi',
    age: 23,
    location: 'kanda',
}

let studentsList: Student[] = [];

studentsList.push(student1);
studenstList.push(student2);

let myVar = document.createElement('table');

for (let i = 0; i < studentsList.length; i++){
    let row = myVar.insertRow();
    let name = row.insertCell();
    let location = row.insertCell();
    name.innerHTML = studentsList[i].firstName;
    location.innerHTML = studentsList[i].location;
}

document.body.appendChild(myVar);

export default function getListStudents() {
	const arrayOfObjects = [];
	arrayOfObjects.push({
		id: 1,
		firstName: 'Guillaume',
		location: 'San Francisco',
	},
	{
		id: 2,
		firstName: 'James',
		location: 'Columbia',
	},
	{
		id: 3,
		firstName: 'Serena',
		location: 'San Francisco',
	});
	return arrayOfObjects;
}

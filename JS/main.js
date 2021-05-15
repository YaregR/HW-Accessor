
const guest = { 
	name: 'Джон', 
	surname: 'Сильвер', 
	middlename: 'Робертович', 

	get fullName() {
		return `${guest.name} ${guest.middlename} ${guest.surname}`;
	},

	set middleName(val) {
		guest.middlename = val;
	}
};

guest.middleName = 'Тарасович';
console.log( guest.fullName );

const doctor = { 
	fullname: 'Доктор Дэвид Ливси', 
	
	set name(val) {
		doctor.fullname = val.split(' ');
	}
};

doctor.name = 'Иван Арнольдович Борменталь';
console.log(doctor.fullname);


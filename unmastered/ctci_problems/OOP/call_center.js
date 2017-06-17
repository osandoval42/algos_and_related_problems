/*

*/

function Employee(name, boss){
	this.name = name;
	this.position = "respondent";
	this.boss = boss;
	this.isFree = true;
}

Employee.prototype.handleCall = function(call){
	this.isFree = false;
}

function Manager(name, boss){
	Employee.call(this, name, boss);
	this.position = "manager";
}

Manager.prototype = new Employee();

function Director(name){
	Manager.call(this, name)
	this.position = "director";
	this.boss = undefined;
}

Director.prototype = new Manager();

function CallCenter(){
	this.employees = [];
	this.directors = [];
	this.managers = [];
}



CallCenter.prototype.dispatchCall = function(call){
	const employees = shuffle(this.employees);
	for (let i = 0; i < employees; i++){
		if (employees[i].isFree){
			return (employees[i].handleCall())
		}
	}
	/* 
		Do this for directors and managers
	*/
}
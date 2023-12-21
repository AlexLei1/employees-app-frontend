
export interface Employee {
	id: string;
	firstName: string;
	lastName: string;
	age: string;
	address: string;
	userId: string;
}
export interface IFormDataEmployee {
	firstName: string;
	lastName: string;
	age: string;
	address: string;
	id?: string | undefined;
	userId?: string | undefined;
}
export interface IAddEmployee {
	firstName: string;
	lastName: string;
	age: string;
	address: string;
}
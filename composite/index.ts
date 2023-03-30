interface Employee {
  getName(): string;
  getSalary(): number;
  setSalary(salary: number);
  getRoles(): [];
}

class Developer3 implements Employee {
  #name: string;
  #salary: number;
  #roles: [];

  constructor(name: string, salary: number) {
    this.#name = name;
    this.#salary = salary;
  }

  public getName(): string {
    return this.#name;
  }

  public getSalary(): number {
    return this.#salary;
  }

  public setSalary(salary: number) {
    this.#salary = salary;
  }

  public getRoles(): [] {
    return this.#roles;
  }
}

class Designer implements Employee {
  #name: string;
  #salary: number;
  #roles: [];

  constructor(name: string, salary: number) {
    this.#name = name;
    this.#salary = salary;
  }

  public getName(): string {
    return this.#name;
  }

  public getSalary(): number {
    return this.#salary;
  }

  public setSalary(salary: number) {
    this.#salary = salary;
  }

  public getRoles(): [] {
    return this.#roles;
  }
}

class Organization {
  protected employees: Employee[] = [];

  public addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  public getNetSalaries(): number {
    return this.employees.reduce((prev, cur) => prev + cur.getSalary(), 0);
  }
}

const john = new Developer3("jack", 10000);
const neck = new Designer("Nick", 2900);

const org = new Organization();
org.addEmployee(john);
org.addEmployee(neck);

console.log(org.getNetSalaries());

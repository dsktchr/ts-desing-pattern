interface Coffee {
  getCost(): number;
  getDescription(): string;
}

class SimpleCoffee implements Coffee {
  public getCost(): number {
    return 10;
  }

  public getDescription(): string {
    return "シンプルなコーヒーです";
  }
}

class MilkCoffee implements Coffee {
  #coffee: Coffee;
  constructor(coffee: Coffee) {
    this.#coffee = coffee;
  }

  public getCost(): number {
    return this.#coffee.getCost() + 5;
  }

  public getDescription(): string {
    return this.#coffee.getDescription() + ", ミルク付き";
  }
}

class WhipCoffee implements Coffee {
  #coffee: Coffee;
  constructor(coffee: Coffee) {
    this.#coffee = coffee;
  }

  public getCost(): number {
    return this.#coffee.getCost() + 20;
  }

  public getDescription(): string {
    return this.#coffee.getDescription() + ", ウィップ付き";
  }
}

class VanillaCoffee implements Coffee {
  #coffee: Coffee;
  constructor(coffee: Coffee) {
    this.#coffee = coffee;
  }

  public getCost(): number {
    return this.#coffee.getCost() + 8;
  }

  public getDescription(): string {
    return this.#coffee.getDescription() + ", バニラ付き";
  }
}

const simpleCoffee = new SimpleCoffee();
console.log(simpleCoffee.getCost());
console.log(simpleCoffee.getDescription());

const milk = new MilkCoffee(simpleCoffee);
console.log(milk.getCost());
console.log(milk.getDescription());

const whip = new WhipCoffee(simpleCoffee);
console.log(whip.getCost());
console.log(whip.getDescription());

const vanilla = new VanillaCoffee(simpleCoffee);
console.log(vanilla.getCost());
console.log(vanilla.getDescription());

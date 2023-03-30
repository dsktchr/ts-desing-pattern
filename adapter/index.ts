interface Lion {
  roar();
}

class AfricaLion implements Lion {
  public roar() {
    console.log("がおーん！！！！！");
  }
}

class AsianLion implements Lion {
  public roar() {}
}

class Hunter {
  public hunt(lion: Lion) {
    lion.roar();
  }
}

class WildDog {
  public bark() {
    console.log("わんわん！！！！");
  }
}

class WildDogAdapter implements Lion {
  #dog: WildDog;

  constructor(dog: WildDog) {
    this.#dog = dog;
  }

  public roar() {
    this.#dog.bark();
  }
}

const wildDog = new WildDog();
console.log(wildDog.bark());

const hunter = new Hunter();
console.log(hunter.hunt(new AfricaLion()));
console.log(hunter.hunt(new WildDogAdapter(wildDog)));

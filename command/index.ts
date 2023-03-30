class Bulb {
  public turnOn() {
    console.log("バルブをあけました");
  }

  public turnOff() {
    console.log("バルブを閉じました");
  }
}

interface Command {
  execute();
  undo();
  redo();
}

class TurnOn implements Command {
  #bulb: Bulb;

  constructor(bulb: Bulb) {
    this.#bulb = bulb;
  }

  public execute() {
    this.#bulb.turnOn();
  }

  public undo() {
    this.#bulb.turnOff();
  }

  public redo() {
    this.execute();
  }
}

class TurnOff implements Command {
  #bulb: Bulb;

  constructor(bulb: Bulb) {
    this.#bulb = bulb;
  }

  public execute() {
    this.#bulb.turnOff();
  }

  public undo() {
    this.#bulb.turnOn();
  }

  public redo() {
    this.execute();
  }
}

class RemoteControl {
  /**
   * submit
   */
  public submit(command: Command) {
    command.execute();
  }
}

const b = new Bulb();

const turnOn = new TurnOn(b);
const turnOff = new TurnOff(b);

const controller = new RemoteControl();

console.log(controller.submit(turnOn));
console.log(controller.submit(turnOff));

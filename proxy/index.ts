interface NewDoor {
  open(password?: string);
  close();
}

class LabDoor implements NewDoor {
  public open() {
    console.log("ドアが開いたよ");
  }

  public close() {
    console.log("ドアが閉じられたよ");
  }
}

class SecurityDoor implements NewDoor {
  #door: NewDoor;
  constructor(door: NewDoor) {
    this.#door = door;
  }

  /**
   * open
   */
  public open(password: string) {
    if (this.authenticate(password)) {
      this.#door.open();
    } else {
      console.log("パスワードが違います");
    }
  }

  /**
   * authenticate
   */
  private authenticate(password: string) {
    return password === "secret";
  }
  /**
   * close
   */
  public close() {
    this.#door.close();
  }
}

const plainDoor = new LabDoor();
console.log(plainDoor.open());
console.log(plainDoor.close());

const sec = new SecurityDoor(plainDoor);
console.log(sec.open("aiueo"));
console.log(sec.open("secret"));
console.log(sec.close());

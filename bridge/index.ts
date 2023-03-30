interface WebPage {
  getContent();
}

class About implements WebPage {
  #theme: Theme;
  constructor(theme: Theme) {
    this.#theme = theme;
  }

  public getContent() {
    return this.#theme.getColor();
  }
}

class Careers implements WebPage {
  #theme: Theme;
  constructor(theme: Theme) {
    this.#theme = theme;
  }

  public getContent() {
    return this.#theme.getColor();
  }
}

interface Theme {
  getColor();
}

class DarkTheme implements Theme {
  public getColor() {
    return "Dark";
  }
}

class LightTheme implements Theme {
  public getColor() {
    return "Light";
  }
}

class AquaTheme implements Theme {
  public getColor() {
    return "Aqua";
  }
}

const about = new About(new DarkTheme());
console.log(about.getContent());

const careers = new Careers(new LightTheme());
console.log(careers.getContent());

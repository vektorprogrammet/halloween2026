interface Builder {
  SetName():
  void;
  SetMovieName():
  void;
  SetImageSource():
  void;
  SetRevealed():
  void;
}

class CharacterBuilder {
  private character: Character;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.character = new Character();
  }

  public SetMovieName(MovieName: string): void {this.character.SetMovieName(MovieName)}
  public SetName(name: string): void {this.character.SetName(name)}
  public SetImageSource(ImageSource: string): void {this.character.SetImageSource(ImageSource)}
  public SetRevealed(Revealed: boolean): void {this.character.SetRevealed(Revealed)}

  public GetCharacter(): Character {
    const result = this.character;
    this.reset()
    return result;
  }
}

class Character {
  private Name: string;
  private MovieName: string;
  private ImageSource: string;
  private revealed: boolean;

  public SetMovieName(MovieName: string): void {this.MovieName = MovieName;}
  public SetRevealed(revealed: boolean): void {this.revealed = revealed;}
  public SetImageSource(ImageSource: string): void {this.ImageSource = ImageSource;}
  public SetName(Name: string): void {this.Name = Name;}

  constructor(){
    this.Name = "";
    this.MovieName = "";
    this.ImageSource = "";
    this.revealed = false;
  }
}


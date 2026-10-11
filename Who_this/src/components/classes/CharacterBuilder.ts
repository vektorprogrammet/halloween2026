import { Character } from "./Character";

export interface Builder {
  SetName():
  void;
  SetMovieName():
  void;
  SetImageSource():
  void;
  SetRevealed():
  void;
}

export class CharacterBuilder {
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
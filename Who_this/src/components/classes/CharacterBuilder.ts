import { Character } from "./Character";
import type { CharacterData } from "./CharacterData";
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
  public character: Character;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.character = new Character();
  }
  public SetId(Id: number): void {this.character.SetId(Id)}
  public SetMovieName(MovieName: string): void {this.character.SetMovieName(MovieName)}
  public SetName(name: string): void {this.character.SetName(name)}
  public SetImageSource(ImageSource: string): void {this.character.SetImageSource(ImageSource)}
  public SetRevealed(Revealed: boolean): void {this.character.SetRevealed(Revealed)}

  public FromJSON(data: CharacterData): void{
    this.SetId(data.id);
    this.SetName(data.name);
    this.SetMovieName(data.movieName);
    this.SetImageSource(data.imageSource);
    this.SetRevealed(data.revealed);
  }

  public GetCharacter(): Character {
    const result = this.character;
    this.reset()
    return result;
  }
}
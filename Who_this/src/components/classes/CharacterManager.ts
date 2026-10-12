import type { Character } from "./Character";
import { CharacterBuilder } from "./CharacterBuilder";
import type { CharacterData } from "./CharacterData";

export class CharacterManager {
  private characters: Character[] = [];

  constructor(data: CharacterData[]) {
    const Builder: CharacterBuilder = new CharacterBuilder();
    this.characters = data.map(
      (character: CharacterData) => {
        Builder.reset();
        Builder.SetImageSource(character.imageSource)
        Builder.SetMovieName(character.movieName)
        Builder.SetName(character.name)
        Builder.SetRevealed(character.revealed)
        return Builder.GetCharacter();
      }
    );
  }

  getAllCharacters(): Character[] {
    return [...this.characters];
  }

  getCharacterRandom(): Character | null{
    if (this.characters.length === 0){
        return null;
    }

    const RandomIndex = Math.floor(Math.random() * this.characters.length);
    return this.characters[RandomIndex];
  }

  addCharacter(character: Character): void {
    this.characters.push(character);
  }
}
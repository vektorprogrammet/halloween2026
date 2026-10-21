import type { Character } from "./Character";
import { CharacterBuilder } from "./CharacterBuilder";
import type { CharacterData } from "./CharacterData";

export class CharacterManager {
  private characters: Character[] = [];
  private readonly StaticCharacters: Character[] = [];
  private CurrentRound: number;
  private MaxRounds: number = 5;


  constructor(data: CharacterData[]) {
    const Builder: CharacterBuilder = new CharacterBuilder();
    this.characters = data.map(
      (character: CharacterData) => {
        Builder.reset();
        Builder.SetId(character.id);
        Builder.SetImageSource(character.imageSource)
        Builder.SetMovieName(character.movieName)
        Builder.SetName(character.name)
        Builder.SetRevealed(character.revealed)
        return Builder.GetCharacter();
      }
    );
    this.StaticCharacters = structuredClone(this.characters);
    this.CurrentRound = 1;
  }

  GetAllCharacters(): Character[] {
    return [...this.characters];
  }

  GetCharacterRandom(): Character | null{
    if (this.characters.length === 0){
        return null;
    }

    const RandomIndex = Math.floor(Math.random() * this.characters.length);
    return this.characters.splice(RandomIndex, 1)[0];
  }

  ResetRound(): void {
    this.CurrentRound = 0;
    this.characters = structuredClone(this.StaticCharacters);
  }

  AddCharacter(character: Character): void {
    this.characters.push(character);
  }
}
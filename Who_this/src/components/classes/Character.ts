export class Character {
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


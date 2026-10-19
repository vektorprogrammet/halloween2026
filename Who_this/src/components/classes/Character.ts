export class Character {
  private Id: number;
  private Name: string;
  private MovieName: string;
  private ImageSource: string;
  private revealed: boolean;

  public SetId(Id: number): void {this.Id = Id;}
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

  public GetName(): string {return this.Name}
  public GetId(): number {return this.Id}
  public GetMovieName(): string {return this.MovieName}
  public GetImageSource(): string {return this.ImageSource}
  public GetRevealed(): boolean {return this.revealed}  
}


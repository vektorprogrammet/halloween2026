export class Character {
  private Id: number;
  private Name: string;
  private MovieName: string;
  private ImageSource: string;

  public SetId(Id: number): void {this.Id = Id;}
  public SetMovieName(MovieName: string): void {this.MovieName = MovieName;}
  public SetImageSource(ImageSource: string): void {this.ImageSource = ImageSource;}
  public SetName(Name: string): void {this.Name = Name;}

  constructor(){
    this.Name = "";
    this.MovieName = "";
    this.ImageSource = "";
  }

  public GetName(): string {return this.Name}
  public GetId(): number {return this.Id}
  public GetMovieName(): string {return this.MovieName}
  public GetImageSource(): string {return this.ImageSource}
}


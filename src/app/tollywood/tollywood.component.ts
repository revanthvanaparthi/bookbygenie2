import { Component, OnInit } from "@angular/core";
import { Movies } from "../movies";
import { SevicingService } from "../sevicing.service";

@Component({
  selector: "app-tollywood",
  templateUrl: "./tollywood.component.html",
  styleUrls: ["./tollywood.component.less"]
})
export class TollywoodComponent implements OnInit {
  constructor(private ser: SevicingService) {}
  movie: Movies[] = this.ser.getCategory();
  panelOpenState: boolean = false;

  ngOnInit(): void {}
  Genres(s: string) {
    for (let i = 0; i < this.movie.length; i++) {
      this.movie[i].visible[1] = false;
      if (this.movie[i].genre == s) this.movie[i].visible[1] = true;
    }
  }
  Lan(s: string) {
    for (let i = 0; i < this.movie.length; i++) {
      this.movie[i].visible[1] = false;
      if (this.movie[i].language == s) this.movie[i].visible[1] = true;
    }
  }
  clear() {
    for (let i = 0; i < this.movie.length; i++) this.movie[i].visible[1] = true;
    for (let i = 0; i < this.movie.length; i++) this.movie[i].visible[1] = true;
  }
}

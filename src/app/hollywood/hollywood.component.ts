import { Component, OnInit } from "@angular/core";
import { Movies } from "../movies";
import { SevicingService } from "../sevicing.service";

@Component({
  selector: "app-hollywood",
  templateUrl: "./hollywood.component.html",
  styleUrls: ["./hollywood.component.less"]
})
export class HollywoodComponent implements OnInit {
  constructor(private ser: SevicingService) {}
  public M: Movies = this.ser.getBookByGenie();

  ngOnInit(): void {}
}

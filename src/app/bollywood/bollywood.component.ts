import { Component, OnInit } from "@angular/core";
import { Movies } from "../movies";
import { SevicingService } from "../sevicing.service";

@Component({
  selector: "app-bollywood",
  templateUrl: "./bollywood.component.html",
  styleUrls: ["./bollywood.component.less"]
})
export class BollywoodComponent implements OnInit {
  constructor(private ser: SevicingService) {}
  public M: Movies = this.ser.getBookByGenie();
  public d: Date = new Date();
  public day: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  public theaters: string[] = [
    "Shanti Theatre",
    "INOX GVK One Mall",
    "PVR Cinemas",
    "TrendSet"
  ];
  public shows: string[] = ["11:00AM", "02:45PM", "07:00PM", "09:30PM"];
  ngOnInit(): void {}
}

import { Injectable } from "@angular/core";
import { Movies } from "./movies";

@Injectable({
  providedIn: "root"
})
export class SevicingService {
  constructor() {}
  public cinema: Movies[] = [
    {
      name: "Battle Drone",
      genre: "Action",
      language: "Telugu",
      location: ["Hyderabad", "Vijayawada"],
      image: "./assets/35.jpg",
      visible: [true, true, true],
      category: "stream"
    },
    {
      name: "Monster Island",
      genre: "Adventure",
      language: "Telugu",
      location: ["Hyderabad", "Vijayawada"],
      image: "./assets/34.jpg",
      visible: [true, true, true],
      category: "stream"
    },
    {
      name: "Ride Like A Girl",
      genre: "Drama",
      language: "Telugu",
      location: ["Hyderabad", "Vijayawada"],
      image: "./assets/33.jpg",
      visible: [true, true, true],
      category: "stream"
    },
    {
      name: "Judas And The Black Messiah",
      genre: "Drama",
      language: "English",
      location: ["Delhi", "Mumbai"],
      image: "./assets/30.jpg",
      visible: [true, true, true],
      category: "stream"
    },
    {
      name: "Heroic Losers",
      genre: "Comedy",
      language: "Hindi",
      location: ["Delhi", "Mumbai", "Hyderabad"],
      image: "./assets/29.jpg",
      visible: [true, true, true],
      category: "stream"
    },
    {
      name: "The Witches",
      genre: "Adventure",
      language: "Hindi",
      location: ["Delhi", "Mumbai", "Hyderabad"],
      image: "./assets/28.jpg",
      visible: [true, true, true],
      category: "stream"
    },
    {
      name: "Coda",
      genre: "Drama",
      language: "English",
      location: ["Delhi", "Mumbai"],
      image: "./assets/27.jpg",
      visible: [true, true, true],
      category: "stream"
    },
    {
      name: "Midsommar",
      genre: "Drama",
      language: "Hindi",
      location: ["Delhi", "Mumbai", "Hyderabad"],
      image: "./assets/26.jpg",
      visible: [true, true, true],
      category: "stream"
    },
    {
      name: "Monster Hunter",
      genre: "Action",
      language: "English",
      location: ["Delhi", "Mumbai"],
      image: "./assets/25.jpg",
      visible: [true, true, true],
      category: "stream"
    },
    {
      name: "The Power",
      genre: "Thriller",
      language: "Hindi",
      location: ["Delhi", "Mumbai", "Hyderabad"],
      image: "./assets/23.jpg",
      visible: [true, true, true],
      category: "stream"
    },
    {
      name: "Abijit Ganguly",
      genre: "Standup",
      language: "Hindi",
      location: ["Delhi", "Mumbai", "Hyderabad"],
      image: "./assets/22.jpg",
      visible: [true, true, true],
      category: "event"
    },
    {
      name: "Staccato @ Hylife",
      genre: "Comedy",
      language: "Hindi",
      location: ["Delhi", "Mumbai", "Hyderabad"],
      image: "./assets/21.jpg",
      visible: [true, true, true],
      category: "event"
    },
    {
      name: "Drama for Youth",
      genre: "Drama",
      language: "Hindi",
      location: ["Delhi", "Mumbai", "Hyderabad"],
      image: "./assets/20.jpg",
      visible: [true, true, true],
      category: "event"
    },
    {
      name: "Saikiran Rolling",
      genre: "Comedy",
      language: "Telugu",
      location: ["Hyderabad", "Vijayawada"],
      image: "./assets/19.jpg",
      visible: [true, true, true],
      category: "event"
    },
    {
      name: "Rajasekhar Mamidanna",
      genre: "Music",
      language: "Telugu",
      location: ["Hyderabad", "Vijayawada"],
      image: "./assets/18.jpg",
      visible: [true, true, true],
      category: "event"
    },
    {
      name: "Online Yoga",
      genre: "Action",
      language: "Telugu",
      location: ["Hyderabad", "Vijayawada"],
      image: "./assets/17.jpg",
      visible: [true, true, true],
      category: "event"
    },
    {
      name: "Punchliuners",
      genre: "Comedy",
      language: "English",
      location: ["Delhi", "Mumbai"],
      image: "./assets/16.jpg",
      visible: [true, true, true],
      category: "event"
    },
    {
      name: "Technique for Actors",
      genre: "Improvisation",
      language: "English",
      location: ["Delhi", "Mumbai"],
      image: "./assets/15.jpg",
      visible: [true, true, true],
      category: "event"
    },
    {
      name: "Vakeel Saab",
      genre: "Action",
      language: "Telugu",
      location: ["Hyderabad", "Vijayawada"],
      image: "./assets/1.jpg",
      visible: [true, true, true],
      category: "movie"
    },
    {
      name: "Rang De",
      genre: "Drama",
      language: "Telugu",
      location: ["Hyderabad", "Vijayawada"],
      image: "/assets/2.jpg",
      visible: [true, true, true],
      category: "movie"
    },
    {
      name: "Sulthan",
      genre: "Drama",
      language: "Telugu",
      location: ["Hyderabad", "Vijayawada"],
      image: "/assets/3.jpg",
      visible: [true, true, true],
      category: "movie"
    },
    {
      name: "Wild Dog",
      genre: "Action",
      language: "Telugu",
      location: ["Hyderabad", "Vijayawada"],
      image: "/assets/4.jpg",
      visible: [true, true, true],
      category: "movie"
    },
    /*{
      name: "Tom & Jerry",
      genre: "Comedy",
      language: "English",
      location: ["Delhi","Mumbai"],
      image: "/assets/5.jpg",
       visible: [true, true, true],
      category: "stream",
    },*/
    {
      name: "Godzilla vs Kon",
      genre: "Action",
      language: "English",
      location: ["Delhi", "Mumbai"],
      image: "/assets/6.jpg",
      visible: [true, true, true],
      category: "movie"
    },
    {
      name: "Roohi",
      genre: "Comedy",
      language: "Hindi",
      location: ["Delhi", "Mumbai", "Hyderabad"],
      image: "/assets/7.jpg",
      visible: [true, true, true],
      category: "movie"
    },
    {
      name: "Bansuri",
      genre: "Drama",
      language: "Hindi",
      location: ["Delhi", "Mumbai", "Hyderabad"],
      image: "/assets/8.jpg",
      visible: [true, true, true],
      category: "movie"
    },
    {
      name: "Voyagers",
      genre: "Adventure",
      language: "English",
      location: ["Delhi", "Mumbai"],
      image: "/assets/9.jpg",
      visible: [true, true, true],
      category: "movie"
    },
    {
      name: "The Mouritanian",
      genre: "Thriller",
      language: "English",
      location: ["Delhi", "Mumbai"],
      image: "/assets/10.jpg",
      visible: [true, true, true],
      category: "movie"
    },
    {
      name: "Deyyam",
      genre: "Horror",
      language: "Telugu",
      location: ["Hyderabad", "Vijayawada"],
      image: "/assets/11.jpg",
      visible: [true, true, true],
      category: "movie"
    },
    /*{
      name: "Tenet",
      genre: "Thriller",
      language: "Telugu",
      location: ["Hyderabad","Vijayawada"],
      image: "/assets/12.jpg",
       visible: [true, true, true],
      category: "stream"
    },*/
    {
      name: "Dongri Danger",
      genre: "Standup",
      language: "Hindi",
      location: ["Delhi", "Mumbai", "Hyderabad"],
      image: "/assets/13.jpg",
      visible: [true, true, true],
      category: "event"
    },
    {
      name: "Good Vibes",
      genre: "Music",
      language: "English",
      location: ["Delhi", "Mumbai"],
      image: "/assets/14.jpg",
      visible: [true, true, true],
      category: "event"
    }
  ];
  public book: Movies;
  setCategory(s: string) {
    for (let i = 0; i < this.cinema.length; i++) {
      this.cinema[i].visible[0] = false;
      if (this.cinema[i].category == s) this.cinema[i].visible[0] = true;
    }
  }
  getCategory(): Movies[] {
    return this.cinema;
  }
  BookByGenie(n: Movies){
    this.book=n;
  }
  getBookByGenie(): Movies{
    return this.book;
  }
}

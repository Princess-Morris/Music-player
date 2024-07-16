import { song1, song2, song3, song4, song5, song6, song7 } from "../mock-songs"
import { IMusic } from "../types/music"

export const songArr: IMusic[] = [
   {
    id: "1",
    title: "Grace",
    artiste: "TashaCobbs",
    genre: "Soul",
    city: "Atlanta",
    song: song1
   },

   {
    id: "2",
    title: "King of Kings",
    artiste: "Cobbs",
    genre: "Gospel",
    city: "Maryland",
    song: song2,
   },

   {
    id: "3",
    title: "You make me happy",
    artiste: "Tasha",
    genre: "Western",
    city: "Texas",
    song: song3,
   },

   {
    id: "4",
    title: "For your glory",
    artiste: "TashaCobbs Leonard",
    genre: "Western",
    city: "Chicago",
    song: song4,
   },

   {
    id: "5",
    title: "No longer a slave to fear",
    artiste: "Mrs TashaCobbs",
    genre: "Soul",
    city: "Atlanta",
    song: song5,
   },

   {
    id: "6",
    title: "I'm getting ready",
    artiste: "Mrs Leonard",
    genre: "soul",
    city: "Atlanta",
    song: song6,
   },

   {
    id: "7",
    title: "Here's my worship smile",
    artiste: "TashaCobbs",
    genre: "soul",
    city: "Atlanta",
    song: song7,
   }
]
import { IMusic } from "../types/music";
import { songArr } from "../mock/songArr";

export function gettingSongList(): IMusic[] {
   return songArr;
}
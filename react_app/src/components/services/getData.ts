import { log } from "console";
import { Url } from "url";

const API_URL = "https://starwars.egghead.training/"

const respPromise = fetch(API_URL + "films")

console.log(respPromise);



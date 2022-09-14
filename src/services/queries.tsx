import axios from "axios";
import { BASE_URL } from "../constants/url";

export async function getData(id: number){
    try {
        var response = await fetch(`${BASE_URL}${id}`);
        var data = await response.json();
        return data;
    }catch(err){
        console.error(err);
    }
}
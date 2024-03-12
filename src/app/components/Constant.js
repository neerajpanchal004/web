// "use client"
import axios from "axios"


// POST REQUEST

export async function postUsers(api,data) {
    try {
        let response = await axios.post(api, data);
    } catch (error) {
        console.log(error)
    }
}



// GET REQUEST

export async function getUsers() {

    try {
        let response = await axios.get(api + "/authdata");
        setLogindata(response.data)
    } catch (error) {
        console.log(error)
    }
}







  


export async function getData(apipoint, data) {

    try {
        let response = await axios.get(apipoint);
        data(response.data)
    } catch (error) {
        console.log(error)
    }
}








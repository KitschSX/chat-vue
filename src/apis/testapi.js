import requests from "@/utils/request.js"

export function getapi (){
    return requests({url:'home/category/head'})
}
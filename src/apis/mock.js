import Mock from "mockjs"
import loginData from "./mockData/login.js"
Mock.mock("/api\/home\/getData/","get", loginData.getMenu())//路径，方法，假数据

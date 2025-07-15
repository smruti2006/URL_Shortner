import express from "express"
import CreateUrl from '../Controller/URLsent.js'
const Router=express.Router()
Router.post('/sent',CreateUrl)
export default Router
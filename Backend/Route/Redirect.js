import express from 'express'
import Redirect from '../Controller/Redirect.js'
const Router=express.Router()
Router.get('/:id',Redirect)
export default Router;
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import * as prismicH from '@prismicio/helpers'
import { client } from './prismicConfig.js'

const app = express()
app.use(cors())
app.use (bodyParser.json())
app.use (bodyParser.urlencoded({extended:true}))

app.use((req, res, next) => {
  res.locals.ctx = {
    prismicH,
  }
  next()
})

app.get('/', async function(req,res){
  const { data } = await client.getFirst()
  res.json({
    status: data ? true : false,
    data: data
  })
})

app.listen(4000)

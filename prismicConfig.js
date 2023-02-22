import fetch from 'node-fetch'
import * as prismic from '@prismicio/client'

const repoName = 'aktinadance'
const accessToken = process.env.PRISMIC_ACCESS_TOKEN

const routes = [
  {
    type: 'home',
    path: '/',
  },
] 

export const client = prismic.createClient(repoName, { 
  fetch, 
  accessToken,
  routes,
})

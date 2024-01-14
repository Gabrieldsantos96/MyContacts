/* eslint-disable @typescript-eslint/no-explicit-any */

import { rest } from 'msw'
import { categoriesMock } from './categories'
import { contactsMock } from './contacts'

const ENV = process.env.API_URL || 'http://localhost:3001'

export const handlers = [
  rest.get<any>(`${ENV}/categories`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(categoriesMock))
  }),
  rest.get<any>(`${ENV}/contacts`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(contactsMock))
  }),
  rest.get<any>(`${ENV}/contacts/:id`, (req, res, ctx) => {
    const { id } = req.params
    if (id === '999') {
      return res(
        ctx.status(400),
        ctx.json({
          error: 'Bad Request',
          message: []
        })
      )
    }
    return res(ctx.status(200), ctx.json(contactsMock[0]))
  }),
  rest.put<any>(`${ENV}/contacts/:id`, (req, res, ctx) => {
    const { id } = req.params
    if (id === '999') {
      return res(
        ctx.status(400),
        ctx.json({
          error: 'Bad Request',
          message: []
        })
      )
    }
    return res(ctx.status(200), ctx.json(contactsMock[0]))
  }),
  rest.post<any>(`${ENV}/contacts`, (req, res, ctx) => {
    if (req.body.name === 'Nome do Contato 2') {
      return res(
        ctx.status(400),
        ctx.json({
          error: 'Bad Request',
          message: []
        })
      )
    }

    return res(ctx.status(200), ctx.json(contactsMock[0]))
  })
]

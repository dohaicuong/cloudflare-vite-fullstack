import tRPCPlugin from 'cloudflare-pages-plugin-trpc'
import { appRouter } from '../../tprc/router'
import { PagesFunction } from '@cloudflare/workers-types'

export const onRequest: PagesFunction = tRPCPlugin({
  router: appRouter,
  endpoint: '/trpc',
})

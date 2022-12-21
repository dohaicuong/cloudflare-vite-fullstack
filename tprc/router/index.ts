import { t } from '../builder'

export const appRouter = t.router({
  hello: t.procedure.query(({ input }) => ({ greeting: `hello world` })),
})

export type AppRouter = typeof appRouter

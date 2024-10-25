export function add(a: number, b: number): number {
  return a + b
}

import { Hono } from '@hono/hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Deno!')
})

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const pairs: [number, number][] = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]
  for (const pair of pairs) {
    console.log('Add', pair[0], '+', pair[1], '=', add(pair[0], pair[1]))
  }
  // console.log('Add 2 + 3 =', add(2, 3))
  // console.log('Add 2 + 3 =', add(2, 3))
  // console.log('Add 2 + 3 =', add(2, 3))
  // console.log('Add 2 + 3 =', add(2, 3))
  // console.log('Add 2 + 3 =', add(2, 3))
  Deno.serve(app.fetch)
}

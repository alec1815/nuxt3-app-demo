import type { IncomingMessage, ServerResponse } from 'http'
import { useQuery } from 'h3'

export default async (req: IncomingMessage, res: ServerResponse) => {
  if (req.method !== 'DELETE') return 'method not supported'
  const { id, data } = useQuery(req)
  // const todolist = JSON.parse(data.toString())
  console.log('aa', data)
  if (data.length > 1) {
    // todolist.filter((item) => item.id == Number(id))
  }
  return {
    code: 1,
    data: data,
  }
}

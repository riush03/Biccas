import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { Session } from '@/lib/types'

export const metadata = {
  title: 'Next.js AI Chatbot'
}

export default async function IndexPage() {
  const id = nanoid()
 


  return (
    
      <Chat id={id}  />
  
  )
}

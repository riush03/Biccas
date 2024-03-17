'use client'

import { cn } from '@/lib/utils'
import { ChatList } from '@/components/chat-list'
import { ChatPanel } from '@/components/chat-panel'
import { EmptyScreen } from '@/components/empty-screen'
import { ChatScrollAnchor } from '@/components/chat-scroll-anchor'
import { useEffect, useState } from 'react'
import { Doc,Id } from '@/convex/_generated/dataModel'
import { Session } from '@/lib/types'
import { usePathname, useRouter } from 'next/navigation'
import { toast } from 'sonner'

export interface ChatProps extends React.ComponentProps<'div'> {
   chatId: Id<"chats">;
}

export function Chat({ chatId, className }: ChatProps) {
  const router = useRouter()
  const path = usePathname()
  const [input, setInput] = useState('')

  const isLoading = true


  return (
    <>
      <div className={cn('pb-[200px] pt-4 md:pt-10', className)}>
    
          <>
            <ChatList  />
            <ChatScrollAnchor trackVisibility={isLoading} />
          </>
       
      </div>
      <ChatPanel chatId={chatId} input={input} setInput={setInput} />
    </>
  )
}

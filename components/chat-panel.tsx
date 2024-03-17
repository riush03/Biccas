import * as React from 'react'
import { Doc,Id } from "@/convex/_generated/dataModel"
import { Button } from '@/components/ui/button'
import { PromptForm } from '@/components/prompt-form'
import { ButtonScrollToBottom } from '@/components/button-scroll-to-bottom'
import { IconShare } from '@/components/ui/icons'
import { FooterText } from '@/components/footer'
import { api } from "@/convex/_generated/api";
import { ChatShareDialog } from '@/components/chat-share-dialog'
import { nanoid } from 'nanoid'
import { UserMessage } from './stocks/message'

export interface ChatPanelProps {
  chatId: Id<"chats">;
  title?: string;
  input: string;
  setInput: (value: string) => void;
}

export function ChatPanel({ chatId, title, input, setInput }: ChatPanelProps) {


 

  const exampleMessages = [
    {
      heading: 'Explain the concept',
      subheading: 'of a serverless function',
      message: `Explain the concept of a serverless function`
    },
    {
      heading: 'What are the benefits',
      subheading: 'of using turborepo in my codebase?',
      message: 'What are the benefits of using turborepo in my codebase?'
    },
    {
      heading: 'List differences between',
      subheading: 'pages and app router in Next.js',
      message: `List differences between pages and app router in Next.js`
    },
    {
      heading: 'What is the price',
      subheading: `of VRCL in the stock market?`,
      message: `What is the price of VRCL in the stock market?`
    }
  ]

  return (
    <div className="fixed inset-x-0 bottom-0 w-full bg-gradient-to-b from-muted/30 from-0% to-muted/30 to-50% duration-300 ease-in-out animate-in dark:from-background/10 dark:from-10% dark:to-background/80 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]">
      <ButtonScrollToBottom />

      <div className="mx-auto sm:max-w-2xl sm:px-4">
        <div className="mb-4 grid grid-cols-2 gap-2 px-4 sm:px-0">
        
              <div
             
                className={`cursor-pointer rounded-lg border bg-white p-4 hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900 ${
                   'hidden md:block'
                }`}

              >
                <div className="text-sm font-semibold">The Chatbot</div>
                <div className="text-sm text-zinc-600">
                  My ai chatbot
                </div>
              </div>
           
        </div>

      
          <div className="flex h-12 items-center justify-center">
            <div className="flex space-x-2">
                <>
                  <Button
                    variant="outline"
                  >
                    <IconShare className="mr-2" />
                    Share
                  </Button>
                  
                </>
              
            </div>
          </div>
      

        <div className="space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4">
          <PromptForm chatId={chatId} input={input} setInput={setInput} />
          <FooterText className="hidden sm:block" />
        </div>
      </div>
    </div>
  )
}

'use client'

import * as React from 'react'
import Textarea from 'react-textarea-autosize'
import { api } from "@/convex/_generated/api";
import { Doc,Id } from "@/convex/_generated/dataModel"
import { useAction, useQuery } from "convex/react";
import { useState } from "react";
import { UserMessage } from './stocks/message'
import { Button } from '@/components/ui/button'
import { IconArrowElbow, IconPlus } from '@/components/ui/icons'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { useEnterSubmit } from '@/hooks/use-enter-submit'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/navigation'

interface FormProps {
  chatId: Id<"chats">;
  input: string;
  setInput: (value: string) => void;

}

export function PromptForm({
  chatId,
  input,
  setInput
}: FormProps) {
  const router = useRouter()
  const { formRef, onKeyDown } = useEnterSubmit()
  const inputRef = React.useRef<HTMLTextAreaElement>(null)
  const chat = useQuery(api.chats.get, { id: chatId });
  const sendMessage = useAction(api.messages.submit);

  const [message, setMessage] = useState<string>("");

  if (chat === undefined) {
    return null;
}

if (chat === null) {
  return <div>Chat not found!</div>;
}

  const handleSendMessage = async () => {
    if (message === "") return;
    console.log("message sent");
    const temp = message;
    setMessage("");
    await sendMessage({
        role: "user",
        content: temp,
        chatId: chat._id,
    });
}


  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <form
      ref={formRef}
      onSubmit={async (e: any) => {
        e.preventDefault()

        // Blur focus on mobile
        if (window.innerWidth < 600) {
          e.target['message']?.blur()
        }

        const value = input.trim()
        setInput('')
        if (!value) return

         handleSendMessage();
      }}
    >
      <div className="relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-4 size-8 rounded-full bg-background p-0 sm:left-4"
              onClick={() => {
                router.push('/')
              }}
            >
              <IconPlus />
              <span className="sr-only">New Chat</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>New Chat</TooltipContent>
        </Tooltip>
        <Textarea
          ref={inputRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          placeholder="Send a message."
          className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
          autoFocus
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          name="message"
          rows={1}
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <div className="absolute right-0 top-4 sm:right-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button type="submit" size="icon" disabled={input === ''}>
                <IconArrowElbow />
                <span className="sr-only">Send message</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Send message</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </form>
  )
}

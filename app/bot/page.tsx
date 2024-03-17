"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { nanoid } from '@/lib/utils'
import { redirect } from "next/navigation";
import { Chat } from '@/components/chat'
import { auth, clerkClient } from "@clerk/nextjs";

// export const metadata = {
//   title: 'Biccus AI Chatbot'
// }

interface ChatPageProps {
  params: {
      chatId: Id<"chats">;
  }
}

const  IndexPage = ({ params }: ChatPageProps) => {
 
  const id = nanoid()
 
 

  return (
    
      <Chat chatId={params.chatId}  />
  
  )
}

export default IndexPage;

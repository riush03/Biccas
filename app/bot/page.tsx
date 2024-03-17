import { nanoid } from '@/lib/utils'
import { redirect } from "next/navigation";
import { Chat } from '@/components/chat'
import { auth, clerkClient } from "@clerk/nextjs";

export const metadata = {
  title: 'Biccus AI Chatbot'
}

export default async function IndexPage() {
  const { userId } = auth();
  const id = nanoid()
 
  if (!userId) {
    redirect("/");
  }

  return (
    
      <Chat id={id}  />
  
  )
}

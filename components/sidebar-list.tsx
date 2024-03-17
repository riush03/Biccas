import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel"
import { useQuery } from "convex/react";
import { AnimatePresence, motion } from 'framer-motion'
import { ClearHistory } from '@/components/clear-history'
import { SidebarItems } from '@/components/sidebar-items'
import { SidebarItem } from '@/components/sidebar-item'
import { SidebarActions } from '@/components/sidebar-actions'
import { ThemeToggle } from '@/components/theme-toggle'
import { cache } from 'react'

interface SidebarListProps {
  userId?: string
  children?: React.ReactNode
}



export async function SidebarList({ userId }: SidebarListProps) {
  const chats = useQuery(api.chats.list);

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex-1 overflow-auto">
      {chats?.length ? (
          <div className="space-y-2 px-2">
            <AnimatePresence>
                   {chats.map(
        (chat, index) =>
          chat && (
            <motion.div
              key={chat?._id}
              exit={{
                opacity: 0,
                height: 0
              }}
            >
              <SidebarItem index={index} chat={chat}>
                <SidebarActions
                  chat={chat}
                />
              </SidebarItem>
            </motion.div>
          )
      )}
    </AnimatePresence>
          </div>
       ) : (
          <div className="p-8 text-center">
            <p className="text-sm text-muted-foreground">No chat history</p>
          </div>
      )}
      </div>
      <div className="flex items-center justify-between p-4">
        <ThemeToggle />
        <ClearHistory  isEnabled={true} />
      </div>
    </div>
  )
}

'use client'

import { Chat } from '@/lib/types'
import { AnimatePresence, motion } from 'framer-motion'

import { Doc } from "@/convex/_generated/dataModel"
import { SidebarActions } from '@/components/sidebar-actions'
import { SidebarItem } from '@/components/sidebar-item'

interface SidebarItemsProps {
  chats?:  Doc<"chats">;
}

export function SidebarItems({ chats }: SidebarItemsProps) {
  if (!chats) return null

  return (
    <div>None here</div>
  )
}

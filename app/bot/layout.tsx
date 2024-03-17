import { SidebarDesktop } from '@/components/sidebar-desktop'
import { Providers } from '@/components/providers'
import { Header } from '@/components/Header'

interface ChatLayoutProps {
  children: React.ReactNode
}

export default async function ChatLayout({ children }: ChatLayoutProps) {
  return (
  <Providers  
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange>
  <div className="flex flex-col min-h-screen">
  <Header />
  <div  className="flex flex-col flex-1 bg-muted/50">
    <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden">
      <SidebarDesktop />
      <div className="group w-full overflow-auto pl-0 animate-in duration-300 ease-in-out peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]">
        {children}
      </div>
    </div>
    </div>
  </div>
  </Providers>
  )
}

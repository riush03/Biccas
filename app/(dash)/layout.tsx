import { SideNav } from "@/components/Siderbar";
import Header from "@/components/Navbar";
import { NavSection } from "@/components/NavSection";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
       <aside className="w-full gap-8">
          <Header />
        </aside>
      <div className="flex gap-8">
        
      <div className="flex flex-1 flex-col gap-8">
        <NavSection className="mt-20"  />
      </div>
        <div className="w-full">
             {children}
        </div>
      </div>
    </main>
  );
}

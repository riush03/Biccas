
import { auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import TopHeader from "@/components/Header";


export default async function DashboardPage() {
  const { userId } = auth();


  if (!userId) {
    redirect("/");
  }

    return (
    <>
      <div className="h-full">
         <TopHeader title="Biccas " subtitle="An AI image editor"/>
      </div>
    </>
  );
}

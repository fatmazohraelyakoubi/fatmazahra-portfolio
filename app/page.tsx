import Approch from "@/components/Approch";
import Clients from "@/components/Clients";
import Exerience from "@/components/Exerience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentPeoject from "@/components/RecentPeoject";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center
    flex-col overflow-clip mx-auto sm:px-10 px-5
    ">
      <div className="max-w-7xl w-full">
        
        <FloatingNav  navItems={navItems}/>
<Hero/>
<Grid/>
<RecentPeoject/>
<Clients/>
<Exerience/>
{/* <Approch/> */}
<Footer/>
      </div>
    </main>
  );
}

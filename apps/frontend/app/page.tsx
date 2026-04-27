import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import FleetDashboard from "@/components/dashboard/FleetDashboard";

export default function HomePage() {
  return (
    <div className="flex h-full flex-col bg-background text-foreground">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <FleetDashboard />
        </main>
      </div>
    </div>
  );
}

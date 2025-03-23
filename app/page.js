import CanvasBoard from "@/components/CanvasBoard";
import MenuBar from "@/components/MenuBar";
import Toolbox from "@/components/Toolbox";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="container mx-auto px-4 ">
        <MenuBar />
        <Toolbox />
        <CanvasBoard />
      </div>
    </main>
  );
}

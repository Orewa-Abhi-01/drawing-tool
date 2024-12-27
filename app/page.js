import MenuBar from "@/components/MenuBar";
import Toolbox from "@/components/Toolbox";


export default function Home() {
  return (
    <div className="container ">
      <div className=" bg-slate-800 mx-auto w-1/2 rounded-lg mt-4 p-2">
        <MenuBar />
      </div>
      <Toolbox />
    </div>
  );
}

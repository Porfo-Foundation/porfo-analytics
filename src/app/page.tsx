import Chat from "./components/Chat"
import Chart from "./components/Chart"
import Image from "next/image"
export default function Home() {
  return (
    <main className="flex h-screen gap-[1rem] flex-col items-center justify-between px-2 md:px-20 py-10 flex-wrap bg-neutral-900">
      <div className="flex w-full h-[10%] justify-start items-center">
        <Image src = '/porfo-logo.png' alt="porfo-logo" width={60} height={60} className="rounded-full"/>
      </div>
      <div className={`flex flex-row w-full h-[85%] justify-between items-center gap-2`}>
        <div className="flex w-1/2 md:w-2/5 h-full border-2 border-[#c9c4cd] rounded-md shadow-black">
          <Chat/>
        </div>
        <div className="flex w-1/2 md:w-3/5 h-full border-2 border-[#c9c4cd] rounded-md shadow-black">
          <Chart/>
        </div>
      </div>
    </main>
  )
}

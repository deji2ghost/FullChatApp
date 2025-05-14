import { TabsDemo } from "@/components/Layout/TabsWrapper"

const Home = () => {
  return (
    <div className="w-[40%] mx-auto flex flex-col gap-3 text-center">
        <div className="w-full bg-white">
            <h1 className="text-4xl text-black">Talk-a-tive</h1>
        </div>
        <div className="w-full mx-auto bg-white">
            <TabsDemo />
        </div>
    </div>
  )
}

export default Home

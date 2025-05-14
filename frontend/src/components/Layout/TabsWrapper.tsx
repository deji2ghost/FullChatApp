import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Signup from "./Signup"
import Login from "./Login"

export function TabsDemo() {
  return (
    <Tabs defaultValue="login" className="w-[400px] mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="signup">Signup</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Login />
      </TabsContent>
      <TabsContent value="signup">
       <Signup />
      </TabsContent>
    </Tabs>
  )
}
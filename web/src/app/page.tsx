import Hero from "@components/Landing/Hero";
import Login from "@components/Landing/Login";
import Logout from "@components/Landing/Logout";
import Navbar from "@components/Landing/NavBar";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <>
      <Navbar />
      <Hero />
      <Login />
      <Logout />
      {session?.user?.email}
    </>
  );
}

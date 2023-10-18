import Home from "@/components/screens/home/Home"
import { NextPage } from "next"

export default function HomePage<NextPageAuth>() {
	return <Home/>
}
HomePage.isOnlyUser = true
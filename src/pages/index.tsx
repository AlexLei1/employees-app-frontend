import Home from "@/components/screens/home/Home"
import { NextPage } from "next"
import { NextPageAuth } from '@/types/auth.type';

const HomePage: NextPageAuth = () => {
	return <Home/>
}

HomePage.isOnlyUser = true
export default HomePage
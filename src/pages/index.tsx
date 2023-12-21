import Home from "@/components/screens/home/Home"
import { NextPageAuth } from '@/types/auth.type';

const HomePage: NextPageAuth = () => {
	
	return <Home/>
}

HomePage.isOnlyUser = true

export default HomePage
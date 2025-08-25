import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { get_user } from "@/lib/database";
import ExploreComponent from "@/components/explore-component";

export default async function Home() {
    const authUser = await getServerSession(authOptions);
    const email = authUser?.user?.email || null
    var hasAccess = false;
    var authenticated = false;
    if (email != null){
        authenticated = true;
        const userDoc = await get_user(email)
        if (userDoc != false){
            hasAccess = true;
        }
    }

    return (
        <ExploreComponent hasAccess={hasAccess} authenticated={authenticated}/>
    )
}

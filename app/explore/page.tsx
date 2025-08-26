import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { get_user } from "@/lib/database";
import ExploreComponent from "@/components/explore-component";
import { startupIdeas } from "@/lib/lists";

export default async function Home() {
    const authUser = await getServerSession(authOptions);
    const email = authUser?.user?.email || null;

    let authenticated = false;
    let hasAccess = false;

    if (email) {
        authenticated = true;
        const userDoc = await get_user(email);
        if (userDoc) {
            hasAccess = true;
        }
    }

    const totalCount = startupIdeas.length;
    const ideasToShow = hasAccess ? startupIdeas : startupIdeas.slice(0, 5);

    return (
        <ExploreComponent
            hasAccess={hasAccess}
            authenticated={authenticated}
            ideas={ideasToShow}
            totalCount={totalCount} // pass this extra prop
        />
    );
}


import { lazy, Suspense } from "react";

const User = lazy( () => import('./User' ) ) 


const Dashboard = ( {children} ) =>   {
    return (
        <div>
            This is Dashboard
            {children}
        </div>
    )
}

export default Dashboard;
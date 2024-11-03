import { Link, Outlet } from "react-router-dom";

export default function Profile() {
    return (
        <div>
            <h1>User Profile</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="info">Profile Info</Link>
                    </li>
                    <li>
                        <Link to="orders">Orders</Link>
                    </li>
                    <li>
                        <Link to="settings">Settings</Link>
                    </li>
                </ul>
            </nav>
            <Outlet /> 
        </div>
    );
}

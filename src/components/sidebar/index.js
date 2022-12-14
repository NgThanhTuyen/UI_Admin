import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import BadgeIcon from "@mui/icons-material/Badge";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import AuthContext from "../../context/authProvider";
import { removeItem } from "../../common/storage/local";
import { useNavigate } from "react-router-dom";

import "./style.scss";
const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        removeItem("TOKEN");
        return navigate("/login");
    };
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">LyLy Shop</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    {/* <Link to="/" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link> */}
                    <p className="title">Qu???n L??</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>Kh??ch H??ng</span>
                        </li>
                    </Link>
                    {auth?.roleId === 1 ? (
                        <Link to="/staff" style={{ textDecoration: "none" }}>
                            <li>
                                <PersonOutlineIcon className="icon" />
                                <span>Nh??n Vi??n</span>
                            </li>
                        </Link>
                    ) : null}
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className="icon" />
                            <span>S???n Ph???m</span>
                        </li>
                    </Link>
                    <Link to="/orders" style={{ textDecoration: "none" }}>
                        <li>
                            <CreditCardIcon className="icon" />
                            <span>????n H??ng</span>
                        </li>
                    </Link>

                    <Link to="/type" style={{ textDecoration: "none" }}>
                        <li>
                            <CategoryIcon className="icon" />
                            <span>Danh M???c</span>
                        </li>
                    </Link>
                    <Link to="/brand" style={{ textDecoration: "none" }}>
                        <li>
                            <BadgeIcon className="icon" />
                            <span>Th????ng Hi???u</span>
                        </li>
                    </Link>
                    <p className="title">T??i Kho???n</p>
                    {/* <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Th??ng Tin T??i Kho???n</span>
                    </li> */}
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span onClick={handleLogout}>????ng Xu??t</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;

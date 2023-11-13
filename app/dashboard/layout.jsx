import Sidbar from "../ui/dashboard/sidebar/Sidbar";
import Navber from "../ui/dashboard/navber/Navber";
import style from "../ui/dashboard/dashboard.module.css";

const layout = ({ children }) => {
  return (
    <div className={style.container}>
      <div className={style.menu}>
        <Sidbar />
      </div>
      <div className={style.content}>
        <Navber />
        {children}
      </div>
    </div>
  );
};

export default layout;

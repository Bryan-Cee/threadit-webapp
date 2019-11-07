// import {} from "semantic-ui-react";
import CustomHeader from "./Header";
// import styles from "../styles/Layout.scss";

const Layout = (props: any) => {
    // TODO:
    //  - Add the main container styling
    //  - Specify fonts
    //  - Consider using grid to structure the layout.
    return (
        <div>
            <CustomHeader />
            <div style={{ width: `90vw`, margin: `2em auto`}}>
                {props.children}
            </div>
        </div>
    );
};

export default Layout;
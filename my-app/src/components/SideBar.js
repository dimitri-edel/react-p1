import React from "react";
import styles from "./SideBar.module.css";

function SideBar(props) {
    return (
    <div  className={styles.sidebar}>
        <ul>
            <li>
                <a href="#">{props.photos}</a>
            </li>
            <li>
                <a href="#">{props.illustrations}</a>
            </li>
            <li>
                <a href="#">{props.paintings}</a>
            </li>
        </ul>
    </div>
    );
}


export default SideBar;
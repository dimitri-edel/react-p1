import React from "react";
import styles from "./SideBar.module.css";

function SideBar(props) {
    return (
    <div  className={styles.sidebar}>
        <ul>
            <li>
                <a href="#." target="_blank">{props.photos}</a>
            </li>
            <li>
                <a href="#." target="_blank">{props.illustrations}</a>
            </li>
            <li>
                <a href="#." target="_blank">{props.paintings}</a>
            </li>
        </ul>
    </div>
    );
}


export default SideBar;
import React, {useEffect} from 'react';
import styles from "./informPage.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../API/userApi";

export const InformPage = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.auth.data);

    useEffect(() => {
        dispatch(fetchLogin());
    },[]);

    return (
        <div className={styles.block}>
            <span>Email: {userData?.email || ''}</span>
            <span>Biography:</span>
            <div className={styles.biography}>
                <span className={styles.text}>{userData?.biography || ''}</span>
            </div>
        </div>
    );
};

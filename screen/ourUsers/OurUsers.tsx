import styles from "./OurUsers.module.scss";
import UserCard from "./userCard/UserCard";
import {useEffect, useState} from "react";


function OurUsers() {
    const url = "https://tz.smart-ui.pro/";
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setUserData(data);
        }
        fetchData();
    }, []);
    return (
        <section className={styles.users}>
            <div className="container">
                <h2>our users</h2>
                <div className="wrap">
                    <div className={`${styles.blockCaption} ${styles.block}`}>
                        <div>
                            <p>photo</p>
                        </div>
                        <div>
                            <p>name</p>
                        </div>
                        <div>
                            <p>status</p>
                        </div>
                        <div>
                            <p>registration</p>
                        </div>
                        <div>
                            <p>age</p>
                        </div>
                        <div>
                            <p>action</p>
                        </div>
                    </div>
                    {
                        userData?.users?.map((item, index) => {
                           return <UserCard key={index} props={{
                                userName: item.name,
                                photo: item.photo,
                                status: item.online,
                                registration: item.registration,
                                age: item.age
                            }}/>
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default OurUsers;

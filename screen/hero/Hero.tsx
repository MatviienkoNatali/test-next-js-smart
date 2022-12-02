import styles from "./Hero.module.scss";
import {useEffect, useState} from "react";

function Hero() {
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

    const videoData = userData?.video;
    const idVideo = videoData?.embed;
    const srcImgYT = `//img.youtube.com/vi/${idVideo}/0.jpg`;
    const srcVideoYT = videoData?.link;

    function handleClick(){
        const player = document.querySelector('#player');
        // player.innerHTML = `<iframe src=${srcVideoYT}" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>'`
    }

    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.col}>
                    <h1>embed RK1K2bCg4J8</h1>
                    <p className={styles.description}>{videoData?.text}</p>
                    <a className={styles.link} href={srcVideoYT} target="_blank" rel="noreferrer">{srcVideoYT}</a>
                </div>
                <div className={`${styles.player} ${styles.col}`} id="player">
                    <button onClick={handleClick}>
                        <picture className={styles.iconYouTube}>
                            <img src={srcImgYT} alt="img-iframe"/>
                        </picture>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;

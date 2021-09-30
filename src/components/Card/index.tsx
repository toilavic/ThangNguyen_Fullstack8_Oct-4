import React from "react";

import styles from './Card.module.css'


interface Props {
    name : String,
    nickname: String,
    website: String,
    id: Number,
    seeMoreDetail: (id: Number) => void;
}

const Index: React.FC<Props> = ({
    name,
    nickname,
    website,
    id, 
    seeMoreDetail
}) => {

    const ILIKE2SHORTCHARACTERS = `https://eu.ui-avatars.com/api/name=${name}&color=000000`

    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardContent}>
                <img className={styles.profilePhoto} src={ILIKE2SHORTCHARACTERS}/>
                <div className={styles.name}>{ name }</div>
                <div className={styles.nickname}>{ nickname}</div>
                <a href="url" className={styles.website}>{ website }</a>
                <button className={styles.seeDetails} onClick={ () => seeMoreDetail(id)} >More details</button>
            </div>
        </div>
    )
}

export default Index;
import React from 'react'
import Link from 'next/link';
import moment from 'moment';
import axios from 'axios';
import styles from '../styles/Home.module.css'


export const getStaticProps = async()=>{
  const res = await axios.get('https://worldtimeapi.org/api/timezone/Asia/Kolkata');
  return {
      props: { dateTime: res.data.datetime},
  };
}

const Ssg = ({dateTime}) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3 className={styles.title}>Static Site Generation {`(SSG)`}</h3>
        <ul>
          <li className={styles.content}>Pages are built only once at build time</li>
          <li className={styles.content}>whenever requested it shows the same rendered at first</li>
        </ul>
        <h4 className={styles.content}> {moment(dateTime).format('MMMM Do YYYY, hh:mm:ss A')}</h4><br></br>
        <Link href='/'><a className={styles.contentBtn}>{`<< `}Back</a></Link>
      </main>
    </div>
  )
}

export default Ssg
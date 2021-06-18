import React from "react";
import Head from "next/head";

import GridContainer from "../src/components/GridContainer";
import AddButton from "../src/components/AddButton";
import styles from "../src/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UniClient</title>
        <meta name='description' content='A test application for UniClient' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={`${styles.title} mt-3 mx-auto mb-0 text-white`}>
          UniClient
        </h1>

        <div className='container h-100'>
          <div className={`${styles["app-grid"]} py-2 py-sm-3 py-md-4 py-lg-5`}>
            <GridContainer />
          </div>
        </div>

        <AddButton />
      </main>
    </div>
  );
}

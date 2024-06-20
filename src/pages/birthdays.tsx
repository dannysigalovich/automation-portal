import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './birthdays.module.css';

function TeamBirthdays() {
  return (
    <Layout
      title="Team Birthdays"
      description="Team Birthdays Page"
    >
      <main className={styles.mainBackground}>
        <section className={styles.birthdays}>
          <Heading as="h2" className={styles.birthdaysTitle}>🎉 Team Birthdays 🎉</Heading>
          <div className={styles.monthContainer}>
            <div className={clsx(styles.month, styles.january)}>
              <h3>January</h3>
              <ul>
                <li><strong>January 26:</strong> Dimitry Sigalovich</li>
              </ul>
            </div>
            <div className={clsx(styles.month, styles.february)}>
              <h3>February</h3>
              <ul>
                <li><strong>February 11:</strong> Shira Feigin</li>
              </ul>
            </div>
            <div className={clsx(styles.month, styles.march)}>
              <h3>March</h3>
              <ul>
                <li><strong>March 10:</strong> ------</li>
              </ul>
            </div>
            <div className={clsx(styles.month, styles.april)}>
              <h3>April</h3>
              <ul>
                <li><strong>April 23:</strong> Ron Zorea</li>
                <li><strong>April 26:</strong> Ofek Smadja</li>
              </ul>
            </div>
            <div className={clsx(styles.month, styles.may)}>
              <h3>May</h3>
              <ul>
                <li><strong>May 25:</strong> Noam Gruber</li>
              </ul>
            </div>
            <div className={clsx(styles.month, styles.june)}>
              <h3>June</h3>
              <ul>
                <li><strong>June 11:</strong> Shay Perpinial</li>
                <li><strong>June 16:</strong> Rachel Cohen</li>
              </ul>
            </div>
            <div className={clsx(styles.month, styles.july)}>
              <h3>July</h3>
              <ul>
                <li><strong>July 4:</strong> -----</li>
              </ul>
            </div>
            <div className={clsx(styles.month, styles.august)}>
              <h3>August</h3>
              <ul>
                <li><strong>August 7:</strong> Adi Dangor</li>
              </ul>
            </div>
            <div className={clsx(styles.month, styles.september)}>
              <h3>September</h3>
              <ul>
                <li><strong>September 3:</strong> Liran Nagar</li>
                <li><strong>September 13:</strong> Ori Zeiri</li>
              </ul>
            </div>
            <div className={clsx(styles.month, styles.october)}>
              <h3>October</h3>
              <ul>
                <li><strong>October 10:</strong> -----</li>
              </ul>
            </div>
            <div className={clsx(styles.month, styles.november)}>
              <h3>November</h3>
              <ul>
                <li><strong>November 14:</strong> -----</li>
              </ul>
            </div>
            <div className={clsx(styles.month, styles.december)}>
              <h3>December</h3>
              <ul>
                <li><strong>December 31:</strong> Shay Avraham</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default TeamBirthdays;

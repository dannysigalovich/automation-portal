import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className={clsx("button button--secondary button--lg", styles.exploreButton)} to="/docs/intro">
            🚀 Go to documentation 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureGrid}>
          <div className={styles.featureItem}>
            <h3>Documentation</h3>
            <p>Find in-depth information about our automation processes and tools.</p>
            <Link className="button button--primary" to="/docs/intro">
              Learn More
            </Link>
          </div>
          <div className={styles.featureItem}>
            <h3>Blog</h3>
            <p>Read our latest articles and updates about automation trends and news.</p>
            <Link className="button button--primary" to="/blog">
              Read Blog
            </Link>
          </div>
          <div className={styles.featureItem}>
            <h3>GitHub</h3>
            <p>Explore our projects, contribute, and collaborate with our team on GitHub.</p>
            <Link className="button button--primary" href="https://github.com/dannysigalovich/automation-portal">
              Visit GitHub
            </Link>
          </div>
          <div className={styles.featureItem}>
            <h3>Team Birthdays</h3>
            <p>Celebrate the birthdays of our team members and stay connected.</p>
            <Link className="button button--primary" to="/birthdays">
              View Birthdays
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Welcome to the Automation Section">
      <div className={styles.mainBackground}>
        <HomepageHeader />
        <main>
          <Features />
        </main>
      </div>
    </Layout>
  );
}

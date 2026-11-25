import styles from "./about.module.css";

export default function AboutUs() {
  return (
    <main>
      <header className={styles.header}><p>About Access Vision</p><h1>Bringing Eye Care Closer to Home</h1></header>
      <div className={styles.aboutInfo}>
        <p>Access Vision Mobile Eye Clinic is an Alabama nonprofit dedicated to removing barriers to quality eye care. We believe that where you live, how much you earn, or whether you have health insurance should never determine your ability to see clearly.</p>
        <p>Access Vision builds on years of experience in mobile eye care. Our leadership team includes individuals who helped establish Alabama&apos;s first mobile eye clinic. Their experience has shaped a proven approach to delivering professional, compassionate eye care in community-based settings.</p>
        <p>We work alongside local healthcare providers, senior centers, nonprofit organizations, and other community partners to bring services into familiar, convenient locations. We focus on reaching communities where affordable, comprehensive eye care is limited or unavailable.</p>
        <p>Our approach is simple: bring quality care to the people who need it, rather than expecting them to overcome barriers to reach us.</p>
        <h2>Our Mission</h2><p>Our mission is to deliver high-quality, accessible, affordable eye care directly to underserved communities across Alabama.</p>
        <h2>Our Vision</h2><p>We envision a world where no one&apos;s quality of life is limited by preventable vision loss, regardless of their location or circumstances.</p>
      </div>
    </main>
  );
}

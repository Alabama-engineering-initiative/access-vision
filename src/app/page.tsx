import ClinicSchedule from "@/components/ClinicSchedule";
import styles from "./page.module.css";
import {CheckCircle, Glasses, Users, Eye, Stethoscope} from 'lucide-react';

export default function Home() {
  return (
    <main id="home">
      
      <section className={styles.hero}>
        <h1>Bringing Comprehensive Eye Care to Alabama Communities</h1>
        <p>Mobile eye clinics providing accessible care to the underserved.</p>
        <a href="#schedule" className={styles.btn}>Find a Clinic Near You</a>
      </section>

      <div className={styles.quickInfo}>
        <div className={styles.infoItem}><CheckCircle size={20} /> Free/Low Cost</div>
        <div className={styles.infoItem}><Glasses size={20} /> Exams & Glasses</div>
        <div className={styles.infoItem}><Users size={20} /> All Ages</div>
      </div>

      <section id="schedule">
        <h2>Upcoming Clinics</h2>
        <ClinicSchedule />
      </section>

      <section>
        <div className={styles.posterFrame}>
          <div className={styles.posterPlaceholder}>
            <p><strong>Access Vision Outreach Flyer (PDF)</strong></p>
            <h3><strong>Coming Soon</strong></h3>
          </div>

          <p>
            <strong>
              Download our latest event flyer to share with your community.
            </strong>
          </p>

          <a
            href="/test file download.pdf" // Note: Put this PDF in your 'public' folder!
            className={styles.btn}
            style={{ padding: "10px 20px", fontSize: "1rem", marginTop: "10px" }}
            download
            aria-label="Download Access Vision Outreach Flyer"
          >
            Download Flyer (PDF)
          </a>
        </div>
      </section>

      <section id="about" className={styles.about}>
        <h2>About Us</h2>
        <p>
          Access Vision is a nonprofit organization created to address critical
          gaps in eye care for uninsured and underinsured individuals across
          Alabama. Through a lean, volunteer-driven model, we provide
          comprehensive eye exams and prescription glasses at very low cost,
          making quality vision care accessible to those who need it most.
        </p>
        <p>
          <br /> We proudly accept all major insurance carriers and work
          intentionally to keep out-of-pocket costs far below traditional,
          for-profit models. Most importantly, no one is ever turned away due to
          an inability to pay.
        </p>

        <h3 style={{ marginTop: "2rem", color: "var(--accent-teal)" }}>
          Partnerships
        </h3>
        <p>
          We collaborate with local schools, churches, and nonprofits to host
          our mobile clinics directly where the need is greatest.
        </p>

        <h3 style={{ marginTop: "2rem", color: "var(--accent-teal)" }}>
          Vision & Mission
        </h3>
        <p>
          We envision a world where no one's quality of life is limited by preventable vision loss, regardless of their location or circumstances.
        </p>
        <p>
          Our mission is to deliver high-quality, accessible, affordable eye care directly to underserved communities across Alabama.
        </p>
      </section>

      <section id="mission">
        <h3>Services</h3>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}><Eye size={48} /></div>
            <h4>Comprehensive Exams</h4>
            <p>Full Medical Eye Examinations</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}><Glasses size={48} /></div>
            <h4>Prescription Glasses</h4>
            <p>Including Single Vision, Bifocals, Progressive Lenses, and Sunglasses</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}><Stethoscope size={48} /></div>
            <h4>Disease Detection</h4>
            <p>Screening for Diabetes, Cataracts, Glaucoma, and others (referrals for secondary care if necessary)</p>
          </div>
        </div>
      </section>

    </main>
  );
}

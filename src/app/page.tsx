import ClinicSchedule from "@/components/ClinicSchedule";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main id="home">
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Access Vision Mobile Eye Clinic</p>
          <h1>Better Vision. Better Lives.</h1>
          <p className={styles.lead}>Bringing quality eye care directly to Alabama communities.</p>
          <p>Everyone deserves the opportunity to see clearly and live life to the fullest. Yet for many Alabamians, the cost of eye care, lack of transportation, limited insurance coverage, and distance from providers make accessing even routine eye care difficult.</p>
          <p>Access Vision Mobile Eye Clinic is changing that. We are an Alabama-based nonprofit organization bringing comprehensive, affordable eye care directly to communities where these services are limited or difficult to access.</p>
          <p>Whether you need new glasses, haven&apos;t had an eye exam in years, or have concerns about your vision, we&apos;re here to help.</p>
          <div className={styles.actions}><a href="#schedule" className={styles.btn}>Find a Clinic</a><a href="#support" className={styles.secondaryBtn}>Support Our Work</a></div>
        </div>
      </section>
      <div className={styles.quickInfo}>We welcome patients with and without insurance and never turn anyone away because of an inability to pay.</div>

      <section id="services" className={styles.contentSection}>
        <p className={styles.sectionLabel}>Our Services</p>
        <h2>Comprehensive Care, Close to Home</h2>
        <p>Access Vision provides much more than basic vision screenings. Our mobile clinics bring professional eye care and advanced diagnostic equipment directly into the communities we serve.</p>
        <p>Our services include:</p>
        <ul className={styles.serviceList}>
          <li>Comprehensive eye examinations</li><li>Prescription eyeglasses</li>
          <li>Evaluation for cataracts, glaucoma, diabetic eye disease, and other eye conditions</li>
          <li>Diagnostic testing</li><li>Identification of potentially serious eye and systemic health conditions</li>
          <li>Referrals for specialized care when needed</li>
        </ul>
        <p>Our goal is not simply to help patients see better today, but to protect their vision and overall health for years to come.</p>
        <div className={styles.callout}><h3>Affordable Care for Everyone</h3><p>We accept Medicare, Medicaid, and most major insurance carriers. We also offer affordable examinations and prescription eyeglasses for patients without insurance.</p><p><strong>No patient will ever be turned away because of an inability to pay.</strong></p></div>
      </section>

      <section id="schedule" className={styles.contentSection}>
        <p className={styles.sectionLabel}>Find a Clinic</p>
        <h2>We&apos;re Coming to a Community Near You</h2>
        <p>Access Vision partners with organizations across Alabama to bring eye care directly to local communities.</p>
        <p>Our mobile clinics operate in familiar, accessible locations, making it easier for patients to receive care without traveling long distances.</p>
        <h3>Clinic schedule</h3><ClinicSchedule />
        <div className={styles.callout}><h3>Preparing for Your Visit</h3><p>If available, please bring:</p>
          <ul><li>Your insurance card</li><li>Your current eyeglasses</li><li>A list of medications you take</li><li>Information about any existing eye or health conditions</li></ul>
          <p>Don&apos;t have insurance? Haven&apos;t seen an eye doctor in years? Unsure whether you can afford care? Please don&apos;t let that keep you from making an appointment.</p><p>We look forward to seeing you.</p>
        </div>
      </section>

      <section id="why-it-matters" className={styles.contentSection}>
        <p className={styles.sectionLabel}>Why Our Work Matters</p><h2>Good Vision Changes Everything</h2>
        <p>Clear vision is essential to nearly every aspect of daily life. It affects our ability to work, read, drive, manage medications, live independently, and connect with the people and activities we love.</p>
        <p>Yet thousands of Alabama residents go without the eye care they need. For some, it means struggling for years with vision problems that a simple pair of glasses could correct. For others, it means living with undiagnosed eye disease that could lead to permanent vision loss.</p>
        <p>Many of the patients we serve have gone years without an eye examination. Some have never had one.</p>
        <p>Our clinics also play an important role in identifying serious health conditions. Through comprehensive eye examinations, Access Vision has identified warning signs of previously undetected health problems, including dangerously high blood pressure, strokes, and tumors.</p>
        <p>Every clinic represents an opportunity to restore vision, preserve independence, identify disease earlier, and improve someone&apos;s quality of life.</p>
        <p>Sometimes, something as simple as a pair of glasses can change a person&apos;s world.</p>
      </section>

      <section id="impact" className={styles.clinicPhotos} aria-labelledby="clinic-photos-heading">
        <p className={styles.sectionLabel}>Our Impact</p><h2 id="clinic-photos-heading">Behind Every Pair of Glasses Is a Story</h2>
        <p>It&apos;s the grandmother who can read to her grandchildren again. The patient who can return to a favorite hobby. The person who can safely manage their medications and maintain their independence. The patient whose eye examination reveals a serious health condition before it progresses.</p>
        <p>The impact of our work extends far beyond the number of examinations we perform or glasses we provide. It&apos;s measured in restored confidence, greater independence, improved health, and renewed opportunities to participate fully in everyday life.</p>
        <p>At Access Vision, we see firsthand what a difference accessible eye care can make.</p>
        <h3>Care in our communities</h3>
        <div className={styles.photoGrid}>
          <Image src="/access-vision/photos/eye-exam.jpg" width={1200} height={1200} alt="An eye doctor performs an examination with a slit lamp." />
          <Image src="/access-vision/photos/vision-check.jpg" width={1200} height={1016} alt="An eye doctor sits with a patient during a vision exam." />
          <Image src="/access-vision/photos/community-clinic.jpg" width={1200} height={903} alt="A patient takes a vision test at a mobile eye clinic." />
        </div>
      </section>

      <section id="partnerships" className={styles.contentSection}>
        <p className={styles.sectionLabel}>Community Partnerships</p><h2>Stronger Communities Through Partnership</h2>
        <p>Our work is possible because of the many organizations that share our commitment to improving the health and well-being of Alabama residents.</p>
        <p>We partner with community health centers, senior centers, nonprofit organizations, foundations, businesses, and other local organizations to identify needs, reach patients, and establish clinics in underserved communities.</p>
        <p>These partnerships help us build trust, reduce barriers to care, and make the most of available community resources.</p>
        <p>Does your community have an unmet need for affordable eye care? We&apos;d love to hear from you.</p>
      </section>

      <section id="support" className={styles.contentSection}>
        <p className={styles.sectionLabel}>Support Our Work</p><h2>Give the Gift of Sight</h2>
        <p>Imagine going through your day unable to read a prescription label, recognize a familiar face, or clearly see the world around you, knowing that the care you need is beyond your reach.</p>
        <p>For many of our patients, this has been their reality for years. Your generosity can help change that.</p>
        <p>As a nonprofit organization, Access Vision relies on a combination of insurance reimbursements, affordable patient fees, grants, and charitable contributions to sustain and expand our services.</p>
        <p>Your support helps us:</p><ul className={styles.serviceList}><li>Provide eye care to patients who cannot afford it.</li><li>Make prescription eyeglasses accessible to more people.</li><li>Purchase and maintain essential diagnostic equipment.</li><li>Expand services into additional underserved communities.</li><li>Identify potentially serious health conditions before they progress.</li></ul>
        <p>Together, we can build a healthier Alabama where everyone has the opportunity to see clearly and live fully.</p>
      </section>
      <section id="contact" className={styles.contentSection}>
        <p className={styles.sectionLabel}>Contact Us</p><h2>We&apos;d Love to Hear From You</h2>
        <p>Whether you&apos;re looking for a clinic near you, interested in bringing Access Vision to your community, exploring a partnership, or looking for ways to support our work, we welcome your questions.</p>
        <p>Contact information will be shared here when available.</p>
      </section>
    </main>
  );
}

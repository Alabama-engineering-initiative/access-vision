import styles from "./about.module.css"

export default function AboutUs() {

    return (
        <main>
            <header className={styles.header}>
                <h1>About Us</h1>
            </header>
            <div className={styles.aboutInfo}>
                <h2>Our Story</h2>
                <p> 
                Access Vision is a nonprofit organization addressing critical gaps in eye care for low-income, uninsured and underinsured individuals across Alabama. Through a lean, volunteer-driven model, we provide comprehensive eye exams and prescription glasses at very low cost, making quality vision care accessible to those who need it most.
                We proudly accept all major insurance carriers and work intentionally to keep out-of-pocket costs far below traditional, for-profit models. Importantly, no one is ever turned away due to an inability to pay. By operating independently while complementing existing health services, Access Vision ensures that cost, distance, and lack of coverage are never barriers to clear sight, confidence, and quality of life.
                </p>
            </div>
        </main>
    )
}

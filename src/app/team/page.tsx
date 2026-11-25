import ClinicTeam from "@/components/ClinicTeam";
import styles from "@/components/ClinicTeam.module.css";
import boardStyles from "./board.module.css";
import board from "@/data/board.json";

export default function TeamPage() {

    return (
        <main className="teamPage">
            <h1 className={styles.teamPageHeader}>Meet our Team</h1>
            <section id="schedule">
                <ClinicTeam />
            </section>
            <section id="board-of-directors" aria-labelledby="board-heading" className={boardStyles.board}>
                <header className={boardStyles.header}>
                    <p className={boardStyles.year}>2025-26</p>
                    <h2 id="board-heading">Board of Directors</h2>
                    <p>Access Vision’s Board is intentionally diverse, with strong representation from women and leaders from Black, Latino, and Asian communities, as well as members residing across multiple regions of Alabama, ensuring culturally informed and geographically responsive governance.</p>
                </header>
                <div className={boardStyles.roster}>
                    {board.map((member) => (
                        <article key={member.name} className={boardStyles.member}>
                            <div>
                                <h3>{member.name}</h3>
                                {member.role && <p className={boardStyles.role}>{member.role}</p>}
                            </div>
                            <p>{member.biography}</p>
                        </article>
                    ))}
                </div>
            </section>
          
        </main>
    )
}
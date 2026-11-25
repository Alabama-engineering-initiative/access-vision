"use client";

import { useEffect, useState } from "react";
import clinics from "@/data/schedule.json";
import styles from "./ClinicSchedule.module.css";

type Clinic = { date: string; location: string; tentative?: boolean };

export function groupClinics(today: string) {
  return {
    upcoming: clinics.filter((clinic) => clinic.date >= today),
    past: clinics.filter((clinic) => clinic.date < today),
  };
}

function clinicToday() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago", year: "numeric", month: "2-digit", day: "2-digit",
  }).formatToParts(new Date());
  const part = (type: string) => parts.find((item) => item.type === type)?.value;
  return `${part("year")}-${part("month")}-${part("day")}`;
}

function ClinicList({ items }: { items: Clinic[] }) {
  return (
    <ul className={styles.clinicList}>
      {items.map((clinic) => (
        <li key={`${clinic.date}-${clinic.location}`} className={styles.clinicCard}>
          <h4>{clinic.location}</h4>
          <p><time dateTime={clinic.date}>{new Intl.DateTimeFormat("en-US", {
            dateStyle: "full", timeZone: "UTC",
          }).format(new Date(`${clinic.date}T12:00:00Z`))}</time></p>
          {clinic.tentative && <p className={styles.note}>Tentative — please confirm.</p>}
        </li>
      ))}
    </ul>
  );
}

export default function ClinicSchedule() {
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => {
    const update = () => setToday(clinicToday());
    update();
    const interval = window.setInterval(update, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const groups = today ? groupClinics(today) : null;
  return (
    <div id="clinic-container" className={styles.clinicSchedule}>
      <p className={styles.intro}>
        September–December 2026 schedule. Dates may have passed or changed; contact us to confirm clinic details and availability.
      </p>
      {groups ? (
        <>
          <h3>Upcoming dates</h3>
          {groups.upcoming.length ? <ClinicList items={groups.upcoming} /> : <p>No upcoming dates are listed in this schedule.</p>}
          {groups.past.length > 0 && (
            <details className={styles.past}>
              <summary>Past clinic dates (2026)</summary>
              <ClinicList items={groups.past} />
            </details>
          )}
        </>
      ) : (
        <>
          <h3>2026 clinic dates</h3>
          <ClinicList items={clinics} />
        </>
      )}
    </div>
  );
}

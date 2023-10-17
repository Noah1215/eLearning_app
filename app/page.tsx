"use client";
import { Button } from "@mui/material";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [course, setCourseData] = useState();

  async function fetchQuery() {
    const baseUrl = `http://localhost:1337/api`;
    const res = await fetch(`${baseUrl}/courses/`);
    const data = await res.json();
    setCourseData(data);
    console.log(data);
    return data;
  }
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        eLearning
        <Button onClick={() => fetchQuery()}>Fetch Courses</Button>
      </div>
    </main>
  );
}

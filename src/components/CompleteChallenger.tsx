import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/CompleteChallenger.module.css";

export function CompleteChallenger() {

  const { challengesCompleted } = useContext(
    ChallengesContext
  );

  return (
    <div className={styles.completeChallengerContainer}>
      <span> Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}

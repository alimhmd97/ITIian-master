import styles from "./job.module.css";

export default function Job({ job }) {
  return (
    <div className={`rounded p-3 m-3 shadow-sm`} key={job.id}>
      <p className={`text-start btn p-0 ${styles.jobName}`}> {job.jobName} </p>
      <p className={`text-start job-location`}>
        <span className={`fw-bold`}> {job.company} </span> {job.adress}
      </p>
      <p className={` text-start job-description`}> {job.jobTitle} </p>
    </div>
  );
}

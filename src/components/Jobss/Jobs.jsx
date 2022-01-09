import React from "react";
import Job from "../Job/Job";
import { jobs } from "../../dummyData";
import PostJob from "../postJob/PostJob";
export default function Jobs() {
  return (
    <>
      <div className={`row gx-0`}>
        <div className={`col-lg-7`}>
          <h3 className={`text-center pt-4 pb-2`}>
            Explore New Career Opportunities
          </h3>
          <div>
            {jobs.map((J) => (
              <Job key={J.id} job={J} />
            ))}
          </div>
        </div>
        <div className={`order-0 col-lg-5 pt-5`}>
          <PostJob />
        </div>
      </div>
    </>
  );
}

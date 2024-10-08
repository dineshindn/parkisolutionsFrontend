import React from "react";
import JobEntryForm from "../../components/jobComponent";
import MainLayout from "../../components/common/MainLayout";
import { FormHeading } from "./styles";
const JobsMain = () => {
  return (
    <MainLayout>
      <FormHeading>
        <h3>Job Entry</h3>
        <p>Home / <span>Job Entry</span></p>
      </FormHeading>

      <JobEntryForm />
    </MainLayout>
  );
};

export default JobsMain;

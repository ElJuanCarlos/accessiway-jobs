import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { getSortedJobsData } from "../../../lib/jobs";
import Head from "next/head";
import { Footer, Header } from "@/modules/Organism";
import styled from "styled-components";
import { MdLocationPin } from "react-icons/md";
import { Form } from "@/modules/Molecules";

const IntroWrapper = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 80px;
`;
const JobCard = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  //background: #fafafa;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0px 0px 30px #00000010;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 180px;
  text-align: center;
`;
const Text = styled.p`
  font-size: 30px;
`;
const H3 = styled.h3`
  font-size: 20px;
  margin: 0px;
`;
const Par = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin: 20px 0px;
`;

interface JobPageProps {
  job: Job;
}

const JobPage = ({ job }: JobPageProps) => {
  return (
    <>
      <Head>
        <title>{job.id}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />

        <IntroWrapper>
          <Intro>
            <Text>{job.title}</Text>
            <div>
              <MdLocationPin style={{ marginRight: "5px" }} />
              {job.location}
            </div>
          </Intro>
        </IntroWrapper>
        <JobCard>
          <H3>{job.department}</H3>
          <Par>{job.description}</Par>
          <Form />
        </JobCard>
        <Footer />
      </main>
    </>
  );
};

export default JobPage;

export const getStaticPaths: GetStaticPaths = () => {
  const jobs = getSortedJobsData();
  const paths = jobs.map((job) => ({
    params: { id: job.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const jobs = getSortedJobsData();
  if (params) {
    const currentJob = jobs.find((job) => job.id === params.id);
    return {
      props: { job: currentJob },
    };
  } else {
    return {
      props: { job: "ciao" },
    };
  }
};

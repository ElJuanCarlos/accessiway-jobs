import { GetStaticProps } from "next";
import React from "react";
import { getSortedJobsData } from "../../../lib/jobs";
import Link from "next/link";
import Head from "next/head";
import { Header } from "@/modules/Organism";
import styled from "styled-components";
import { IntroText } from "@/components/JobList";
import Card from "@/modules/Molecules/CardBlog";

const Box = styled.div`
  padding-top: 80px;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

const JobList = ({ jobs }: JobListProps) => {
  return (
    <>
      <Head>
        <title>Accessiway jobs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <IntroText />
        <Box>
          {jobs.map((job) => (
            <Link
              key={job.id}
              href={`joblist/${job.id}`}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <Card
                title={job.title}
                description={job.description}
                location={job.location}
                icon={""}
              />
            </Link>
          ))}
        </Box>
      </main>
    </>
  );
};

export default JobList;

export const getStaticProps: GetStaticProps = async () => {
  const jobs = getSortedJobsData();
  return {
    props: { jobs },
  };
};
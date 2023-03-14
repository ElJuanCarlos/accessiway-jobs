interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  department: string;
}
interface JobListProps {
  jobs: Job[];
}

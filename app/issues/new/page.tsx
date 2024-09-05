import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";

// "@app/issues/_components/IssueForm"
const IssueForm = dynamic(() => import('../../issues/_components/IssueForm'), {
  ssr: false,
  loading: () => <IssueFormSkeleton/>,
});

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;

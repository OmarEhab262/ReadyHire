import HowDoYouStart from "../../components/apply-job/HowDoYouStart";
import LandingApplyJob from "../../components/apply-job/LandingApplyJob";
import LastSection from "../../components/apply-job/LastSection";
import LatestAvailableJobs from "../../components/apply-job/LatestAvailableJobs";
import MoreInformation from "../../components/apply-job/MoreInformation";
import Layout from "../../components/layout/Layout";

const ApplyJob = () => {
  return (
    <Layout>
      <LandingApplyJob />
      <MoreInformation />
      <LatestAvailableJobs />
      <HowDoYouStart />
      <LastSection />
    </Layout>
  );
};

export default ApplyJob;

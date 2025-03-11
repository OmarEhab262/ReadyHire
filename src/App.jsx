import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ProtectedRoute from "./pages/Auth/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import ScrollTop from "./components/scrollTop/ScrollTop";
//pages
import VerificationSuccess from "./components/signup/VerificationSuccess";
import VerifyEmail from "./components/signup/VerifyEmail";
import ApplyJob from "./pages/apply-job/ApplyJob";
import ViewDetailsJobPage from "./pages/apply-job/ViewDetailsJobPage";
import Login from "./pages/Auth/login/Login";
import Policies from "./pages/Auth/policies/Policies";
import OwnerStageTow from "./pages/Auth/signup/OwnerStageTow";
import SelectUser from "./pages/Auth/signup/SelectUser";
import Signup from "./pages/Auth/signup/Signup";
import BriefDescription from "./pages/company/create-profile/BriefDescription";
import CommercialRegistration from "./pages/company/create-profile/CommercialRegistration";
import CompanyProfileSetup from "./pages/company/create-profile/CompanyProfileSetup";
import CompanyRegistration from "./pages/company/create-profile/CompanyRegistration";
import UploadPhotoCompany from "./pages/company/create-profile/UploadPhotoCompany";
import ProfileCompany from "./pages/company/profile/ProfileCompany";
import DoTest from "./pages/do-test/DoTest";
import InstructionsDoTest from "./pages/do-test/InstructionsDoTest";
import StartDoTest from "./pages/do-test/StartDoTest";
import NotFound from "./pages/ErrorPages/NotFound";
import HireTalent from "./pages/hire-talent/HireTalent";
import Home from "./pages/home/Home";
import Job from "./pages/job/Job";
import PostJob from "./pages/post-job/PostJob";
import PostJobSuccess from "./pages/post-job/PostJobSuccess";
import Final from "./pages/seeker/create-profile/Final";
import UploadPhoto from "./pages/seeker/create-profile/UploadPhoto";
import UploadResume from "./pages/seeker/create-profile/UploadResume";
import ProfileSeeker from "./pages/seeker/profile/ProfileSeeker";
import TalentPage from "./pages/talent/TalentPage";
import TestResult from "./pages/do-test/TestResult";
import NotPassed from "./pages/do-test/NotPassed";
import TestPassed from "./pages/do-test/TestPassed";
import MyProposals from "./pages/proposals/MyProposals";
import MyJobs from "./pages/my-jobs/MyJobs";
import NeedsModification from "./pages/needs-modification/NeedsModification";
import SendProposal from "./pages/send-proposal/SendProposal";
import JobApplications from "./pages/job-applications/JobApplications";
import AccountSettings from "./pages/account-settings/AccountSettings";

// Initialize the QueryClient for React Query
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/select-user" element={<SelectUser />} />
          <Route path="/owner-stage-tow" element={<OwnerStageTow />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route
            path="/verification-success"
            element={<VerificationSuccess />}
          />
          <Route path="/upload-resume" element={<UploadResume />} />
          <Route path="/upload-photo-seeker" element={<UploadPhoto />} />
          <Route path="/final-profile" element={<Final />} />
          <Route
            path="/company-profile-first"
            element={<CompanyProfileSetup />}
          />
          <Route
            path="/company-registration"
            element={<CompanyRegistration />}
          />
          <Route
            path="/company-brief-description"
            element={<BriefDescription />}
          />
          <Route
            path="/company-commercial-registration"
            element={<CommercialRegistration />}
          />
          <Route
            path="/company-upload-photo"
            element={<UploadPhotoCompany />}
          />
          <Route path="/hire-talent" element={<HireTalent />} />
          <Route path="/apply-job" element={<ApplyJob />} />
          <Route path="/talent" element={<TalentPage />} />
          <Route path="/job" element={<Job />} />
          <Route path="/profile-seeker" element={<ProfileSeeker />} />
          <Route path="/profile-company" element={<ProfileCompany />} />
          <Route path="/view-details-job" element={<ViewDetailsJobPage />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/post-job-success" element={<PostJobSuccess />} />
          <Route path="/start-do-test" element={<StartDoTest />} />
          <Route
            path="/instructions-do-test"
            element={<InstructionsDoTest />}
          />
          <Route path="/do-test" element={<DoTest />} />
          <Route path="/results" element={<TestResult />} />
          <Route path="/not-passed" element={<NotPassed />} />
          <Route path="/test-passed" element={<TestPassed />} />
          <Route path="/my-proposals" element={<MyProposals />} />
          <Route path="/my-jobs" element={<MyJobs />} />
          <Route path="/needs-modification" element={<NeedsModification />} />
          <Route path="/send-proposal" element={<SendProposal />} />
          <Route path="/job-applications" element={<JobApplications />} />
          <Route path="/account-settings" element={<AccountSettings />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

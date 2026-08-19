import ComplianceHero from "../components/compliance/ComplianceHero";
import ComplianceOverview from "../components/compliance/ComplianceOverview";
import DueDiligence from "../components/compliance/DueDiligence";
import KYCAML from "../components/compliance/KYCAML";
import ChainOfCustody from "../components/compliance/ChainOfCustody";
import ResponsibleMining from "../components/compliance/ResponsibleMining";
import ComplianceCTA from "../components/compliance/ComplianceCTA";

export default function CompliancePage() {
  return (
    <main>
      <ComplianceHero />
      <ComplianceOverview />
      <DueDiligence />
      <KYCAML />
      <ChainOfCustody />
      <ResponsibleMining />
      <ComplianceCTA />
    </main>
  );
}
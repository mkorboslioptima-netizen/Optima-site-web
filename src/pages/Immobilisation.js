
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import ProjectResult from "../components/Projects/ProjectResult";
import RelatedProject from "../components/Projects/RelatedCompta";
import ServiceImmobilisation from "../components/Services/ServiceImmobilisation";
import SEO from "../components/SEO";
import HeroImmobilisation from "../components/Hero/HeroImmobilisation";
import ProjectOverviewImmobilisation from "../components/Projects/ProjectOverviewImmobilisation";
import ProjectResultImmobilisation from "../components/Projects/ProjectResultImmobilisation";
import RelatedImmobilisation from "../components/Projects/RelatedImmobilisation";
export default function ProjectDetails() {
  return (
    <InnerPageLayout>
      <SEO
        title="Sage Immobilisation"
        description="Sage Immobilisation : gérez vos actifs, amortissements et inventaires. Solution complète intégrée par Optima en Tunisie pour une gestion efficace de vos immobilisations."
        path="/Immobilisation"
      />
      <HeroImmobilisation />
      <ProjectOverviewImmobilisation />
      <ServiceImmobilisation />
      {/*<ProjectRequirement /> */}
      <ProjectResultImmobilisation />
      <RelatedImmobilisation/>
    </InnerPageLayout>
  );
}

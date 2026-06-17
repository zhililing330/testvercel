import { RealEstateCasePage } from "@/components/cases/real-estate-case-page";
import { caseCatalog, realEstateCaseMeta } from "@/content/cases";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: realEstateCaseMeta.title,
  description: realEstateCaseMeta.description,
  path: caseCatalog.realEstate.href,
});

export default function RealEstatePage() {
  return <RealEstateCasePage />;
}

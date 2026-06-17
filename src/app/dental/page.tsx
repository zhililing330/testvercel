import { DentalCasePage } from "@/components/cases/dental-case-page";
import { caseCatalog, dentalCaseMeta } from "@/content/cases";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: dentalCaseMeta.title,
  description: dentalCaseMeta.description,
  path: caseCatalog.dental.href,
});

export default function DentalPage() {
  return <DentalCasePage />;
}

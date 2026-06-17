import { LawCasePage } from "@/components/cases/law-case-page";
import { caseCatalog, lawCaseMeta } from "@/content/cases";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: lawCaseMeta.title,
  description: lawCaseMeta.description,
  path: caseCatalog.law.href,
});

export default function LawPage() {
  return <LawCasePage />;
}

import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/i18n/config";

export default function LawPage() {
  redirect(`/${DEFAULT_LOCALE}/law`);
}

import Select from "@/components/select";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <h1 className="text-5xl">{t("title")}</h1>
      <Select />
    </div>
  );
}

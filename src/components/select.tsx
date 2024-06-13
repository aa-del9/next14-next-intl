"use client";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/lib/navigation";
import React from "react";

const Select = () => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("select");
  return (
    <div>
      <select
        name="lang"
        id="lang"
        onChange={(e) => {
          router.replace(pathname, { locale: e.target.value });
        }}
      >
        <option value="">{t("title")}</option>
        <option value="en">{t("en")}</option>
        <option value="ar">{t("ar")}</option>
      </select>
    </div>
  );
};

export default Select;

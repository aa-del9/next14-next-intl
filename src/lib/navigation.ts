import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "@/lib/config";
export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation(
  { locales /* ... */ }
);

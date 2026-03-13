"use client"
import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";
import { useLang } from "@/context/LangContext";
import { translations_about } from "@/lib/translations_about";

const page = () => {
const phd_description = portfolioConfig.about.phd_description;
const { lang } = useLang();
const t = translations_about[lang];

return (
// ABOUT PAGE
<div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
<Badge variant="secondary" className="gap-1.5 py-1 ">
<User2 className="h-4 w-4" />
        {t.badge}
</Badge>
<div className="flex flex-col gap-5">
<Heading>
{t.occupation}
</Heading>
<FramerWrapper y={0} x={100}>
<p className=" font-poppins text-xl w-full text-tertiary max-sm:text-lg ">
{t.bio}
</p>
</FramerWrapper>
</div>
</div>
  );
};
export default page;
import HeroAvatar from "./hero-avatar";
import HeroHeadlineIntro from "./hero-headline-intro";
import HeroCtas from "./hero-ctas";
import HeroTechChips from "./hero-tech-chips";
import {
  APP_NAME,
  AVAILABILITY_LINE,
  ROLE,
  HERO_EXPERIENCE_LINE,
  HERO_VALUE_LINE,
} from "@/lib/constants";

const TITLE = "Hello! My name is";

const Hero = () => {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-between">
        <HeroAvatar />
        <div className="basis-[60%]">
          <HeroHeadlineIntro>
            <p className="text-sm font-press-start">{TITLE}</p>
            <h1 id="hero-heading" className="text-6xl font-play mb-2">
              {APP_NAME}
            </h1>
          </HeroHeadlineIntro>
          <p className="text-xl font-questrial text-subtle">{ROLE}</p>
          <p className="mb-4 text-base font-questrial text-subtle">
            {HERO_EXPERIENCE_LINE}
          </p>
          <div className="max-w-prose">
            <p className="text-base font-questrial">{HERO_VALUE_LINE}</p>
            <HeroTechChips />
          </div>
          <p className="mt-4 text-base font-questrial text-subtle">
            {AVAILABILITY_LINE}
          </p>
          <div className="mt-6">
            <HeroCtas />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

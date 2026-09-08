import AboutHero from "@/src/components/about/AboutHero";
import AboutStory from "@/src/components/about/AboutStory";
import AboutExpertise from "@/src/components/about/AboutExpertise";
import AboutServices from "@/src/components/about/AboutServices";
import AboutQuote from "@/src/components/about/AboutQuote";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutExpertise />
      <AboutServices />
      <AboutQuote />
    </main>
  );
}

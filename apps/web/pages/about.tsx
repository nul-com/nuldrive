import { ReactElement } from 'react';
import { WebLayoutsLandingUi } from '@nuldrive/web/layouts/landing/ui';
import { IllustrationRed } from '@nuldrive/web-layouts-landing-sections-illustration';
import { WebLayoutsLandingSectionsAboutIntro } from '@nuldrive/web/layouts/landing/sections/about-intro';
import { WebLayoutsLandingSectionsAboutStory } from '@nuldrive/web/layouts/landing/sections/about-story';
import { WebLayoutsLandingSectionsTimeline } from '@nuldrive/web/layouts/landing/sections/timeline';
import { WebLayoutsLandingSectionsAboutStats } from '@nuldrive/web/layouts/landing/sections/about-stats';
import { WebLayoutsLandingSectionsTeam } from '@nuldrive/web/layouts/landing/sections/team';
import { WebLayoutsLandingSectionsTestimonialCarousel } from '@nuldrive/web/layouts/landing/sections/testimonial-carousel';
import { WebLayoutsLandingSectionsCareer } from 'libs/web/layouts/landing/sections/career/src';
import { WebLayoutsLandingSectionsAboutClients } from 'libs/web/layouts/landing/sections/about-clients/src';
import { WebLayoutsLandingSectionsNewsletter } from '@nuldrive/web/layouts/landing/sections//newsletter';

export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <div className="grow">
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <IllustrationRed />
      </div>
      <WebLayoutsLandingSectionsAboutIntro />
      <WebLayoutsLandingSectionsAboutStory />
      <WebLayoutsLandingSectionsTimeline />
      <WebLayoutsLandingSectionsAboutStats />
      <WebLayoutsLandingSectionsTeam />
      <WebLayoutsLandingSectionsTestimonialCarousel />
      <WebLayoutsLandingSectionsCareer />
      <WebLayoutsLandingSectionsAboutClients />
      <WebLayoutsLandingSectionsNewsletter />
    </div>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsLandingUi>{page}</WebLayoutsLandingUi>;
};

export default About;

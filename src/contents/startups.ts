import type { Feature } from "../types/feature.type";
import {
  codeAnywhereFeature,
  collaborationFeature,
  multiTrackDevelopmentFeature,
} from "./home/features";

export const features: Feature[] = [
  {
    title: "Develop like Google, Facebook or Shopify",
    paragraph:
      "What big tech companies are trying to build internally, Gitpod is bringing to the rest of the world:  container-based development in the cloud.",
    image: {
      src: "/terminal.png",
      alt: "Gitpod Prebuilds",
      classNames: "rounded-4xl shadow-normal",
    },
  },
  collaborationFeature,
  codeAnywhereFeature,
  multiTrackDevelopmentFeature,
];

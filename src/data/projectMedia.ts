import type { FeaturedProject } from "./featuredProjects";
import aila from "../assets/projects/aila.webp";
import coneleste from "../assets/projects/coneleste.webp";
import esports from "../assets/projects/esports.webp";
import fanstoneLegacy from "../assets/projects/fanstone-legacy.webp";
import farmxp from "../assets/projects/farm-xp.webp";
import jac from "../assets/projects/jac.webp";
import lion from "../assets/projects/lion-fanstone.webp";
import maximiza from "../assets/projects/maximiza.webp";
import pasteur from "../assets/projects/pasteur.webp";

/** Captura de tela real de cada projeto, por thumbnailKey. */
export const projectMedia: Record<FeaturedProject["thumbnailKey"], string> = {
  aila,
  coneleste,
  esports,
  fanstoneLegacy,
  farmxp,
  jac,
  lion,
  maximiza,
  pasteur,
};

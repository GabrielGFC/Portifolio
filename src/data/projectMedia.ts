import type { FeaturedProject } from "./featuredProjects";
import aila from "../assets/projects/aila.png";
import coneleste from "../assets/projects/coneleste.png";
import esports from "../assets/projects/esports.png";
import fanstoneLegacy from "../assets/projects/fanstone-legacy.png";
import farmxp from "../assets/projects/farm-xp.png";
import jac from "../assets/projects/jac.png";
import lion from "../assets/projects/lion-fanstone.png";
import maximiza from "../assets/projects/maximiza.png";
import pasteur from "../assets/projects/pasteur.png";

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

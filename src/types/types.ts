export type Project = {
  id: number;
  name: string;
  text_short: string;
  text_long: string;
  type: string;
  image: string;
  image_mob: string;
  image_x2: string;
  image_mob_x2: string;
  image_project_x1: string[];
  image_project_mob_x1: string[];
  image_project_x2: string[];
  image_project_mob_x2: string[];
  href: string;
  technology: string[];
};

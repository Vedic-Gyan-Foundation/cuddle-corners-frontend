import {
  BookOpen,
  Calculator,
  Palette,
  Users,
  Globe,
  Hand,
} from "lucide-react";

// NOTE: titles and descriptions were previously mismatched (descriptions were
// rotated across cards). Each domain is now paired with its correct copy, and
// the sixth domain is named to match its "fine motor" description.
export const learningDomains = [
  {
    title: "Language Development",
    description:
      "Developing strong verbal and non-verbal skills through storytelling, phonics, songs, and discussions",
    icon: BookOpen,
  },
  {
    title: "Numeracy Skills",
    description:
      "Exploring numbers, patterns, and problem-solving through hands-on activities and real-world applications",
    icon: Calculator,
  },
  {
    title: "Creative Expression",
    description:
      "Nurturing imagination and confidence through art, music, movement, and storytelling",
    icon: Palette,
  },
  {
    title: "Social Skills",
    description:
      "Building emotional intelligence, teamwork, and self-awareness for strong social connections",
    icon: Users,
  },
  {
    title: "World Awareness",
    description:
      "Encouraging curiosity about nature, cultures, and communities to foster global understanding",
    icon: Globe,
  },
  {
    title: "Fine Motor Skills",
    description:
      "Strengthening dexterity and hand-eye coordination with drawing, puzzles, and building activities",
    icon: Hand,
  },
];

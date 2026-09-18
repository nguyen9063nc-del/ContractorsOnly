import {
  Building2,
  Check,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Droplets,
  Fan,
  Hammer,
  House,
  KeyRound,
  Layers,
  PaintRoller,
  Phone,
  ShieldCheck,
  Sparkles,
  Square,
  Star,
  Store,
  ThumbsUp,
  Trees,
  Truck,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * The house icon set, mapped from the design system's names to lucide-react
 * components.
 *
 * The design system's own Icon component fetches each glyph from unpkg at
 * runtime and injects the SVG on mount. That means a third-party request per
 * icon, a gap where the glyph should be until it lands, and a hard dependency
 * on a CDN staying up. Importing the components instead lets the bundler
 * tree-shake to just these, inlined, with no network cost.
 */
const ICONS = {
  "building-2": Building2,
  check: Check,
  "clipboard-check": ClipboardCheck,
  "clipboard-list": ClipboardList,
  clock: Clock,
  droplets: Droplets,
  fan: Fan,
  hammer: Hammer,
  house: House,
  "key-round": KeyRound,
  layers: Layers,
  "paint-roller": PaintRoller,
  phone: Phone,
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
  square: Square,
  star: Star,
  store: Store,
  "thumbs-up": ThumbsUp,
  trees: Trees,
  truck: Truck,
  users: Users,
  wrench: Wrench,
  zap: Zap,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;

export function Icon({
  name,
  size = 20,
  color,
  strokeWidth = 2,
}: {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
}) {
  const Glyph = ICONS[name];
  return <Glyph size={size} color={color} strokeWidth={strokeWidth} aria-hidden />;
}

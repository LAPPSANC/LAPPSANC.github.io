import type { ComponentType } from "react";
import { MeetingIllustration } from "./meeting-illustration";
import { PlanningIllustration } from "./planning-illustration";
import { DesignIllustration } from "./design-illustration";
import { DevelopmentIllustration } from "./development-illustration";
import { ReviewIllustration } from "./review-illustration";
import { LaunchIllustration } from "./launch-illustration";
import type { ProcessStep } from "@/lib/content";

export const processIllustrations: Record<
  ProcessStep["illustration"],
  ComponentType<{ className?: string }>
> = {
  meeting: MeetingIllustration,
  planning: PlanningIllustration,
  design: DesignIllustration,
  development: DevelopmentIllustration,
  review: ReviewIllustration,
  launch: LaunchIllustration,
};

import { BookOpen, CheckCircle2, Circle } from "lucide-react";
import type { MasteryStatus } from "../domain/graph";

export const statusMeta: Record<MasteryStatus, { label: string; icon: typeof Circle }> = {
  unknown: { label: "Not started", icon: Circle },
  learning: { label: "Learning", icon: BookOpen },
  mastered: { label: "Mastered", icon: CheckCircle2 },
};

export const masteryStatuses = Object.keys(statusMeta) as MasteryStatus[];

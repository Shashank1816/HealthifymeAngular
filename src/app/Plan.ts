import { Diet } from "./Diet";
import { Workout } from "./Workout";

export class Plan {
    plan_id: number | undefined;
    plan_name: string | undefined;
    diet: Diet | undefined;
    workout: Workout | undefined;
}
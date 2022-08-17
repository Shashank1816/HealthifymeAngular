import { Plan } from "./Plan";

export class User {
    user_id: number | undefined;
    name: string | undefined;
    email: string | undefined;
    password: string | undefined;
    age: number | undefined;
    weight: number | undefined;
    height: number | undefined;
    gender: string | undefined;
    plan: Plan | undefined;
}
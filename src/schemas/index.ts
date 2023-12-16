import { z } from "zod";

const ProfessorSchema = z.object({
  employeeID: z.string(),
});

const StudentSchema = z.object({
  studentID: z.string(),
});

const AuthFormSchema = z.object({
  profiles: z.array(z.string()).superRefine((profiles, ctx) =>
    profiles.forEach((profile) => {
      if (profile === "professor") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "too much",
          path: ["isHoursMaxValueReached"],
        });
      }
    })
  ),
});

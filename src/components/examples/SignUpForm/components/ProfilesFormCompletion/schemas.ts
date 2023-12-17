import { ZodObject, z } from "zod";

const StudentSchema = z.object({
  studentID: z.string(),
});

const EmployeeSchema = z.object({
  employeeID: z.string(),
});

type Profile =
  | "student"
  | "professor"
  | "supervisor"
  | "pupil"
  | "applicant"
  | "employee";

type ProfileSchemas = Partial<{
  [key in Profile]: ZodObject<any, any, any, any, any>;
}>;

const profiles_schemas: ProfileSchemas = {
  student: StudentSchema,
  employee: EmployeeSchema,
};

export { profiles_schemas };

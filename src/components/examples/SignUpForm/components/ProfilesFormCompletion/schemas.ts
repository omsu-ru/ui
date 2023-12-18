import { ZodObject, z } from "zod";
import { ProfileSchemas } from "../../types";

const TextSchema = z.string().min(1, "Это обязательное поле");

const StudentSchema = z.object({
  studentID: TextSchema,
});

const EmployeeSchema = z.object({
  employeeID: TextSchema,
});

const PartnerSchema = z.object({
  partnerID: TextSchema,
});

const GraduateSchema = z.object({
  graduateID: TextSchema,
});

const PupilSchema = z.object({
  pupilID: TextSchema,
});

const EventParticipantSchema = z.object({
  eventParticipantID: TextSchema,
});

const ApplicantSchema = z.object({
  applicantID: TextSchema,
});

const profiles_schemas: ProfileSchemas = {
  student: StudentSchema,
  professor: EmployeeSchema,
  supervisor: EmployeeSchema,
  pupil: PupilSchema,
  partner: PartnerSchema,
  applicant: ApplicantSchema,
  event_participant: EventParticipantSchema,
  graduate: GraduateSchema,
};

export { profiles_schemas };

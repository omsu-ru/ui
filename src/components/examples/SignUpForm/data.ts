import { Profiles } from "@/types";
import { ProfileFieldsType } from "./types";
import { CalendarHeart, Flame, HeartHandshake, Rocket } from "lucide-react";
import { Graduation, OmsuOutlined, Sparkles } from "@/icons";

export const profiles_fields: ProfileFieldsType = {
  [Profiles.student]: {
    icon: Rocket,
    title: "Для доступа к сервисам студента:",
    fields: [
      {
        placeholder: "0000000000",
        label: "Номер студенческого",
        type: "text",
        name: "studentID",
      },
    ],
  },
  [Profiles.professor]: {
    icon: OmsuOutlined,
    title: "Для доступа к сервисам преподавателя:",
    fields: [
      {
        placeholder: "№00/000",
        label: "Номер удостоверения работника",
        type: "text",
        name: "employeeID",
      },
    ],
  },
  [Profiles.applicant]: {
    icon: Flame,
    title: "Для доступа к сервисам абитуриента:",
    fields: [
      {
        placeholder: "???",
        label: "???",
        type: "text",
        name: "applicantID",
      },
    ],
  },

  [Profiles.supervisor]: {
    icon: OmsuOutlined,
    title: "Для доступа к сервисам заведующего кафедрой:",
    fields: [
      {
        placeholder: "???",
        label: "???",
        type: "text",
        name: "employeeID",
      },
    ],
  },
  [Profiles.event_participant]: {
    icon: CalendarHeart,
    title: "Для доступа к сервисам участника мероприятий:",
    fields: [
      {
        placeholder: "???",
        label: "???",
        type: "text",
        name: "eventParticipantID",
      },
    ],
  },
  [Profiles.partner]: {
    icon: HeartHandshake,
    title: "Для доступа к сервисам партнера:",
    fields: [
      {
        placeholder: "???",
        label: "???",
        type: "text",
        name: "partnerID",
      },
    ],
  },
  [Profiles.graduate]: {
    icon: Graduation,
    title: "Для доступа к сервисам выпускника:",
    fields: [
      {
        placeholder: "???",
        label: "???",
        type: "text",
        name: "graduateID",
      },
    ],
  },
  [Profiles.pupil]: {
    icon: Sparkles,
    title: "Для доступа к сервисам ученика школы:",
    fields: [
      {
        placeholder: "???",
        label: "???",
        type: "text",
        name: "pupilID",
      },
    ],
  },
};

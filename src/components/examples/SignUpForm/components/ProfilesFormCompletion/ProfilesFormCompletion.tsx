import React from "react";
import { useAuthStore } from "../../store";
import { z } from "zod";
import { profiles_schemas } from "./schemas";

// const dynamicSchema = z.object(
//   profiles.reduce((acc, profile) => {
//     acc[profile] = profileSchemas[profile];
//     return acc;
//   }, {})
// );

// function keysToZodSchema<Schema extends z.ZodTypeAny, Key extends string>(
//   schema: Schema,
//   ...keys: Key[]
// ) {
//   return keys.reduce(
//     (acc, key) => ({ ...acc, [key]: schema }),
//     {} as Record<Key, typeof schema>
//   );
// }

// const dynamicSchema = keysToZodSchema(StudentSchema, ...profiles);

type Profile = "student" | "professor" | "supervisor" | "pupil" | "applicant";

const ProfilesFormCompletion = () => {
  const profiles = useAuthStore((state) => state.profiles);
  const profilesSchema = z.object(
    profiles.reduce((acc, profile, i) => {
      acc[profile as keyof typeof profiles_schemas] = profiles_schemas[profile];
      return acc;
    }, {})
  );
  console.log(profiles);
  return (
    <div>
      {profiles.map((profile, key) => (
        <p key={key}>{profile}</p>
      ))}
    </div>
  );
};

export { ProfilesFormCompletion };

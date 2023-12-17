import React from "react";

import { useAuthStore } from "./store";
import { ProfilesFormCompletion, ProfilesList } from "./components";

const steps = [ProfilesList, ProfilesFormCompletion];

const SignUpForm = () => {
  const { step } = useAuthStore();

  const Form = steps[step];
  return <Form />;
};

export { SignUpForm };

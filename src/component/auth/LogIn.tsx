import { TextField, Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";

type LOGINFORMDATA = {
  email: string;
  password: string;
};
const SignUp = () => {
  const form = useForm<LOGINFORMDATA>({
    defaultValues: {
      email: "",
      password : "",
    },
  });
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const onSubmit = (data: LOGINFORMDATA) => {
    console.log("login form data", data);
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Stack className="w-[500px] gap-6 my-[50px] shadow-lg mx-auto p-10 rounded-lg ">
        <TextField
          label="Email"
          {...register("email", {
            required: {
              value: true,
              message: "email is requird",
            },
          })}
          error={!errors}
          helperText={errors.email?.message}
        />
        <TextField
          label="Password"
          {...register("password", {
            required: {
              value: true,
              message: "password is requird",
            },
          })}
          error={!errors}
          helperText={errors.password?.message}
        />

        <Button>Signup</Button>
      </Stack>
    </form>
  );
};

export default SignUp;

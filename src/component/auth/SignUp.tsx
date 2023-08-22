import { Typography, TextField, Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Link } from "react-router-dom";

type FORMDATA = {
  firstName: string;
  lastName: string;
  number: string;
  email: string;
  password: string;
  conformPassword: string;
};

const SignUp: React.FC = () => {
  const form = useForm<FORMDATA>({
    defaultValues: {
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      password: "",
      conformPassword: "",
    },
  });

  const { register, handleSubmit, control, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FORMDATA) => {
    console.log("signUp form data", data);
    if (data.password !== data.conformPassword) {
      alert("password not match");
    }
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack className="w-[500px] gap-6 my-[50px] shadow-lg mx-auto p-10 rounded-lg ">
          <TextField
            label="First Name"
            {...register("firstName", {
              required: {
                value: true,
                message: "first name is requird",
              },
            })}
            error={!errors}
            helperText={errors.firstName?.message}
          />
          <TextField
            label="last Name"
            {...register("lastName", {
              required: {
                value: true,
                message: "last name is requird",
              },
            })}
            error={!errors}
            helperText={errors.lastName?.message}
          />
          <TextField
            label="Number"
            {...register("number", {
              required: {
                value: true,
                message: "number is requird",
              },
            })}
            error={!errors}
            helperText={errors.number?.message}
          />
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
          <TextField
            label="Conform Password"
            {...register("conformPassword", {
              required: {
                value: true,
                message: "conform password is requird",
              },
            })}
            error={!errors}
            helperText={errors.conformPassword?.message}
          />
          <Typography className="text-blue-500">
            if you have already SignUp ?<Link className="hover:text-blue-700" to={"/login"}>Login</Link>
          </Typography>

          <Button className="bg-blue-500 hover:bg-blue-500 text-white" type="submit">Signup</Button>
        </Stack>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default SignUp;

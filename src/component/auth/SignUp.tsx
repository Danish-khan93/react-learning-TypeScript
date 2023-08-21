import { TextField, Button, Stack } from "@mui/material";

const SignUp = () => {
  return (
    <Stack className="w-[500px] gap-6 my-[50px] shadow-lg mx-auto p-10 rounded-lg ">
      <TextField label="First Name" />
      <TextField label="last Name" />
      <TextField label="Number" />
      <TextField label="Email" />
      <TextField label="Password" />
      <TextField label="Conform Password" />
      <Button>Signup</Button>
    </Stack>
  );
};

export default SignUp;

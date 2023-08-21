import { TextField, Button, Stack } from "@mui/material";

const SignUp = () => {
  return (
    <Stack className="w-[500px] gap-6 my-[50px] shadow-lg mx-auto p-10 rounded-lg ">
      <TextField label="Email" />
      <TextField label="Password" />

      <Button>Signup</Button>
    </Stack>
  );
};

export default SignUp;

import { Box, Button, FormControl, Heading, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useLoginProps } from "./useLoginProps";

export const Login = () => {
  const { show, handleClick, onSubmit, handleSubmit, register } = useLoginProps();

  return (
    <Box>
      <FormControl onSubmit={handleSubmit(onSubmit)} as="form">
        <Heading textAlign="center" mb={2}>
          Login
        </Heading>
        <Box display="flex" flexDirection="column" gap={3} maxWidth="400px" margin="0 auto">
          <Input type="text" placeholder="Login name" {...register("login_name")} />
          <InputGroup size="md">
            <Input
              {...register("password")}
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button type="submit">Submit</Button>
        </Box>
      </FormControl>
      <Box display="flex" justifyContent="center" color="dodgerblue">
        <Link to="/auth/register">register</Link>
      </Box>
    </Box>
  );
};

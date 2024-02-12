import cls from "./styles.module.scss";
import { useDetailProps } from "./useDetailProps";
import { Button, FormControl, Input } from "@chakra-ui/react";


export const Detail = () => {

  const { id, navigate, onSubmit } = useDetailProps();

  return <div>
    <Button onClick={() => navigate(-1)}>Back</Button>
    <h1 className={cls.title}>User id: {id}</h1>
    <FormControl as="form" onSubmit={() => onSubmit()}>
      <Input placeholder="Login" type="text" />
      <Button type="button">Save</Button>
    </FormControl>
  </div>;
};

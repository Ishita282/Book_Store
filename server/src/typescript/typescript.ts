interface User {
  id: string;
  name: string;
  age: string;
  email: string;
  password: string;
}

type UpdateProps = Pick<User, "name" | "age" | "email">;
function updateUser(updateProps: UpdateProps) {
  //hit the database tp update the user
}

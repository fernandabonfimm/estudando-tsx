import React from "react";
import { Container, Input, Title, Form, Label, Button } from "./styles";

export default function () {
  // guardados valores no state em forma de array, objetos, etc.. e independente do tipo do objeto
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    if (!email) {
      console.log("Insira o email no campo de e-mail");
    } else if (!password) {
      console.log("Insira o campo de senha a sua senha");
    } else {
      console.log("Login realizado com sucesso!");
    }
  };

  return (
    <Container>
      <Title>Estudando useState</Title>
      <Form>
        <Label>
          <span>E-mail</span>
          <Input
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>
        <Label>
          <span>Senha</span>
          <Input
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>
        <Button type="button" onClick={() => handleLogin()}>
          Entrar
        </Button>
      </Form>
    </Container>
  );
}

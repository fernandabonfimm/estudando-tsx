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

  React.useEffect(() => {
    // O useEffect impede que todas vez que eu altere um estado, o codigo nao seja repetido diversas vezes e controle por sua vez o codigo
    if (window.confirm("Você é homem?")) {
      console.log("Homem");
    } else {
      console.log("Mulher");
    }
  }, []);

  React.useEffect(() => {
    console.log(email);
    console.log(password);
  }, [email, password]);

  const emailLenght = React.useMemo(() => {
    //Suponha que precise realizar uma operação de certo grau de dificuldade, normalmente utilizamos o useMemo para o tal
    // Exemplo de operação: Calculos que nao devem ser executado varias vezes
    // Nesse caso usaremos para a qntd de caracteres no e-mail
    console.log('Executou!');
    return email.length * 1000;
  }, [email.length]);

  return (
    <Container>
      <Title>Estudando React</Title>
      <Form>
        <p>Quantidade de caracteres no e-mail: {emailLenght}</p>
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

import { Carro } from "../Carro";
import { Botao, Estacionamento, GaragemContainer } from "./styles";
import { useState } from "react";

export function Garagem({ nome, mudaNome }) {
  // modificar o carro com a a função setCarro, enviar para o componente e mudar o carro no clique do botão
  const [carro, setCarro] = useState({
    cor: "rosa",
    ano: 1993,
    flex: false,
    adicionadoPor: "Conway",
    modelo: "Fusca"
  });

  const novoCarro = {
    modelo: "Fiesta",
    cor: "branco",
    ano: 2002,
    adicionadoPor: "Clara",
    flex: true
  };

  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={mudaNome}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          modelo={carro.modelo}
          cor={carro.cor}
          ano={carro.ano}
          adicionadoPor={carro.adicionadoPor}
          flex={carro.flex}
          setCarro={setCarro}
          novoCarro={novoCarro}
        />
      </Estacionamento>
    </GaragemContainer>
  );
}

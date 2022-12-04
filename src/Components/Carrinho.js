import ItensCarrinho from "./ItensCarrinho";
import styled from "styled-components";

export default function Carrinho({ AddCarrinho, deletarDoCarrinho }) {
  return (
    <ContainerCarrinho>
      {AddCarrinho.map((p, index) => (
        <ItensCarrinho
          key={index}
          item={p}
          deletarDoCarrinho={deletarDoCarrinho}
        />
      ))}
    </ContainerCarrinho>
  );
}

const ContainerCarrinho = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 100vh;
  position: absolute;
  right: 0;
`;

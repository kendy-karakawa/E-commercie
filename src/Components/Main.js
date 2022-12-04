import ListaProdutos from "./ListaProdutos";
import Carrinho from "./Carrinho";
import styled from "styled-components";
import PRODUTOS from "./Mock";
import { useState } from "react";

export default function Main() {
  const [AddCarrinho, setAddCarrinho] = useState([]);

  function deletarDoCarrinho(itemDeletar) {
    const novaLista = AddCarrinho.filter((item) => item.id !== itemDeletar.id);
    setAddCarrinho(novaLista);
  }

  return (
    <ContainerApp>
      <ListaProdutos
        produtos={PRODUTOS}
        AddCarrinho={AddCarrinho}
        setAddCarrinho={setAddCarrinho}
      />
      <Carrinho
        AddCarrinho={AddCarrinho}
        deletarDoCarrinho={deletarDoCarrinho}
      />
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-right: 400px;
`;

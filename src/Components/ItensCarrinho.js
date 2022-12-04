import styled from "styled-components";

export default function ItensCarrinho({ item, deletarDoCarrinho }) {
  return (
    <ItemCarrinho>
      <img src={item.imagem} alt="img produto" />
      <div>
        <strong>{item.nome}</strong>
        {item.preco}
      </div>
      <button onClick={() => deletarDoCarrinho(item)}>X</button>
    </ItemCarrinho>
  );
}

const ItemCarrinho = styled.div`
  border: 1px solid black;
  display: flex;
  margin: 10px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  strong {
    margin-bottom: 5px;
  }
`;

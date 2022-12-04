import styled from "styled-components";

export default function Produto({ produto, AddCarrinho, setAddCarrinho }) {
  function adicionarCarrinho(item) {
    if (!AddCarrinho.includes(item)) {
      setAddCarrinho([item, ...AddCarrinho]);
    }
  }

  return (
    <ItemProduto>
      <img src={produto.imagem} alt="img produto" />
      <div>
        <p>{produto.nome}</p>
        <p>{produto.preco}</p>
      </div>
      <button onClick={() => adicionarCarrinho(produto)}>Comprar</button>
    </ItemProduto>
  );
}

const ItemProduto = styled.div`
  border: 1px solid black;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;

  img {
    width: 200px;
    height: 200px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
  }
`;

import Produto from "./Produto";
import styled from 'styled-components';

export default function ListaProdutos(props){
    const {produtos,AddCarrinho,setAddCarrinho} = props

    return(
        <ContainerLista>
            
            {produtos.map((produto)=> (
            <Produto
            key={produto.id}
            produto={produto}
            AddCarrinho={AddCarrinho}
            setAddCarrinho={setAddCarrinho}
 
            />
            ))}


        </ContainerLista>
    )
}

const ContainerLista = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
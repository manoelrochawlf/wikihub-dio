import { ItemContainer } from "./styles";

const ItemRepo = ({repo, handleRemoveRepo}) => {
    const handleRemove = () => {
        handleRemoveRepo(repo.id)
      }
    return (    
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} rel='noreferrer' target='_blank'>Ver repositório</a><br />
            <p className="remover" type="button" onClick={handleRemove}>Remover</p>
            <hr />
        </ItemContainer>
     );
}
 
export default ItemRepo;
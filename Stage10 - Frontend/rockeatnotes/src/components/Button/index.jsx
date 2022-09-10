import { Container } from "./style";

export function Button({title,loading=false,...rest}){
console.log(title)
return (
<Container type="button" disabled={loading} {...rest}>
  {loading?'Carregando':title}
</Container>)

}
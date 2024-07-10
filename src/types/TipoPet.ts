import EnumEspecie from "../enum/EnumEspecie";

type TipoRet={
    id:Number,
    nome:String,
    especie:EnumEspecie,
    adotado:Boolean,
    dataNascimento:Date
}
export default TipoRet;
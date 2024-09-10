import Logo from '../../assets/logo.png';
import Elf from '../../assets/elfbar.jpg';
import Ig from '../../assets/ignitev50.png';
import Ox from '../../assets/oxbar.png';

const produto = {
    
    detalhes: {
        logo: Logo,  
        nome: "Kit do K$",
        detalhes: "Um kit com 3 Pod's para você se divertir no rolê com os amigos.",
        preco: "R$ 155,00",
        botao: "Adicionar na Lista de Desejos",
    },
    itens: {
        titulo: "Itens do Kit",
        lista: [
          {
            nome: "1x Elfbar 5k",
            imagem: Elf,
          },
          {
            nome: "1x Ignite V50",
            imagem: Ig,
          },
          {
            nome: "1x Oxbar 8k",
            imagem: Ox,
          },
        ]
    }
}

export default produto;
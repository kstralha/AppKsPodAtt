
import Avatar from '../../assets/avatar.jpeg';

const perfil = {
  usuario: {
    nome: "Pedro Cavalheiro",  // Nome do usuário
    avatar: Avatar,  // Caminho para o avatar
    descricao: "Desenvolvedor Full Stack apaixonado por tecnologia e filosofia. Amante da neurociência e do comportamento humano.",
  },
  acoes: {
    botaoEditar: {
      texto: "Editar Perfil",
      acao: () => console.log("Editar Perfil clicado"),
    },
    botaoSair: {
      texto: "Sair",
      acao: () => console.log("Sair clicado"),
    }
  }
};

export default perfil;
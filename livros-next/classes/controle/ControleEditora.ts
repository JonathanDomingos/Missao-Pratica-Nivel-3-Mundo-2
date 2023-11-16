import Editora from '../modelo/Editora';

const editoras: Editora[] = [
  {
    codEditora: 1,
    nome: 'Editora de papel',
    autor: 'Erick masterson',
  },
  {
    codEditora: 2,
    nome: 'Silva',
    autor: 'Jorge Mateus',
  },
  {
    codEditora: 3,
    nome: 'Marisol',
    autor: 'Wave Santos',
  },
];

export class ControleEditora {
  public getEditoras = (): Editora[] => {
    return editoras;
  };

  public getNomeEditora = (codEditora: number): string => {
    const editoraEncontrada = editoras.find(
      (editora) => editora.codEditora === codEditora
    );
    if (editoraEncontrada) {
      return editoraEncontrada.nome;
    } else {
      throw new Error('Editora não encontrada');
    }
  };

  public getEditora = (codEditora: number): Editora | undefined => {
    return editoras.find((editora) => editora.codEditora === codEditora);
  };
}

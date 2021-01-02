export interface Conta {
    id: number;
    nome: string;
    descricao?: string;
    valor: number;
    valorUtilizado: number;
    dataCompra: Date;
    ano: number;
    parcelado: boolean;
    quantidadeParcela: number;
    pessoa: {
        id: number,
        nome: string,
        sobrenome: string,
        nomeCompleto: string
    };
    formaPagamento: {
        id: number;
        nome: string;
        diaVencimento: number;
    };
    mes: {
        id: number,
        nome: string,
    }
    pago: boolean;
    tipoConta: number;
    valorDividido: number;
}

export interface Lancamento {

    id: number;
    fechamento: number;
    ano: number;
    parcela: {
        id: number,
        vencimento: number,
        numero: number,
        valor: number,
        valorPago?: number
        conta: Conta
    };
    conta: Conta;
    pessoaId?: number;
    itensRelacionados: Lancamento[];
}
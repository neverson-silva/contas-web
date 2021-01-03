import React, { useEffect, useState } from 'react';
import ApiService from '../../services/api';
import { Container } from './styles';

import { Lancamento } from './types';

const Home: React.FC = () => {

    const [lancamentos, setLancamentos] = useState<Lancamento[]>([]); 
    const apiService = new ApiService();

    useEffect(() => {
  
      (async () => {
        const fetched = await apiService.get('/lancamentos');
        setLancamentos(fetched.data.itens);
      })();
  
    }, []);

    return (<Container>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Data Compra</th>
                            <th>Pertence à</th>
                            <th>Forma de Pagamento</th>
                        </tr>

                    </thead>
                    <tbody>
                        
                        {lancamentos.map(lancamento => {
                            return <tr key={Math.random()}>
                                <td key={lancamento.id + lancamento.conta.nome}> {lancamento.conta.nome} </td>
                                <td key={lancamento.id + lancamento.conta.valorUtilizado}> {lancamento.conta.valorUtilizado.toLocaleString('pt-BR')} </td>
                                <td key={lancamento.id + lancamento.conta.pessoa.id}> {new Date(lancamento.conta.dataCompra).toLocaleDateString('pt-BR')} </td>
                                <td key={lancamento.id + lancamento.conta.pessoa.nomeCompleto}> {lancamento.conta.pessoa.nomeCompleto} </td>
                                <td key={lancamento.id + lancamento.conta.formaPagamento.nome}> {lancamento.conta.formaPagamento.nome} </td>
                            </tr>
                        })}
                    </tbody>
                </table>
           </Container>);
}
export default Home;
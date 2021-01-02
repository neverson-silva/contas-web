import React, { useEffect, useState } from 'react';
import { Container } from './styles';

import {api, IToken, token} from './../../services/api';
import { Lancamento } from './types';



const Home: React.FC = () => {

    const [tokenAuth, setTokenAuth] = useState<string>('');
    const [lancamentos, setLancamentos] = useState<Lancamento[]>([]); 

    useEffect(() => {
  
      (async () => {
        const fetched: IToken = await (await token()).data;
        setTokenAuth(`Bearer ${fetched.token}`);
        const lancamentos = await api.get('/lancamentos', { headers: {'Authorization': `Bearer ${fetched.token}`} })
        setLancamentos(lancamentos.data.itens); 
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
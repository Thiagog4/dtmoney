import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data)
            )
    }, []);0


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>08/05/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">1.000</td>
                        <td>Casa</td>
                        <td>08/05/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}
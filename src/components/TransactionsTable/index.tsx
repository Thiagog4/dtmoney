import { Container } from "./styles";

export function TransactionsTable(){
    return(
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
                            <td>R$12.000</td>
                            <td>Desenvolvimento</td>
                            <td>08/05/2022</td>
                        </tr>
                        <tr>
                            <td>Desenvolvimento de site</td>
                            <td>R$12.000</td>
                            <td>Desenvolvimento</td>
                            <td>08/05/2022</td>
                        </tr>
                        <tr>
                            <td>Desenvolvimento de site</td>
                            <td>R$12.000</td>
                            <td>Desenvolvimento</td>
                            <td>08/05/2022</td>
                        </tr>
                    </tbody>
                </table>
            </Container>
    );
}
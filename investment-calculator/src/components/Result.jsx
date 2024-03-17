import { formatter } from "../util/investment";

const Result = ({results}) => {
    console.log(results);
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    results.map(result => 
                    <tr>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.valueEndOfYear)}</td>
                        <td>{formatter.format(result.interest)}</td>
                        <td>{formatter.format(result.totalInterest)}</td>
                        <td>{formatter.format(result.investedCapital)}</td>
                    </tr>)
                }
            </tbody>
        </table>
    );
};

export default Result;
import { useContext } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { ThemeContext } from "styled-components";


const COLORS = () => {
    const { colors, text } = useContext(ThemeContext);
    return [text.secondary, colors.warn];
}


export function PieChartComponent(props: any) {

    const data = [
        { name: 'Entradas', value: props.incomes },
        { name: 'Saídas', value: props.expenses },
    ]

    return (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={500} height={500}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS()[index % COLORS().length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      );
}
import { useContext, useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { ThemeContext } from "styled-components";
import { ITransactionModel } from "../../../models/TransactionModel";

interface ILineChart {
    data: ITransactionModel[];
}


export function LineChartComponent(props: ILineChart) {
    const { colors, text } = useContext(ThemeContext);
    

/* const handleMonths = (filter: boolean) => {
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDay();

    let data: Object[] = [];

        props.data.reduce((acc: any, curr: any) => {

            for (let i = 6; i > 0; i--) { 
                if(new Date(curr.date).getMonth() === i){
                    data.push({
                        month: months(new Date(curr.date).getMonth()),
                        entradas: curr.value,
                        saidas: curr.value,
                        
                    });
                }
            }
            
            console.warn(data);
            return acc + curr;
        })
    

    for (let i = currentDay; i > 1; i--) {
        return i;
    }
    
    return data;
}; */
        
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={props.data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis
                    dataKey="month"
                    tick={{ fontWeight: "bold", fill: `${text.primary}` }}
                />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="entradas"
                    stroke={colors.warn}
                    strokeWidth={4}
                    activeDot={{ r: 5 }}
                />
                <Line
                    type="monotone"
                    dataKey="saidas"
                    stroke={text.secondary}
                    strokeWidth={4}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}

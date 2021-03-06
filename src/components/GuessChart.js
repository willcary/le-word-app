import React, { useContext } from 'react'
import { Context } from "../Context"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts'

function GuessChart() {
    const { guessDistribution, theme } = useContext(Context)
    const textColor = () => theme === 'light' ? '#1a1a1b' : '#ffffff'

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                layout="vertical"
                width={500}
                height={300}
                data={guessDistribution}
                margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
                }}
            >
                <XAxis type="number" hide="true" />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="count" fill="#538d4e">
                    <LabelList dataKey="count" position="right" fill={textColor()} />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default GuessChart;

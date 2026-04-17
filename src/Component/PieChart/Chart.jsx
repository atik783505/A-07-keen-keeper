import React from 'react';
import { useContext } from 'react';
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip, Legend } from 'recharts';
import { FriendContext } from '../../Context/FriendContext/FriendProvider';

const Chart = () => {
    const { callInfo, vedioCallInfo, textInfo } = useContext(FriendContext)
    const data = [
        { name: 'Call', value: callInfo.length || 0 },
        { name: 'Text', value: vedioCallInfo.length || 0 },
        { name: 'Video', value: textInfo.length || 0 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
    return (
        <div className="w-full h-[300px] my-12">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        innerRadius="70%"
                        outerRadius="100%"
                        paddingAngle={5}
                        cornerRadius={10}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        <Legend verticalAlign="bottom" height={36} />

                        <Tooltip />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
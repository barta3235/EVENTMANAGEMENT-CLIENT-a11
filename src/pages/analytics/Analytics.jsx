import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const Analytics = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://m11-eventmanagement-server.vercel.app/bookedServicesByProvider/${user?.email}`)
            .then(res => {
                const serviceCount = {};
                res.data.forEach(item => {
                    serviceCount[item.servicename] = (serviceCount[item.servicename] || 0) + 1;
                });
                const serviceData = Object.keys(serviceCount).map(servicename => ({
                    name: servicename,
                    count: serviceCount[servicename]
                }));
                setData(serviceData);
            })
    }, [user?.email]);

    console.log(data)
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink']; // Colors for the pie chart

    return (
        <div className="flex flex-col mx-[20px] text-2xl font-medium justify-evenly">
            <div>
                <div className="flex justify-start mb-[30px]">
                    <h1>Analytics : By Service type  </h1>
                </div>
                <div className="flex justify-center items-center">
                    <ResponsiveContainer width={550} height={500} >
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="count"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={200}
                                fill="#8884d8"
                                label
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(value, name) => [value, name]} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            


        </div>
    );
};

export default Analytics;

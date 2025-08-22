import React from 'react';
import {BarChart, PieChart} from "@mui/x-charts";
import {DefaultLoader} from "shared/ui/defaultLoader/index.js";

export const Chart = ({data}) => {

    const formattedData = data?.map(item => ({
        value: item.count,
        label: item.name,

    }))

    return (
        <div style={{textAlign: "center"}}>
            <h1 style={{fontSize: "1.3rem"}}>Barcha filiallar bo'yicha ta'lim o'quvchilar statistikasi</h1>
            <PieChart
                series={[
                    {
                        data: formattedData?.length > 0 ? formattedData : [
                            {id: 0, value: 0, label: 'Xo‘jakent'},
                            {id: 1, value: 1, label: 'Chirchiq'},
                            {id: 2, value: 10, label: 'Sergeli'},
                        ],
                        innerRadius: 40,
                        outerRadius: 60,
                        paddingAngle: 5,
                        cornerRadius: 5,

                        highlightScope: {faded: 'global', highlighted: 'item'},

                    },

                ]}
                width={140}
                height={120}
                slotProps={{
                    tooltip: {
                        sx: {
                            '& .MuiChartsTooltip-root': {
                                '& .MuiTypography-root': {
                                    fontSize: '20px', // Tooltip ichidagi matnning font o'lchami
                                },
                            },
                        },
                    },
                }}
            />

        </div>
    );
};


export const Barchart = ({ data }) => {

    if (!data) return <DefaultLoader/>
    const colors = ["#4ade80", "#60a5fa", "#facc15", "#f87171", "#a78bfa", "#f472b6"]
    const formattedData = data?.map(item => ({
        value: item.count,
        label: item.name,
    }));


    const values = formattedData?.map(item => item.value);
    const labels = formattedData?.map(item => item.label);

    return (
        <div>
            <BarChart
                width={300}
                height={200}
                series={[
                    {
                        data: values,
                        label: "Yangi o'quvchilar soni",
                        id: 'filialCount',
                        colorMap: colors,

                    },
                ]}
                xAxis={[{ data: labels }]}
                yAxis={[{ width: 50 }]}
            />
        </div>
    );
};

export const HorizontalChart = ({newStudents, studyingStudents}) => {

    const merged = studyingStudents?.map((branch, index) => {
        const newBranch = newStudents[index];
        const totalCount = branch.count + newBranch.count;
        return {
            id: branch.id,
            name: branch.name,
            count: totalCount,
        };
    });
    const total = merged?.reduce((sum, b) => sum + b.count, 0);

    const resultWithPercent = merged?.map(branch => {
        const percentage = total === 0 ? 0 : ((branch.count / total) * 100).toFixed(1);
        return {
            ...branch,
            percentage: Number(percentage),
        };
    });








    const chartSetting = {
        xAxis: [
            {
                label: 'Foizda (%)',
            },
        ],

        height: 200,
        layout: 'horizontal',
        margin: { left: 20 },
    };
    const valueFormatter = (value) => {
        return `${value}%`;
    }
    return(
        <div>
            <BarChart
                dataset={resultWithPercent?.length > 0 ? resultWithPercent : [
                    {id: 0, value: 0, label: 'Xo‘jakent'},
                    {id: 1, value: 1, label: 'Chirchiq'},
                    {id: 2, value: 10, label: 'Sergeli'},
                ] }
                yAxis={[{ scaleType: 'band', dataKey: 'name', width: 80 }]}
                series={[
                    { dataKey: 'percentage', label: 'Filiallarning ishlash unumdorligi', valueFormatter },
                ]}
                {...chartSetting}
            />
        </div>
    )
}


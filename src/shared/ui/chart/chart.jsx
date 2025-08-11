import React from 'react';
import {BarChart, PieChart} from "@mui/x-charts";
import {DefaultLoader} from "shared/ui/defaultLoader/index.js";

export const Chart = ({data}) => {

    const formattedData = data?.map(item => ({
        value: item.count,
        label: item.name,

    }))

    return (
        <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
            <PieChart
                series={[
                    {
                        data: formattedData?.length > 0 ? formattedData : [
                            {id: 0, value: 0, label: 'Xo‘jakent'},
                            {id: 1, value: 1, label: 'Chirchiq'},
                            {id: 2, value: 10, label: 'Sergeli'},
                        ],
                        innerRadius: 60,
                        outerRadius: 120,
                        paddingAngle: 5,
                        cornerRadius: 5,

                        highlightScope: {faded: 'global', highlighted: 'item'},

                    },

                ]}
                width={400}
                height={400}
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
            <h1>Barcha filiallar bo'yicha ta'lim o'quvchilar statistikasi</h1>
        </div>
    );
};


export const Barchart = ({ data }) => {

    if (!data) return <DefaultLoader/>

    const formattedData = data?.map(item => ({
        value: item.count,
        label: item.name,
    }));


    const values = formattedData?.map(item => item.value);
    const labels = formattedData?.map(item => item.label);

    return (
        <div>
            <BarChart
                width={800}
                height={400}
                series={[
                    {
                        data: values,
                        label: "Yangi o'quvchilar soni",
                        id: 'filialCount',
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
        height: 400,
        layout: 'horizontal',
        margin: { left: 100 },
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
                yAxis={[{ scaleType: 'band', dataKey: 'name' }]}
                series={[
                    { dataKey: 'percentage', label: 'Filiallarning ishlash unumdorligi', valueFormatter },
                ]}
                {...chartSetting}
            />
        </div>
    )
}


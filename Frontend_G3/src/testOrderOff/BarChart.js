import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
    { year: 'Mì Kokomi Đại ', population: 451 },
    { year: 'Khẩu trang y tế 4 lớp ', population: 180 },
    { year: 'Khẩu trang Unicharm ', population: 150 },
    { year: 'Bí xanh ', population: 130 },
    { year: 'Khẩu trang Dr Mask ', population: 130 },
    { year: 'Mì gói ăn liền Hảo Hảo ', population: 121 },
];

export default class Demo extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data,
        };
    }

    render() {
        const { data: chartData } = this.state;

        return (
            <Paper>
                <Chart
                    data={chartData}
                >
                    <ArgumentAxis />
                    <ValueAxis max={6} />

                    <BarSeries
                        valueField="population"
                        argumentField="year"
                    />
                    <Title text="top 6 sản p bán chạy nhất" />
                    <Animation />
                </Chart>
            </Paper>
        );
    }
}

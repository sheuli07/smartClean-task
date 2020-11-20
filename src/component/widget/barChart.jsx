import React, { Component } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import { connect } from "react-redux";

function StackedAreaChart(props) {
    const chartOptions = {
        chart: {
            type: "column",
        },
        title: {
            text: "Bar Chart",
        },

        xAxis: {
            categories: props.home.insid,
            min: 0,
            max: 8,
            scrollbar: {
                enabled: true,
            },
            crosshair: true,
        },
        yAxis: {
            min: 0,
            title: {
                text: "",
            },
        },
        tooltip: {
            headerFormat:
                '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat:
                '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: "</table>",
            shared: true,
            useHTML: true,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            },
        },
        series: [
            { name: "hour", data: props.home.hour },
            { name: "dow", data: props.home.dow },
            { name: "dom", data: props.home.dom },
            {
                name: "SumHourly",
                data: props.home.SumHourly,
            },
        ],
    };
    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
                constructorType={"chart"}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        home: state.home.seriesData,
    };
};

export default connect(mapStateToProps)(StackedAreaChart);

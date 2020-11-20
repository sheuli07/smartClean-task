import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import { connect } from "react-redux";

function AreaChart(props) {
    const chartOptions = {
        chart: {
            type: "area",
        },
        title: {
            text: "Area Chart",
        },
        xAxis: {
            categories: props.home.insid,
            min: 0,
            max: 8,
            scrollbar: {
                enabled: true,
            },

            title: {
                enabled: false,
            },
        },
        yAxis: {
            title: {
                text: "",
            },
            labels: {
                formatter: function () {
                    return this.value / 1000;
                },
            },
        },
        tooltip: {
            split: true,
            valueSuffix: " millions",
        },
        plotOptions: {
            area: {
                stacking: "normal",
                lineColor: "#666666",
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: "#666666",
                },
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

export default connect(mapStateToProps)(AreaChart);

import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import { connect } from "react-redux";

function LineChart(props) {
    const chartOptions = {
        xAxis: {
            categories: props.home.insid,
            min: 0,
            max: 8,
            scrollbar: {
                enabled: true,
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
        scrollablePlotArea: {
            minWidth: 700,
            scrollPositionX: 1,
        },
        plotOptions: {
            series: {
                point: {
                    events: {
                        // mouseOver: this.setHoverData.bind(this),
                    },
                },
            },
        },
        title: {
            text: "Line Chart",
        },
        yAxis: {
            title: {
                text: "",
            },
        },
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

export default connect(mapStateToProps)(LineChart);

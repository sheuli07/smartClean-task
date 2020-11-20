import React, { lazy } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Topnav from "../topnav/topnav";
import TableView from "../widget/tableView";

const LineChart = lazy(() => import("../widget/lineChart"));
const AreaChart = lazy(() => import("../widget/areaChart"));
const BarChart = lazy(() => import("../widget/barChart"));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{ width: "100%" }}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: "flex",
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Topnav />
            <div className={classes.root}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    <Tab label="Table View" {...a11yProps(0)} />
                    <Tab label="Line chart" {...a11yProps(1)} />
                    <Tab label="Area chart" {...a11yProps(2)} />
                    <Tab label="Bar Chart" {...a11yProps(3)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <TableView />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <LineChart />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <AreaChart />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <BarChart />
                </TabPanel>
            </div>
        </>
    );
}

import React from 'react'

import { Link } from 'react-router-dom'

import statusCards from '../assets/JsonData/status-card-data.json'

import Table from '../components/table/Table'

import BadgeColor from '../components/badge/BadgeColor'

// Status
import StatusCard from '../components/status-card/StatusCard'



// chart
import Chart from 'react-apexcharts'


const chartOptions = {
    series: [{
        name: 'Online Customers',
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    }, {
        name: 'Store Customers',
        data: [40, 30, 70, 80, 50, 25, 60, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        grid: {
            show: false
        },

    }
}

// table khởi tạo biến dữ liệu Top Customers

const topCustomers = {
    head: [
        'User',
        'Total Orders',
        'Total Spending'
    ],
    body: [
        {
            "username": "Nam",
            "order": "480",
            "price": "$25,996"
        },
        {
            "username": "Hoàng",
            "order": "250",
            "price": "$12,552"
        },
        {
            "username": "Việt",
            "order": "999",
            "price": "$19,999"
        },
        {
            "username": "Thắng",
            "order": "555",
            "price": "$10,852"
        },
        {
            "username": "Duy",
            "order": "789",
            "price": "$99,999"
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

// gán data
const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)


// table khởi tạo biến dữ liệu Top Customers
const latestOrders = {
    header: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "Nam",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "Hoàng",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "Việt",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "Thắng",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "Duy",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        }
    ]
}

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}

const renderlatestHead = (item, index) => (
    <th key={index}>{item}</th>
)
const renderlatestBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.date}</td>
        <td>{item.price}</td>
        <td>
            <BadgeColor type={orderStatus[item.status]} content={item.status} />
        </td>
    </tr>
)

const Dashboard = () => {
    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    {/* status card here */}
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={chartOptions.options}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>Top Customers</h3>
                        </div>
                        <div className="card__body">
                            {/* table */}
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={topCustomers.body}
                                renderBody={(item, index) => renderCusomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>View all</Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>latest order</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.head}
                                renderHead={(item, index) => renderlatestHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderlatestBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>View all</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard

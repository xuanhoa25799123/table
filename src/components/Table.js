import React from 'react';
import { Table } from 'antd';
import TableHeader from './TableHeader';
import Citation from './Citation';

const arrowStyle = {
  position: 'relative',
};

const renderDay = (value, row, index, days) => {
  const obj = {
    children: value,
    props: [],
  };
  if (row.day1 && row.days >= days) {
    if (row.day1.includes('Guarantee')) {
      obj.props.style = { background: '#00ff01' };
      if (row.days === days) {
        obj.props.className = 'triangle-right-green';
      }
    }
    if (row.day1.includes('Inhouse')) {
      obj.props.style = { background: '#ffff00' };
      if (row.days === days) {
        obj.props.className = 'triangle-right-yellow';
      }
    }
    if (row.day1.includes('Non-Guarantee')) {
      obj.props.style = { background: '#bdd7ee' };
      if (row.days === days) {
        obj.props.className = 'triangle-right-grey';
      }
    }
    if (row.day1.includes('OverBook')) {
      obj.props.style = { background: '#ff3300' };
      if (row.days === days) {
        obj.props.className = 'triangle-right-red';
      }
    }
  }
  return obj;
};

const TableComp = () => {
  const columns = [
    {
      title: 'Room',
      dataIndex: 'room',
      key: 'room',
      render: (value, row, index) => {
        const obj = {
          children: value,
          props: [],
        };
        if (value === 'Available' || value === 'Occupancy') {
          obj.props.colSpan = 2;
          obj.props.style = { textAlign: 'center' };
        }
        return obj;
      },
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (value, row, index) => {
        const obj = {
          children: value,
          props: [],
        };
        if (row.room === 'Available' || row.room === 'Occupancy') {
          obj.props.colSpan = 0;
        }
        return obj;
      },
    },
    {
      dataIndex: 'empty',
      key: 'empty',
      // render: (value) => {
      //   const obj = {
      //     children: '',
      //     props: {},
      //   };
      //   return obj;
      // },
    },
    {
      title: '2021',
      dataIndex: 'year',
      key: 'year',
      children: [
        {
          title: 'Mon-19/04',
          dataIndex: 'day1',
          key: 'day1',
          render: (value, row, index) => {
            const obj = {
              children: value,
              props: [],
            };
            if (value && value.includes('BK')) {
              obj.props.colSpan = 2;
              if (value.includes('Guarantee')) {
                obj.props.style = {
                  background: '#00ff01',
                };
                // obj.props.className = 'triangle-right';
              }
              if (value.includes('Inhouse')) {
                obj.props.style = { background: '#ffff00' };
              }
              if (value.includes('Non-Guarantee')) {
                obj.props.style = { background: '#bdd7ee' };
              }
              if (value.includes('OverBook')) {
                obj.props.style = { background: '#ff3300' };
              }
            }
            return obj;
          },
        },
        {
          title: 'Tue-20/04',
          dataIndex: 'day2',
          key: 'day2',
          render: (value, row, index) => {
            const obj = {
              children: value,
              props: [],
            };
            if (row.day1 && row.day1.includes('BK')) {
              obj.props.colSpan = 0;
            }
            return obj;
          },
        },
        {
          title: 'Wed-21/04',
          dataIndex: 'day3',
          key: 'day3',
          render: (value, row, index) => renderDay(value, row, index, 3),
        },
        {
          title: 'Thu-22/04',
          dataIndex: 'day4',
          key: 'day4',
          render: (value, row, index) => renderDay(value, row, index, 4),
        },
        {
          title: 'Fri-23/04',
          dataIndex: 'day5',
          key: 'day5',
          render: (value, row, index) => renderDay(value, row, index, 5),
        },
        {
          title: 'Sat-24/04',
          dataIndex: 'day6',
          key: 'day6',
          render: (value, row, index) => renderDay(value, row, index, 6),
        },
        {
          title: 'Sun-25/04',
          dataIndex: 'day7',
          key: 'day7',
          render: (value, row, index) => renderDay(value, row, index, 7),
        },
        {
          title: 'Mon-26/04',
          dataIndex: 'day8',
          key: 'day8',
          render: (value, row, index) => renderDay(value, row, index, 8),
        },
        {
          title: 'Tue-27/04',
          dataIndex: 'day9',
          key: 'day9',
          render: (value, row, index) => renderDay(value, row, index, 9),
        },
      ],
    },
    {
      dataIndex: 'empty',
      key: 'empty',
    },
    {
      dataIndex: 'citation',
      key: 'citation',
      render: (text, row, index) => {
        if (text) {
          switch (text) {
            case 'Guarantee':
              return <Citation text={text} color='#00ff01' />;
            case 'NonGuarantee':
              return <Citation text={text} color='#bdd7ee' />;
            case 'OverBook':
              return <Citation text={text} color='#ff3300' />;
            case 'Inhouse':
              return <Citation text={text} color='#ffff00' />;
            default:
              return <Citation text={text} />;
          }
        }
      },
    },
  ];

  const data = [
    {
      key: 1,
      room: '1001',
      type: 'SUP',
      days: 4,
      citation: 'Inhouse',
      day1: 'BK Guarantee',
    },
    {
      key: 2,
      room: '1002',
      type: 'SUP',
      days: 7,
      citation: 'Guarantee',
      day1: 'BK Inhouse',
    },
    {
      key: 3,
      room: '1003',
      type: 'SUP',
      days: 6,
      citation: 'NonGuarantee',
      day1: 'BK Guarantee',
    },
    {
      key: 4,
      room: '1004',
      type: 'SUP',
      days: 7,
      citation: 'OverBook',
      day1: 'BK Guarantee',
    },
    {
      key: 5,
      room: '1005',
      type: 'SUP',
      days: 3,
      citation: 'Lock OOO',
      day1: 'BK OverBook',
    },
    {
      key: 6,
      room: '2001',
      type: 'DELUX',
      days: 4,
      citation: 'Lock OOS',
      day1: 'BK Non-Guarantee',
    },
    {
      key: 7,
      room: '2002',
      type: 'DELUX',
      days: 4,
      day1: 'BK Guarantee',
    },
    {
      key: 8,
      room: '2003',
      type: 'DELUX',
      days: 4,
      day1: 'BK Guarantee',
    },
    {
      key: 9,
      room: '2004',
      type: 'DELUX',
    },
    {
      key: 10,
      room: '2005',
      type: 'DELUX',
    },
    {
      key: 11,
    },
    {
      key: 12,
      room: 'Available',
      day1: '14',
      day2: '14',
      day3: '14',
      day4: '14',
      day5: '14',
      day6: '14',
      day7: '14',
      day8: '14',
      day9: '14',
    },
    {
      key: 13,
      room: 'Occupancy',
      day1: '6',
      day2: '6',
      day3: '6',
      day4: '6',
      day5: '6',
      day6: '6',
      day7: '6',
      day8: '6',
      day9: '6',
    },
  ];
  return (
    <>
      <TableHeader />
      <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={false}
        size='small'
      />
    </>
  );
};

export default TableComp;

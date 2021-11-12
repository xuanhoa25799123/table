import React from 'react';
import { DatePicker, Space, Input, Popover } from 'antd';
import moment from 'moment';
import Filter from './Filter';

const TableHeader = () => {
  const dateFormat = 'DD/MM/YYYY';
  const { Search } = Input;
  const { RangePicker } = DatePicker;
  return (
    <div>
      <Space direction='horizontal' style={{ margin: '10px auto' }}>
        <label htmlFor='date'>Date:</label>
        <RangePicker
          id='date'
          defaultValue={[
            moment('19/04/2021', dateFormat),
            moment('27/04/2021', dateFormat),
          ]}
          format={dateFormat}
        />
        <label htmlFor='search'>Search:</label>
        <Popover content={<Filter />} trigger='click'>
          <Search id='search' enterButton />
        </Popover>
      </Space>
    </div>
  );
};

export default TableHeader;

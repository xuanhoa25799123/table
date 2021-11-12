import React from 'react';
import { Button, Checkbox, Space } from 'antd';

const Filter = () => {
  return (
    <div className='container'>
      <div className='checkbox-container'>
        <Space direction='vertical'>
          <Checkbox>(Select all)</Checkbox>
          {/* <br /> */}
          <Checkbox>SUP-D</Checkbox>
          {/* <br /> */}
          <Checkbox>SUP-T</Checkbox>
          {/* <br /> */}
          <Checkbox>SUP-OT</Checkbox>
          {/* <br /> */}
          <Checkbox>DLX-O</Checkbox>
          {/* <br /> */}
          <Checkbox>PRE-O</Checkbox>
          {/* <br /> */}
          <Checkbox>SUP-TRL</Checkbox>
        </Space>
      </div>
      <div className='buttons'>
        <Button type='primary' style={{ margin: '0 5px' }}>
          OK
        </Button>
        <Button type='danger'>Cancel</Button>
      </div>
    </div>
  );
};

export default Filter;

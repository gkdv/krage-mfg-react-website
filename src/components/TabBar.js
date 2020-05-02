import React from 'react'


export default function TabBar(props) {
  const tabs = props.Tabs;
  const listTabs = tabs.map((tab) => (
    <div key={tab.toString()} className="col-sm">
      {tab}
    </div>
  ));
  return (
    <div className="row">
      {listTabs}
    </div>
  );
}

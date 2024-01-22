import { useEffect, useState } from 'react';
import PageWithSidebar from '../../common/components/page-with-sidebar/PageWithSidebar';
import { FreezeTable, FreezeTabs, WeightFreezeHeader } from './components';
import products from './data';

const Weight_Freeze = () => {
  const [data, setData] = useState([products]);
  const dataGet = () => {
    //API to get data
  };
  const tabs = [
    {
      title: 'Action required',
      freezeStatus: 5,
    },
    {
      title: 'Request Raised',
      freezeStatus: 2,
    },
    {
      title: 'Request Aceepted',
      freezeStatus: 1,
    },
    {
      title: 'Request Rejected',
      freezeStatus: 3,
    },
    {
      title: 'Not Requested',
      freezeStatus: 0,
    },
    {
      title: 'Unfreezed',
      freezeStatus: 4,
    },
  ];

  useEffect(() => {
    dataGet();
  }, []);

  return (
    <PageWithSidebar>
      <div className="h-full bg-[#f8f8f8] pl-4">
        <div className="py-4">
          {/* header-wrapper */}
          <WeightFreezeHeader />
        </div>
        <hr className="border-[#c2c2c2]" />
        <div className="px-4 pb-0">
          {/* content-wrapper */}
          <FreezeTabs tabs={tabs} setData={setData} />
        </div>
        <div>
            <FreezeTable data={data} />
        </div>
      </div>
    </PageWithSidebar>
  );
};

export default Weight_Freeze;

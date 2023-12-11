import { Link } from 'react-router-dom';
import { DomesticOrder } from './components';
import { Tabs } from '../../common/components';
import { blackLeftArrow } from '../../common/icons';

const AddOrder = () => {
  const tabData = [
    {
      title: 'Domestic Order',
      id: 'domestic-order',
      panel: <DomesticOrder />,
      tooltip: 'Add & ship your order by adding buyer & package details',
    },
    {
      title: 'Intrnational Order',
      id: 'intrnational-order',
      panel: <>{'Intrnational Order'}</>,
      tooltip: 'Add & ship your international orders by adding buyer & package details',
    },
    {
      title: 'Bulk Order',
      id: 'bulk-order',
      panel: <>{'Bulk Order'}</>,
      tooltip: 'Upload multiple orders in bulk with an excel sheet',
    },
    {
      title: 'Quick Shipment',
      id: 'quick-shipment',
      panel: <>{'Quick Shipment'}</>,
      tooltip:
        'Ship an order quickly by  adding buyer & package details and selecting courier all at once.',
    },
  ];

  return (
    <div className="h-full overflow-auto bg-[#f8f8f8]">
      <div className="py-4">
        <Link
          to={'/orders'}
          className="text-decoration-none flex items-center text-lg font-bold">
          <img src={blackLeftArrow} className="mr-2 h-4 w-4 mt-1" />
          <span>{'Add Order'}</span>
        </Link>
      </div>
      <Tabs tabs={tabData} />
    </div>
  );
};

export default AddOrder;
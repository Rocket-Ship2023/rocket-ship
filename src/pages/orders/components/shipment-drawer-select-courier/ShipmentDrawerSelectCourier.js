import { useEffect, useState } from 'react';
import { Tabs } from '../../../../common/components';
import ShipmentCourierPartnersTable from './components/ShipmentCourierPartnersTable';
import ShipmentSelfFullfiled from './components/ShipmentSelfFullfiled';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from '../../../../common/loader/Loader';
import { BACKEND_URL } from '../../../../common/utils/env.config';

const ShipmentDrawerSelectCourier = ({ orderDetails, isOpen, onClose }) => {
  const [shipmentsDetails, setShipmentDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const tabsData = [
    {
      title: 'All',
      id: 'all',
      panel: (
        <ShipmentCourierPartnersTable
          orderId={orderDetails?.id}
          shipmentDetails={shipmentsDetails || []}
          closeShipmentDrawer={onClose}
        />
      ),
    },
    {
      title: 'Air',
      id: 'air',
      panel: (
        <ShipmentCourierPartnersTable
          orderId={orderDetails?.id}
          shipmentDetails={shipmentsDetails || []}
          closeShipmentDrawer={onClose}
        />
      ),
    },
    {
      title: 'Surface',
      id: 'surface',
      panel: (
        <ShipmentCourierPartnersTable
          orderId={orderDetails?.id}
          shipmentDetails={shipmentsDetails || []}
          closeShipmentDrawer={onClose}
        />
      ),
    },
    {
      title: 'Local',
      id: 'local',
      panel: (
        <ShipmentCourierPartnersTable
          orderId={orderDetails?.id}
          shipmentDetails={shipmentsDetails || []}
          closeShipmentDrawer={onClose}
        />
      ),
    },
    {
      title: 'Self-Fullfilled',
      id: 'selfFullfilled',
      panel: <ShipmentSelfFullfiled />,
    },
  ];
  const fetchShipmentDetails = () => {
    setIsLoading(true);
    axios
      .get(`${BACKEND_URL}/order/${orderDetails?.id}/estimate`)
      .then((resp) => {
        if (resp.status === 200) {
          setShipmentDetails(resp?.data);
          setIsLoading(false);
        }
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e);
        toast('Unable to fetch shipment details', { type: 'error' });
        setShipmentDetails([]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (orderDetails?.id && isOpen) {
      fetchShipmentDetails();
    }
  }, [orderDetails?.id, isOpen]);

  return (
    <div className="mt-3 h-full">
      {isLoading && <Loader/>}
      <Tabs tabs={tabsData} tabClassNames={'px-6 text-[#888]'} />
    </div>
  );
};

export default ShipmentDrawerSelectCourier;

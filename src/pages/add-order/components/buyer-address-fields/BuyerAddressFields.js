import { Field } from '../../../../common/components';
import { useState } from 'react';

const BuyerAdressFields = ({ id, heading, alternateText, onChange }) => {
  const [completeAdress, setCompleteAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  return (
    <div>
      <div className="mb-3 text-sm font-medium">
        {heading}
        {alternateText && <span className="pl-1 text-gray-400">{alternateText}</span>}
      </div>
      <div className="w-full">
        <div className="mb-3 w-full md:flex">
          <div className="px-2 pb-2 md:pb-0 md:w-6/12">
            <Field
              id={`${id}-completeAdress`}
              label={'Complete Address'}
              labelClassNames={'text-xs'}
              inputClassNames={'text-xs'}
              placeHolder={'House/Floor No. Building Name or Street, Locality'}
              required={true}
              value={completeAdress}
              onChange={($event)=>{
                setCompleteAddress(event.target.value);
              }}
            />
          </div>
          <div className="px-2 pb-2 md:pb-0 md:w-6/12">
            <Field
              id={`${id}-landmark`}
              label={'Landmark'}
              showOptional
              inputClassNames={'text-xs'}
              labelClassNames={'text-xs'}
              placeHolder={'Any nearby post office, market, Hospital as the landmark'}
              required={true}
              value={landmark}
              onChange={($event)=>{
                setLandmark(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="w-full md:flex">
          <div className="px-2 pb-2 md:pb-0 md:w-3/12">
            <Field
              type={'number'}
              id={`${id}-pincode`}
              label={'Pincode'}
              inputClassNames={'text-xs'}
              labelClassNames={'text-xs'}
              placeHolder={"Enter Buyer's Pincode"}
              required={true}
              value={pincode}
              onChange={($event)=>{
                setPincode(event.target.value);
              }}
            />
          </div>
          <div className="px-2 pb-2 md:pb-0 md:w-3/12">
            <Field
              id={`${id}-city`}
              label={'City'}
              labelClassNames={'text-xs'}
              inputClassNames={'text-xs'}
              placeHolder={"Enter Buyer's City"}
              required={true}
              value={city}
              onChange={($event)=>{
                setCity(event.target.value);
              }}
            />
          </div>
          <div className="px-2 pb-2 md:pb-0 md:w-3/12">
            <Field
              type={'select'}
              id={`${id}-state`}
              label={'State'}
              inputClassNames={'text-xs'}
              labelClassNames={'text-xs'}
              placeHolder={'Please Select State'}
              required={true}
              value={state}
              onChange={($event)=>{
                setState(event.target.value);
              }}
            />
          </div>
          <div className="px-2 pb-2 md:pb-0 md:w-3/12">
            <Field
              id={`${id}-country`}
              label={'Country'}
              labelClassNames={'text-xs'}
              inputClassNames={'text-xs'}
              placeHolder={"Enter Buyer's country"}
              required={true}
              value={country}
              onChange={($event)=>{
                setCountry(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerAdressFields;
import { stepperTickmark } from '../../../../common/icons';

const Stepper = ({ step }) => {
  const renderStepperCount = (count) => {
    return step + 1 > count ? (
      <img
        src={stepperTickmark}
        className="mr-2.5 h-[22px] w-[22px] rounded-full bg-green-700"
      />
    ) : (
      <div className="mr-2.5 h-[22px] w-[22px] rounded-full border border-blue-700 bg-white">
        {count}
      </div>
    );
  };

  return (
    <div>
      <ol>
        <li className="mb-4 flex text-center text-sm text-gray-800 font-medium">
          {renderStepperCount(1)}
          Buyers Details
        </li>
        <li className="mb-4 flex text-center text-sm text-gray-800 font-medium">
          {renderStepperCount(2)}
          Pickup Details
        </li>
        <li className="mb-4 flex text-center text-sm text-gray-800 font-medium">
          {renderStepperCount(3)}
          Order Details
        </li>
        <li className="mb-4 flex text-center text-sm text-gray-800 font-medium">
          {renderStepperCount(4)}
          Package Details
        </li>
      </ol>
    </div>
  );
};

export default Stepper;
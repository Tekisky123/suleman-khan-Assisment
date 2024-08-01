import React from 'react';
import { BRAND } from '../../types/brand';
import BrandOne from '../../images/brand/brand-01.svg';
import BrandTwo from '../../images/brand/brand-02.svg';
import BrandThree from '../../images/brand/brand-03.svg';
import BrandFour from '../../images/brand/brand-04.svg';
import BrandFive from '../../images/brand/brand-05.svg';

const brandData: BRAND[] = [
  {
    logo: BrandOne,
    name: 'Google',
    visitors: 12345,
    revenues: '5,768',
    status: 'Delivered',
  },
  {
    logo: BrandTwo,
    name: 'Twitter',
    visitors: 12346,
    revenues: '4,635',
    status: 'Pending',
  },
  {
    logo: BrandThree,
    name: 'Github',
    visitors: 12347,
    revenues: '4,290',
    status: 'Canceled',
  },
  {
    logo: BrandFour,
    name: 'Vimeo',
    visitors: 12348,
    revenues: '3,580',
    status: 'Delivered',
  },
  {
    logo: BrandFive,
    name: 'Facebook',
    visitors: 12349,
    revenues: '6,768',
    status: 'Pending',
  },
];

const TableOne = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-500 text-green-800';
      case 'Pending':
        return 'bg-yellow-200 text-yellow-800';
      case 'Canceled':
        return 'bg-red-400 text-red-800';
      default:
        return '';
    }
  };

  return (
    <div className="rounded-lg border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Recent Orders
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-4 rounded-lg bg-gray-2 dark:bg-meta-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Customer
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Order No.
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Amount
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Status
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-4 ${
              key === brandData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <img src={brand.logo} alt={brand.name} className="w-12 h-12" />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.visitors}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${brand.revenues}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(brand.status)}`}>
                {brand.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;

import { Link } from 'react-router-dom';

const DropdownUser = () => {

  return (
      <Link
       
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            Suleman Khan
          </span>
          <span className="block text-xs">Full Stack Developer</span>
        </span>

       

      </Link>

  
  );
};

export default DropdownUser;

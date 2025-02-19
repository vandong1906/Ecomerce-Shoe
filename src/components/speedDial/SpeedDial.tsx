import { speedDialButton } from "./speedDialItems";
interface IconButtonProps {
  iconPath: string;
  label: string;
}
const IconButton: React.FC<IconButtonProps> = ({ iconPath, label }) => {
  return (
    <>
      <div className="relative">
        <button
          type="button"
          className="flex h-[52px] w-[52px] items-center justify-center rounded-lg border peer/hover border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-400"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d={iconPath} />
          </svg>
          <span className="sr-only">{label}</span>
        </button>
        <div className="tooltip invisible absolute z-10 inline-block w-auto rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700 group-hover:visible peer-hover/hover:opacity-100">
          {label}
        </div>
      </div>
    </>
  );
};

const SpeedDial = () => {
  return (
    <>
      <div className="group fixed bottom-6 end-6">
        <div className="mb-4 hidden flex-col items-center space-y-2 group-hover:flex">
          {speedDialButton.map((button, index) => (
            <IconButton
              key={index}
              iconPath={button.iconPath}
              label={button.label}
            />
          ))}
        </div>
        <button
          type="button"
          className="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="h-5 w-5 transition-transform group-hover:rotate-45"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
          <span className="sr-only">Open actions menu</span>
        </button>
      </div>
    </>
  );
};

export default SpeedDial;

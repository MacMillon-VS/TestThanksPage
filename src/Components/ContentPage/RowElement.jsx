const RowElement = ({ title, desc, avatar, index}) => {
  return (
    <div
    key={index}
    className={`flex items-center ${index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'} mt-4`}
  >
    <div className="flex justify-center items-center w-[300px] rounded-full bg-gray-300 border border-white shadow-[0_4px_25px_#f9a828] max-md:w-[100px] max-md:h-[100px] max-lg:w-[200px] max-lg:h-[200px]">
    
      <img src={avatar} alt={`Avatar ${index + 1}`} className="w-[300px] h-[300px] object-cover rounded-full max-md:w-[100px] max-md:h-[100px] max-lg:w-[200px] max-lg:h-[200px]" />
    </div>
    <div className="ml-8 w-[80%]">
      <h3 className=" text-orange-500 font-bold mb-4 text-3xl leading-none max-md:text-[18px] max-lg:text-[20px] xl:text-[32px]">{title}</h3>
      {desc &&
            desc.map((d, index) => {
              return desc.length === 1 ? (
                <p className=" text-gray-600 font-medium text-base max-md:text-[12px] max-lg:text-[16px] xl:text-[20px]" key={index}>
                  {d}
                </p>
              ) : (
                <ul key={index} className="list-disc ml-5">
                  <li className="text-gray-600 font-medium text-base max-md:text-[12px] max-lg:text-[16px] xl:text-[20px]">{d}</li>
                </ul>
              );
            })}
        </div>
      </div>
  );
};

export default RowElement;
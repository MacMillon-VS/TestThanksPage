const ContentPage = () => {
  const data = [
    {
      id: 1,
      title: "We are invested in your success!",
      desc: [
        "To make it easier and more interactive our sessions are designed in such a way that you can opt how you want to wake up.",
      ],
      avatar:
        "https://hips.hearstapps.com/hmg-prod/images/sports-guy-riding-bicycle-royalty-free-image-1576268922.jpg",
    },
    {
      id: 2,
      title: "Engage all aspects of the human body in 1 hour!",
      desc: [
        "Body alignment movements",
        "Physical exercise involve",
        "Dynamic warm ups",
        "Asanas",
      ],
      avatar:
        "https://i.insider.com/5bfc51850591f222db5cc8e5?width=1136&format=jpeg",
    },
    {
      id: 3,
      title: "The secret to mind blowing mornings!",
      desc: [
        "Start the day with engaging your body physically, mentally and spiritually.",
      ],
      avatar:
        "https://c.ndtvimg.com/2021-06/v19tjabg_exercise_625x300_26_June_21.jpg?im=Resize=(1230,900)",
    },
  ];
  return (
    
    <div className="flex-col justify-center items-center w-[90%] bg-white m-auto">
      {data.map((element,index) => (
        <div
    key={index}
    className={`flex items-center ${index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'} mt-4`}
  >
    <div className="flex justify-center items-center w-[300px] rounded-full bg-gray-300 border border-white shadow-[0_4px_25px_#f9a828] max-md:w-[100px] max-md:h-[100px] max-lg:w-[200px] max-lg:h-[200px]">
    
      <img src={element.avatar} alt={`Avatar ${index + 1}`} className="w-[300px] h-[300px] object-cover rounded-full max-md:w-[100px] max-md:h-[100px] max-lg:w-[200px] max-lg:h-[200px]" />
    </div>
    <div className="ml-8 w-[80%]">
      <h3 className=" text-orange-500 font-bold mb-4 text-3xl leading-none max-md:text-[18px] max-lg:text-[20px] xl:text-[32px]">{element.title}</h3>
      {element.desc.map((d, index) => {
              return element.desc.length === 1 ? (
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
      ))}
    </div>
  );
};

export default ContentPage;

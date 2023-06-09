import RowElement from "./RowElement";

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
        <RowElement
          key={element.id}
          title={element.title}
          desc={element.desc}
          avatar={element.avatar}
          index={index}
        />
      ))}
    </div>
  );
};

export default ContentPage;

import ToDoItem from "./ToDoItem";

const contents = [
    {
        img1: "./Img/check.png",
        img1Alt: "checked",
        text: "Hit the gym",
        img2: "./Img/gym.png",
        img2Alt: "gym"
    },
    {
        img1: "./Img/check.png",
        img1Alt: "checked",
        text: "Pay bills",
        img2: "./Img/bill.png",
        img2Alt: "bill" 
    },
    {
        img1: "./Img/doing.png",
        img1Alt: "doing",
        text: "Meet George",
        img2: "./Img/dance.png",
        img2Alt: "dance"
    },
    {
        img1: "./Img/doing.png",
        img1Alt: "doing",
        text: "Buy eggs",
        img2: "./Img/eat.png",
        img2Alt: "eat"
    },
    {
        img1: "./Img/no.png",
        img1Alt: "no",
        text: "Read a book",
        img2: "./Img/dance.png",
        img2Alt: "book"
    },
    {
        img1: "./Img/no.png",
        img1Alt: "no",
        text: "Organize office",
        img2: "./Img/organize.png",
        img2Alt: "organize"
    }
]
const ToDoList = () => {
    return (
        <>
            {contents.map((e) => <ToDoItem
                    img1={e.img1}
                    img1Alt={e.img1Alt}
                    text={e.text}
                    img2={e.img2}
                    img2Alt={e.img2Alt}
            />
            )}
      </>
    );
}

  export default ToDoList;
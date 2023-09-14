import { useState } from "react";

function App() {
    return <RobotList />;
}

const RobotList = () => {
    const [input, setInput] = useState<string>("");
    const [robotList, setRobotList] = useState<string[]>([]);

    const onSubmit = (e: any) => {
        e.preventDefault(); // prevents page refresh
        setRobotList([...robotList, input]);
        setInput("");
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
            }}
        >
            <form onSubmit={onSubmit}>
                <input
                    value={input}
                    placeholder={"Generate Robot"}
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                />
            </form>
            <h2>Robot List</h2>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                {robotList.map((robo, index) => (
                    <div key={index}>
                        <img                                                       
                            width={200}
                            height={200}
                            src={`https://robohash.org/${robo}`}
                            alt=""
                        ></img>
                        <button onClick={() => setRobotList(robotList.filter((r) => r !== robo))}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default App;
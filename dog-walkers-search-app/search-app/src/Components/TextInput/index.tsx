import { useState } from "react";

interface ListItem {
  id: number;
  text: string;
}

export default function TextInput() {
  const [text, setText] = useState("");
  const [list, setList] = useState<ListItem[]>([]);
  const [id, setId] = useState(0);

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    const newItem: ListItem = {
      id: id,
      text: text,
    };
    setList([...list, newItem]);
    setText("");
    setId(id + 1);
  };

  const deleteHandler = (itemId: number) => {
    setList(list.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <form>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          name="search"
          onChange={handleChange}
          value={text}
        />
      </form>
      <button onClick={handleClick}>Add</button>
      {list.length > 0 &&
        list.map((item) => {
          return (
            <div key={item.id}>
              <span>{item.text} </span>
              <button onClick={() => deleteHandler(item.id)}>Delete</button>
            </div>
          );
        })}
    </>
  );
}

import { useState } from "react";

interface Props {
  onAdd: (text: string) => void;
}

export const TodoInput = ({ onAdd }: Props) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Añadir tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

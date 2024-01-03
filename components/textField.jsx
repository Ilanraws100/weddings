export default function TextField(props) {
  return (
    <input
      type={props.type || "text"}
      id={props.name}
      name={props.name}
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
      placeholder={props.placeholder}
    />
  );
}

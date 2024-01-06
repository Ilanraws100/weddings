export default function TextField(props) {
  return (
    <div>
      <label htmlFor={props.name} className="block text-sm font-medium text-gray-700 mb-1">
        {props.label}
      </label>
      <input
        type={props.type || "text"}
        id={props.name}
        name={props.name}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
        placeholder={props.placeholder}
      />
    </div>
  );
}

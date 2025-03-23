"use client"; // Only add this if the card has interactivity like buttons

export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      {icon && <div className="text-3xl">{icon}</div>}
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  );
}

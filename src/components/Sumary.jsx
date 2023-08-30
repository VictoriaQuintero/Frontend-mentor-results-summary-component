import data from "../assets/constants/data.json";
import Items from "./Items";
export default function Sumary() {
  return (
    <div className="p-5 xl:w-1/2 text-[#303B59]">
      <p className="font-bold">Summary</p>
      {data.map((item) => (
        <Items key={item.category} item={item} />
      ))}
      <button className="hover bg-[hsl(224,30%,27%)] p-5 rounded-[3rem] w-full text-white font-bold text-xl my-5 xl:p-3 xl:text-sm">
        Continue
      </button>
    </div>
  );
}

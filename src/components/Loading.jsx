import tankGif from "../assets/images/tank-side.gif";
export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-y-8">
        <span className="typing text-3xl text-white">Loading...</span>
        <img src={tankGif} alt="tank" className="w-[164px]" />
      </div>
    </div>
  );
}

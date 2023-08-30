export default function Result() {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, hsl(252, 100%, 67%) 0%, hsl(241, 81%, 54%) 100%)",
        }}
      className="flex flex-col items-center text-white text-opacity-70 rounded-b-3xl gap-5 p-7 px-10 text-center xl:w-1/2 xl:h-[70vh] xl:rounded-3xl"
    >
      <h1>Your Result</h1>
      <div
        style={{
          background:
            "linear-gradient(180deg, hsla(256, 72%, 46%, 1) 0%, hsla(241, 72%, 46%, 0) 100%)",
        }}
        className="w-1/2 p-8 white rounded-full flex flex-col items-center justify-center xl:w-10/12 xl:p-16"
      >
        <spam className='text-6xl font-bold text-white'>76</spam> <spam>of 100</spam>
      </div>
      <h2 className="font-bold text-xl text-white">Great</h2>
      <p className="xl:text-sm">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

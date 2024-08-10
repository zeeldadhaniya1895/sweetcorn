export default function Home() {
  return (
    <div className="bg-[url('/crop.jpg')] w-full h-screen bg-cover bg-center ">
      <div className="w-full flex justify-center">
        <div className="flex justify-between p-4 m-4 mt-[7.5rem] rounded-[1.5rem] items-center h-[75vh] w-[80rem] bg-[#ecebb76b] hover:shadow-md hover:border-spacing-60 ">
          <div className="bg-[#B4E380] p-4 h-[30rem] w-[22rem] rounded-lg shadow-[3] hover:shadow-xl hover:bg-opacity-80 transition duration-300">
            <div className="font-bold text-2xl m-2">Crop Predictor</div>
            <div className="m-2 pt-[2rem]">
              Predicts the best crops to plant based on weather and soil
              conditions. Provides detailed reports for optimizing crop yield.
              Easy to use, with real-time updates and alerts for farmers.
            </div>
          </div>

          <div className="bg-[#88D66C] p-4 h-[30rem] w-[22rem] rounded-lg shadow-[3] hover:shadow-xl hover:bg-opacity-80 transition duration-300">
            <div className="font-bold text-2xl m-2">Weather Prediction</div>
            <div className="m-2 pt-[2rem]">
              Accurate 1-2 week weather forecasts tailored to your farm
              location. Alerts for extreme weather conditions to protect your
              crops. Integrates seamlessly with crop planning for optimal
              decisions.
            </div>
          </div>

          <div className="bg-[#73BBA3] p-4 h-[30rem] w-[22rem] rounded-lg shadow-[3] hover:shadow-xl hover:bg-opacity-80 transition duration-300">
            <div className="font-bold text-2xl m-2">AI ChatBox</div>
            <div className="m-2 pt-[2rem]">
              Instant assistance with farming-related queries and advice.
              Personalized recommendations based on your farm's data. Available
              24/7 to help with planning, troubleshooting, and more.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

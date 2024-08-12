import img1 from "../assets/img1.jpg"
import img2 from "../assets/img6.jpg"
import img3 from "../assets/img8.jpg"

function Cards() {
  return (
    < div className="flex flex-wrap justify-center mt-10">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-2 py-10">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={img1}
            alt=""
          />
        </a>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-2 py-10">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={img2}
            alt=""
          />
        </a>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-2 px-2">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={img3}
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Cards;

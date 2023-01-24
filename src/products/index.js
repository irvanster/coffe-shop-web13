import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/header";

export default function Products() {
  const [data, setData] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const [keyword, setKeyword] = useState('');

  console.log(keyword)
  useEffect(()=> {
    axios
    .get(`http://localhost:5000/api/v1/products?search=${keyword}`)
    .then((res) => {
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
  },[refetch, keyword])
  // Arbitrary values tailwind


  return (
    <>
      <Header title="All Products" />
      <div className="bg-accents pt-10">
      <input
          onChange={(e)=> setKeyword(e.target.value)}
          type="text"
          placeholder="cari: lumpia, coffe"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-primary mt-[100px]" onClick={()=> setRefetch(true)}>Refresh</button>
        <div className="p-5 flex flex-wrap justify-center">
          {data.map(({ title, price, images }) => {
            //100 = mobile
            // 50 = tablet
            // 70 = pc

            return (
              <div className="w-[100%] md:w-[50%] lg:w-[30%] p-3">
                <div class="card card-side bg-white shadow-xl">
                  <figure>
                    <img
                      src={
                        images.length > 0
                          ? `http://localhost:5000/uploads/images/${images[0].filename}`
                          : "/default-img.jpg"
                      }
                      alt="Movie"
                    />
                  </figure>
                  <div class="card-body">
                    <h2 class="card-title">{title}</h2>
                    <p>{price}</p>
                    <div class="card-actions justify-end">
                      <button class="btn btn-primary">Watch</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

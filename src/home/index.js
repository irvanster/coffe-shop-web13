import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import { getAllproducts } from "../redux/actions/products";



const Products = ()=> {
  // const products = useSelector((state)=> state.products) //ini berlaku kalo kita manggil banyak api, mempermudah
  const {data, response, loading, error} = useSelector((state)=> state.products)
  // console.log(products.data)
  const dispatch = useDispatch()
  useEffect(()=> {dispatch(getAllproducts())},[])
  console.log(error)
  if(error) {
    return (
      <div className="p-5 flex flex-wrap justify-center">
      <div className="w-[100%] md:w-[50%] lg:w-[30%] p-3">
        <div class="card-body">
          Sorry Please Try Again.
        </div>
        </div>
      </div>
      
    )
  }
  if(loading) {
    return(
      <div className="w-[100%] md:w-[50%] lg:w-[30%] p-3">
        <div class="card card-side bg-white shadow-xl">
        <figure>
          <img src="https://placeimg.com/200/280/arch" alt="Movie" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">-----------</h2>
          <p>------------------</p>
        </div>
        </div>
      </div>
    )
  }
  return(
    <div className="p-5 flex flex-wrap justify-center">
      {data.map((item)=> {
          //100 = mobile
          // 50 = tablet
          // 70 = pc
          
          return(
              <div className="w-[100%] md:w-[50%] lg:w-[30%] p-3">
              <div class="card card-side bg-white shadow-xl">
              <figure>
                <img src="https://placeimg.com/200/280/arch" alt="Movie" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Watch</button>
                </div>
              </div>
              </div>
            </div>
          )
      })}

</div>
  )
}
export default function Home() {  
  //   const products = useSelector((state)=> state.products) //ini berlaku kalo kita manggil banyak api, mempermudah
  // const userData = useSelector((state)=> state.users) //ini berlaku kalo kita manggil banyak api, mempermudah
  //   // Arbitrary values tailwind

  //   products.data
  //   userData.data
    return (
      <div className="bg-accents">
        <Header headerShown={true} />
        <Products />
      </div>
    );
  }
  
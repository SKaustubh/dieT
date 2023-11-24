import React, {useState} from 'react';
import foodData from './DummyData2';

const Meal = () => {

  const [foodList , setFoodList] = useState(foodData);

  const displayFoodData = () => {
    if(foodList.length==0){
        return <h1 className='text-center'>No Data Found</h1>
    }

    return foodList.map((food) => (
        <div className='col-md-3 mb-4'>
            <div className="card">
                <img src={food.image} alt="" style={{objectFit : "cover", height: 250}}/>
                <div className='card-body'>
                    <h4>{food.name}</h4>
                    <p>Calories - {food.calorie}</p>
                    <p>Category - {food.type}</p>
                </div>
            </div>
        </div>
    ))
  }

  const filterFood = (e) => {
    const value=e.target.value;
    setFoodList(foodData.filter((food) => {return food.name.toLowerCase().includes(value.toLowerCase())}));
  }

  return (
    <div>
        <header>
            <div className="container py-4">
                <p className="display-2 text-center fw-bold">
                    Browse Food
                </p>

                <input type="text" className="form-control w-75 m-auto" onChange={filterFood}/>
            </div>
        </header>

        <div>
        <div className="container">
            <div className="row">
                {displayFoodData()}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Meal;
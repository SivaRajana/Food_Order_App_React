import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Hyderabad Biryaani',
        description: 'Finest fish and veggies',
        price: 200,
    },
    {
        id: 'm2',
        name: 'Bengal Hilsa ',
        description: 'A german specialty!',
        price: 340,
    },
    {
        id: 'm3',
        name: 'Maharasthra Vada Pav',
        description: 'American, raw, meaty',
        price: 130,
    },
    {
        id: 'm4',
        name: 'Amritsari Kulcha',
        description: 'Healthy...and green...',
        price: 300,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal =>
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />);

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;
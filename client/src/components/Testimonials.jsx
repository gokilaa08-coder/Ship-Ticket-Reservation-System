import "./Testimonials.css";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    image: "👩",
    rating: "★★★★★",
    review:
      "The booking process was simple and the cruise experience was unforgettable. Highly recommended!",
  },
  {
    id: 2,
    name: "Rahul Kumar",
    image: "👨",
    rating: "★★★★★",
    review:
      "Luxury ship, excellent service, and beautiful destinations. Worth every penny!",
  },
  {
    id: 3,
    name: "Ananya R",
    image: "👩‍💼",
    rating: "★★★★★",
    review:
      "Very easy booking system and friendly customer support. I'll definitely travel again!",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">

      <h2>What Our Customers Say</h2>

      <p className="testimonial-subtitle">
        Thousands of happy travelers trust Ship Reservation.
      </p>

      <div className="testimonial-grid">

        {reviews.map((review) => (

          <div className="testimonial-card" key={review.id}>

            <div className="avatar">
              {review.image}
            </div>

            <h3>{review.name}</h3>

            <div className="stars">
              {review.rating}
            </div>

            <p>
              "{review.review}"
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;
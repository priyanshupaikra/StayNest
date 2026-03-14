import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [guests, setGuests] = useState(1);
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        const response = await api.get(`properties/${id}/`);
        setProperty(response.data);
      } catch (err) {
        console.error('Failed to fetch property details', err);
        setError('Could not load property details.');
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  const handleReserve = async () => {
    try {
      if (!checkIn || !checkOut) {
        alert("Please select check-in and check-out dates.");
        return;
      }

      // Calculate nights and price
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      const timeDifference = checkOutDate - checkInDate;
      const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

      if (daysDifference <= 0) {
        alert("Check-out date must be after check-in date.");
        return;
      }

      const totalNightlyPrice = parseFloat(property.price) * daysDifference;
      const cleaningFee = 150;
      const serviceFee = 85;
      const totalPrice = totalNightlyPrice + cleaningFee + serviceFee;

      const bookingData = {
        property_id: property.id,
        property_title: property.title,
        check_in: checkIn,
        check_out: checkOut,
        guests: guests,
        total_price: totalPrice,
      };

      const response = await api.post('bookings/create/', bookingData);
      if (response.status === 201) {
        alert("Booking successful!");
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Failed to create booking', err);
      alert('Failed to create booking. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex justify-center items-center">
          <span className="material-symbols-outlined text-4xl animate-spin text-primary">refresh</span>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex justify-center items-center text-red-500">
          <p>{error || "Property not found"}</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 md:px-10 py-8 w-full">
        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{property.title}</h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1 font-semibold text-slate-900 dark:text-slate-100">
              <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              4.95
            </span>
            <span className="underline cursor-pointer">128 reviews</span>
            <span>·</span>
            <span className="underline cursor-pointer">{property.city}, {property.country}</span>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-4 gap-2 h-[400px] md:h-[500px] mb-10 rounded-2xl overflow-hidden">
          <div className="col-span-4 md:col-span-2 row-span-2">
            <img src={property.image_url || property.img || "https://placehold.co/800x600/eee/999?text=No+Image"} className="w-full h-full object-cover hover:opacity-95 transition-opacity cursor-pointer" alt={property.title} />
          </div>
          <div className="hidden md:block col-span-1 row-span-1">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrDKAdtWgI5vyV3foYLcSSDU6qnekeUyKCdJFUKpLXmEgvv1Tmxd83jGmJ1_Pdn0xGhMlXo7BctgNQ5DvKyQUj5vddtjGEg83xFBbUgfrOfVPDu6SLCDbFXwfGtqO7rBZZhqhfcWLeN4spreFvVkHEBt3JZcBqXL2iQTFd6giudJNucSmdKXJg6F4GpyGLrtw7o2AbDGAX6-l37ym-pL6As1FothulGKQ4YESyDeyPm7-I0L-uUYUg8I2PBJpWKKt7UA5fCrfMbNu-" className="w-full h-full object-cover hover:opacity-95 transition-opacity cursor-pointer" alt="Gallery 1" />
          </div>
          <div className="hidden md:block col-span-1 row-span-1">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhLz5FQv2gMWOrOG-VQHnSgf19EB0KBY6XglxSDLFHEAkt9SHnoDlfMv4mFXdB5rgKy1ElksR6EwJMU-bWbLAaCx8QAB5sozpz8bUVhNbytCj5q-Jzu1vit1INH0RXuvQzUYODD7TuGCLvWViagb1SNa_-w-6R04kh0oyyqHnUvPdurtJJmVZHrSeaXr-cP21Mne3mGlEQ1pLSkN8ThLxLyAnknYXquqiF0io3g8UAPP2476b6uX5Ot88HwOdQ9yTZSWctil9cezjb" className="w-full h-full object-cover hover:opacity-95 transition-opacity cursor-pointer" alt="Gallery 2" />
          </div>
          <div className="hidden md:block col-span-1 row-span-1">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuClprEo8Pxg9TBHpdJVJ7q4mL6Pq1Khu0Jw53soxXw1fi2KIqiZB1GfQ0oFkhqVAu-2y5-3vcm4G__M6VQL9lQqYAGqd3mhOnY08n3Kx-VOj9RoGu94xyegnsSX2LoEyIqYZjGPXn1rLbi8uCfb2PrOIFWKEj5uYc4iIC6niDTQmvvJM6zdQqr0GOuaATU0CO3DIZF92YhNoMsDJoum5QogqsYXkYUPRAs0bbLluxezVQNhsUWUNDafuHPJ7_zNB1abX5UkdSlK7F_f" className="w-full h-full object-cover hover:opacity-95 transition-opacity cursor-pointer" alt="Gallery 3" />
          </div>
          <div className="hidden md:block col-span-1 row-span-1 relative">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI_loWipyftmct6yNJIYn73x3UQobrQNSY8mvtrm1r-u-loWBZRw_KRFObnnzzsIZbPsJOy6bNJ_quw-Jcn3HQgBxbzx8LoDbxVfmwhGIqjZc4GGLmuIRQQupRPLQ0FpVkAoQtDmbUcF6GuB8LEKJV2gDe0DBTQdLVU3drwgSg6GjMYixX-pmhlJUtQhgFDguJCfWeQJA5tmcbxym-KCNvt8o-7CfAp3m76zIcqgcu-9Kl30Ns7JviYt0GwbT03klz39uuWmr0ykij" className="w-full h-full object-cover hover:opacity-95 transition-opacity cursor-pointer" alt="Gallery 4" />
            <button className="absolute bottom-4 right-4 bg-white/90 text-slate-900 border border-slate-900 px-4 py-2 text-sm font-semibold rounded-lg flex items-center gap-2 hover:bg-slate-100 transition-colors">
              <span className="material-symbols-outlined text-sm">grid_view</span>
              Show all photos
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-6 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{property.property_type} hosted by {property.host_name || "Host"}</h2>
                <p className="text-slate-600 dark:text-slate-400">{property.max_guests} guests · {property.bedrooms} bedrooms · {property.bathrooms} bathrooms</p>
              </div>
              <div className="w-14 h-14 bg-slate-200 rounded-full overflow-hidden shrink-0">
                <img src="https://i.pravatar.cc/150?img=47" alt="Host Profile" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="border-b border-slate-200 dark:border-slate-700 pb-6 mb-6 space-y-4 text-slate-700 dark:text-slate-300">
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-3xl">workspace_premium</span>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100">Superhost</h3>
                  <p className="text-sm">Jane is a Superhost with highly rated stays.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-3xl">location_on</span>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100">Great location</h3>
                  <p className="text-sm">95% of recent guests gave the location a 5-star rating.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-3xl">key</span>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100">Great check-in experience</h3>
                  <p className="text-sm">100% of recent guests gave the check-in process a 5-star rating.</p>
                </div>
              </div>
            </div>

            <div className="border-b border-slate-200 dark:border-slate-700 pb-6 mb-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">About this space</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {property.description}
              </p>
            </div>

            <div className="pb-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">What this place offers</h2>
              <div className="grid grid-cols-2 gap-4 text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-3"><span className="material-symbols-outlined">wifi</span> Fast wifi</div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined">pool</span> Infinity pool</div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined">directions_car</span> Free parking on premises</div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined">pets</span> Pets allowed</div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined">outdoor_grill</span> BBQ grill</div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined">balcony</span> Patio or balcony</div>
              </div>
              <button className="mt-6 border border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100 px-6 py-2 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                Show all 45 amenities
              </button>
            </div>
          </div>

          {/* Booking Widget */}
          <div className="col-span-1">
            <div className="sticky top-[100px] border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-xl bg-white dark:bg-slate-800">
              <div className="flex items-end gap-1 mb-4">
                <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">${property.price}</span>
                <span className="text-slate-600 dark:text-slate-400 mb-1">night</span>
              </div>
              
              <div className="border border-slate-300 dark:border-slate-600 rounded-xl mb-4 overflow-hidden">
                <div className="flex border-b border-slate-300 dark:border-slate-600">
                  <div className="w-1/2 p-3 border-r border-slate-300 dark:border-slate-600">
                    <label className="block text-[10px] font-bold uppercase text-slate-800 dark:text-slate-200">Check-in</label>
                    <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} className="w-full text-sm outline-none bg-transparent dark:text-white" />
                  </div>
                  <div className="w-1/2 p-3">
                    <label className="block text-[10px] font-bold uppercase text-slate-800 dark:text-slate-200">Checkout</label>
                    <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} className="w-full text-sm outline-none bg-transparent dark:text-white" />
                  </div>
                </div>
                <div className="p-3">
                  <label className="block text-[10px] font-bold uppercase text-slate-800 dark:text-slate-200">Guests</label>
                  <select className="w-full text-sm outline-none bg-transparent dark:text-white mt-1 cursor-pointer" value={guests} onChange={e => setGuests(Number(e.target.value))}>
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                  </select>
                </div>
              </div>

              <button onClick={handleReserve} className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl transition-colors mb-4 text-lg">
                Reserve
              </button>
              
              <p className="text-center text-slate-500 text-sm mb-4">You won't be charged yet</p>
              
              <div className="space-y-3 border-b border-slate-200 dark:border-slate-700 pb-4 mb-4 text-slate-600 dark:text-slate-300">
                <div className="flex justify-between">
                  <span className="underline">$850 x 5 nights</span>
                  <span>$4,250</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Cleaning fee</span>
                  <span>$150</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Service fee</span>
                  <span>$85</span>
                </div>
              </div>
              
              <div className="flex justify-between font-bold text-slate-900 dark:text-slate-100 text-lg">
                <span>Total before taxes</span>
                <span>$4,485</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetails;

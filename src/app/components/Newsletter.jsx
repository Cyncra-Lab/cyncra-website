"use client";

<<<<<<< HEAD
export default function Newsletter(){
    return(
         <section className="bg-white py-10 px-4">
                <h2 className="text-xl font-semibold text-center mb-4"> Our Newsletter</h2>
                <p className="text-center text-gray-600 mb-6">
                    Subscribe to get updates on new features, helpful tips, and fresh insights straight to your inbox. </p>
                    <form action="#" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <input type="email" className="px-4 py-2 w-full sm:-1/3 border rounded-xl bg-gray-100 focus:outline-none" placeholder="Type your email here" required
                            />
                            <button type="submit" className="bg-[#042F2E] text-white px-6 py-2 rounded-xl hover:bg[#064b48] transition">Submit</button>
                    </form>
        </section>
    );
}
=======
export default function Newsletter() {
  return (
    <section className="bg-white py-10 px-0 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[20%]">
      <div>
        <h2 className="text-xl lg:text-3xl text-center lg:text-left font-bold mb-4">
          Our Newsletter
        </h2>
        <p className="text-center lg:text-left text-[#727272] mb-6 text-sm lg:text-lg">
          Subscribe to get updates on new features, helpful tips, and fresh
          insights straight to your inbox.
        </p>
      </div>
      <form
        action="#"
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <div className="relative w-full">
          <input
            type="email"
            className="px-4 py-2 w-full h-18 sm:-1/3 border-none rounded-3xl bg-[#E6FAFC] focus:outline-none"
            placeholder="Type your email here"
            required
          />
          <button
            type="submit"
            className="absolute top-1/8 h-13 cursor-pointer right-2 bg-[#042F2E] text-white px-7  rounded-3xl hover:bg[#064b48] transition"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
>>>>>>> a7c7035782949f50327d7b55f76149c4681661af

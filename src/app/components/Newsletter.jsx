'use client';

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
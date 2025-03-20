import Footer from "../components/footer";



export default function AboutUs() {
  return (
    <div className="min-h-screen mt-[-2.5rem] bg-gradient-to-b from-blue-50 to-white">   
      {/* Hero Section with Bubbles */}
      <div className="relative overflow-hidden">
        {/* Decorative Bubbles */}
        <div className="absolute w-24 h-24 rounded-full bg-pink-400 opacity-60 top-10 left-10 animate-bounce"></div>
        <div className="absolute w-16 h-16 rounded-full bg-yellow-300 opacity-60 top-20 right-20 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute w-20 h-20 rounded-full bg-green-300 opacity-60 bottom-10 left-1/4 animate-bounce" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute w-28 h-28 rounded-full bg-blue-300 opacity-60 top-1/3 right-1/3 animate-bounce" style={{animationDelay: '1.2s'}}></div>
        
        <div className="container mx-auto pt-12 pb-16 px-4 mt-10">
          <h1 className="text-5xl font-bold text-center mb-6 text-indigo-700">About Our School</h1>
          <div className="text-center mb-12">
            <p className="text-xl text-purple-800 max-w-3xl mx-auto">Where curiosity blooms and learning adventures begin!</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Our Story Section */}
        <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-yellow-300 rounded-lg"></div>
              <img 
                src="/images/about/kids_about.webp" 
                alt="Happy children learning" 
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">Our Story</h2>
            <p className="mb-4 text-lg">Kids Wonder School was founded in 2010 with a simple vision: to create a place where children love to learn. Our journey started with just 15 students and 2 teachers in a small building.</p>
            <p className="text-lg">Today, we've grown into a vibrant community of over 300 students and 30 dedicated teachers. While we've grown in size, our commitment to joyful, engaging education remains unchanged!</p>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute w-16 h-16 rounded-full bg-red-300 opacity-50 -top-6 -right-6"></div>
          <div className="absolute w-12 h-12 rounded-full bg-green-300 opacity-50 bottom-10 right-10"></div>
          
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Our Mission</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="flex-1 bg-blue-50 p-6 rounded-xl shadow-sm border-2 border-blue-200">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Inspire Curiosity</h3>
              <p>We create an environment where questions are celebrated and exploration is encouraged.</p>
            </div>
            <div className="flex-1 bg-green-50 p-6 rounded-xl shadow-sm border-2 border-green-200">
              <h3 className="text-xl font-bold text-green-700 mb-2">Build Confidence</h3>
              <p>We empower children to express themselves and take pride in their unique abilities.</p>
            </div>
            <div className="flex-1 bg-purple-50 p-6 rounded-xl shadow-sm border-2 border-purple-200">
              <h3 className="text-xl font-bold text-purple-700 mb-2">Foster Kindness</h3>
              <p>We nurture empathy and teach children to be compassionate community members.</p>
            </div>
          </div>
        </div>

        {/* Meet Our Team Section */}
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Meet Our Amazing Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Team Member Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:-translate-y-2">
            <div className="h-48 bg-indigo-100">
              <img src="/images/about/principal.jpg" alt="Principal Sarah Johnson" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-xl text-indigo-700">Sarah Johnson</h3>
              <p className="text-purple-600 mb-2">Principal</p>
              <p className="text-gray-600 text-sm">Leading our school with 15 years of experience in childhood education</p>
            </div>
          </div>
          
          {/* Team Member Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:-translate-y-2">
            <div className="h-48 bg-pink-100">
              <img src="/images/about/jagajeet_pic.jpeg" alt="Teacher Michael Rodriguez" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-xl text-indigo-700">Jagajeet Sinha</h3>
              <p className="text-purple-600 mb-2">Trustee (Operations)</p>
              <p className="text-gray-600 text-sm">Bringing creativity to life through paint, clay, and imagination</p>
            </div>
          </div>
          
          {/* Team Member Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:-translate-y-2">
            <div className="h-48 bg-yellow-100">
              <img src="/images/about/founder.jpeg" alt="Teacher Emily Chen" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-xl text-indigo-700">Sanjay Jha</h3>
              <p className="text-purple-600 mb-2">Managing Trustee</p>
              <p className="text-gray-600 text-sm">Making science magical through hands-on experiments and discovery</p>
            </div>
          </div>
          
          {/* Team Member Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:-translate-y-2">
            <div className="h-48 bg-green-100">
              <img src="/images/about/jagajeet_pic.jpeg" alt="Teacher James Wilson" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-xl text-indigo-700">James Wilson</h3>
              <p className="text-purple-600 mb-2">Music Teacher</p>
              <p className="text-gray-600 text-sm">Helping children find their rhythm and voice through music</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">What Parents Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-bold text-lg">
                  L
                </div>
                <div className="ml-4">
                  <p className="font-bold">Lisa Thompson</p>
                  <p className="text-sm text-gray-500">Parent of Alex, Grade 2</p>
                </div>
              </div>
              <p className="italic">"My son used to dread school. Since joining Kids Wonder, he jumps out of bed every morning excited for the day ahead!"</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-500 font-bold text-lg">
                  R
                </div>
                <div className="ml-4">
                  <p className="font-bold">Robert Patel</p>
                  <p className="text-sm text-gray-500">Parent of Maya, Grade 4</p>
                </div>
              </div>
              <p className="italic">"The teachers truly know my daughter as an individual. They've helped her confidence grow so much in just one year."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

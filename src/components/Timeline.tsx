import { useNavigate } from 'react-router-dom';

const Timeline = () => {
  const navigate = useNavigate();

  const timelineEvents = [
    { icon: "💫", title: "The First Smile", desc: "That moment when your smile made everything better." },
    { icon: "🌼", title: "Unspoken Connection", desc: "We didn't need words to understand each other." },
    { icon: "😁", title: "I love irritating you", desc: "I always will" },
    { icon: "🌙", title: "Late-Night Talks", desc: "We stayed up talking about everything and nothing." },
    { icon: "💌", title: "We talked", desc: "We started talking and the connection was instant" },
    { icon: "🥰", title: "Shared Laughter", desc: "We couldn't stop laughing, and I never wanted it to end." }
  ];

  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-10 py-10 bg-white animate-fade-in">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#FF6F6F]">
        📖 Our Story
      </h2>
      <div
        className="relative w-full max-w-4xl mx-auto p-8 rounded-2xl shadow-2xl"
        style={{ background: 'linear-gradient(135deg, #FFB4B4, #FF6F6F)' }}
      >
        {/* Timeline central line for larger screens */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white opacity-75"></div>

        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`relative mb-12 sm:w-1/2 ${index % 2 === 0 ? 'sm:ml-auto sm:pl-8' : 'sm:mr-auto sm:pr-8'}`}
            style={{ animationDelay: `${index * 300}ms` }}
          >
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <span className="text-3xl animate-bounce">{event.icon}</span>
                <div>
                  <h3 className="font-semibold text-xl text-[#FF6F6F]">{event.title}</h3>
                  <p className="text-base text-gray-700">{event.desc}</p> {/* Improved readability */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button
          onClick={() => navigate('/playlist')}
          className="px-8 py-4 bg-white text-black rounded-full hover:bg-[#FFB4B4] hover:text-white transition-transform duration-300 transform hover:scale-105 shadow-lg font-semibold"
        >
          I have dedicated some songs for you! 🎵
        </button>
      </div>

      {/* Inline CSS for fade-in animation */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Timeline;

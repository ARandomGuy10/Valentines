import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

function App() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showYes, setShowYes] = useState(false);
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; delay: number }>>([]);

  const handleNoHover = () => {
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleYesClick = () => {
    setShowYes(true);
    const newHearts = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setHearts(newHearts);
  };

  useEffect(() => {
    if (showYes) {
      document.body.style.overflow = 'hidden';
    }
  }, [showYes]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-pink-200 relative overflow-hidden">
      {!showYes ? (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
          <div className="text-center space-y-8 animate-fade-in">
            <Heart className="w-20 h-20 text-red-500 mx-auto animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold text-red-600 mb-4">
              Hey Isabel! 💝
            </h1>
            <p className="text-2xl md:text-4xl text-gray-700 font-medium">
              Will you be my Valentine?
            </p>

            <div className="flex gap-6 justify-center items-center mt-12 relative">
              <button
                onClick={handleYesClick}
                className="bg-red-500 hover:bg-red-600 text-white font-bold text-2xl px-12 py-6 rounded-full shadow-lg transform transition hover:scale-110 active:scale-95"
              >
                Yes! 💕
              </button>

              <button
                onMouseEnter={handleNoHover}
                onClick={handleNoHover}
                style={{
                  position: noButtonPosition.x !== 0 ? 'fixed' : 'relative',
                  left: noButtonPosition.x !== 0 ? `${noButtonPosition.x}px` : 'auto',
                  top: noButtonPosition.y !== 0 ? `${noButtonPosition.y}px` : 'auto',
                }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold text-2xl px-12 py-6 rounded-full shadow-lg transition-all duration-300"
              >
                No
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-8 italic">
              (Try clicking No... I dare you 😏)
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="fixed inset-0 pointer-events-none z-10">
            {hearts.map((heart) => (
              <div
                key={heart.id}
                className="absolute animate-fall"
                style={{
                  left: `${heart.x}%`,
                  animationDelay: `${heart.delay}s`,
                }}
              >
                <Heart className="w-8 h-8 text-red-500 fill-red-500" />
              </div>
            ))}
          </div>

          <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-red-50 to-pink-200" />

            <div className="animate-reveal-left absolute top-0 left-0 w-1/2 h-full bg-red-400 z-30" />
            <div className="animate-reveal-right absolute top-0 right-0 w-1/2 h-full bg-red-400 z-30" />

            <div className="relative z-40 text-center animate-scale-in" style={{ animationDelay: '1s' }}>
              <Heart className="w-40 h-40 text-red-600 fill-red-500 mx-auto mb-8 animate-pulse" />
              <h2 className="text-6xl md:text-8xl font-bold text-red-600 mb-6">
                Yay! 🎉
              </h2>
              <p className="text-3xl md:text-5xl text-gray-700 font-medium">
                I knew you'd say yes!
              </p>
              <p className="text-2xl md:text-3xl text-red-500 mt-6 font-semibold">
                Happy Valentine's Day, Bebe! ❤️
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

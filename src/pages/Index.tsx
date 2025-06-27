
import React, { useState, useEffect } from 'react';
import UnlockButton from '../components/UnlockButton';
import StatusIndicator from '../components/StatusIndicator';

const Index = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [keyStatus, setKeyStatus] = useState<'waiting' | 'enabled'>('waiting');

  // Simulate key status change when bike is unlocked
  useEffect(() => {
    if (isUnlocked) {
      const timer = setTimeout(() => {
        setKeyStatus('enabled');
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setKeyStatus('waiting');
    }
  }, [isUnlocked]);

  const handleToggle = () => {
    setIsUnlocked(!isUnlocked);
    console.log('Bike lock toggled:', !isUnlocked ? 'unlocked' : 'locked');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col">
      {/* Header */}
      <div className="pt-16 pb-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Smart E-Bike</h1>
        <p className="text-gray-400 text-lg">Touch to unlock your ride</p>
      </div>

      {/* Main unlock section */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="w-full max-w-sm">
          <UnlockButton isUnlocked={isUnlocked} onToggle={handleToggle} />
        </div>
      </div>

      {/* Status section */}
      <div className="pb-20 px-8">
        <StatusIndicator 
          bikeStatus={isUnlocked ? 'unlocked' : 'locked'} 
          keyStatus={keyStatus}
        />
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Index;

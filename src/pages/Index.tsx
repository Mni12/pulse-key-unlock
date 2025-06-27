
import React, { useState, useEffect } from 'react';
import UnlockButton from '../components/UnlockButton';
import StatusPanel from '../components/StatusPanel';
import KeyIgnitionButton from '../components/KeyIgnitionButton';
import UnlockAnimation from '../components/UnlockAnimation';
import Header from '../components/Header';

const Index = () => {
  const [isAppUnlocked, setIsAppUnlocked] = useState(false);
  const [isKeyEnabled, setIsKeyEnabled] = useState(false);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const [bikeStatus, setBikeStatus] = useState<'locked' | 'unlocked'>('locked');

  // Handle unlock animation and bike status
  useEffect(() => {
    if (isAppUnlocked && isKeyEnabled && bikeStatus === 'locked') {
      setIsAnimationPlaying(true);
      console.log('Starting unlock sequence');
      
      const timer = setTimeout(() => {
        setIsAnimationPlaying(false);
        setBikeStatus('unlocked');
        console.log('Bike unlocked successfully!');
      }, 3000);
      
      return () => clearTimeout(timer);
    } else if ((!isAppUnlocked || !isKeyEnabled) && bikeStatus === 'unlocked') {
      setBikeStatus('locked');
      console.log('Bike locked - security conditions not met');
    }
  }, [isAppUnlocked, isKeyEnabled, bikeStatus]);

  const handleAppToggle = () => {
    setIsAppUnlocked(!isAppUnlocked);
    console.log('App security:', !isAppUnlocked ? 'authenticated' : 'locked');
  };

  const handleKeyToggle = () => {
    setIsKeyEnabled(!isKeyEnabled);
    console.log('Key ignition:', !isKeyEnabled ? 'activated' : 'standby');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      
      {/* Unlock Animation Overlay */}
      <UnlockAnimation isPlaying={isAnimationPlaying} />
      
      {/* Header */}
      <Header bikeStatus={bikeStatus} />
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 relative z-10">
        
        {/* Central Unlock Section */}
        <div className="flex flex-col items-center space-y-8 mb-12">
          <UnlockButton 
            isUnlocked={isAppUnlocked} 
            onToggle={handleAppToggle}
            bikeStatus={bikeStatus}
          />
        </div>

        {/* Control Panel */}
        <div className="w-full max-w-md space-y-6">
          <KeyIgnitionButton 
            isEnabled={isKeyEnabled} 
            onToggle={handleKeyToggle}
          />
          
          <StatusPanel 
            bikeStatus={bikeStatus}
            appUnlocked={isAppUnlocked}
            keyEnabled={isKeyEnabled}
          />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Index;

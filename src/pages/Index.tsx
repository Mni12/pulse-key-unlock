
import React, { useState, useEffect } from 'react';
import UnlockButton from '../components/UnlockButton';
import StatusIndicator from '../components/StatusIndicator';
import KeyIgnitionButton from '../components/KeyIgnitionButton';
import UnlockAnimation from '../components/UnlockAnimation';

const Index = () => {
  const [isAppUnlocked, setIsAppUnlocked] = useState(false);
  const [isKeyEnabled, setIsKeyEnabled] = useState(false);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const [bikeStatus, setBikeStatus] = useState<'locked' | 'unlocked'>('locked');

  // Handle unlock animation and bike status
  useEffect(() => {
    if (isAppUnlocked && isKeyEnabled && bikeStatus === 'locked') {
      // Play unlock animation
      setIsAnimationPlaying(true);
      console.log('Starting unlock animation sequence');
      
      // Animation duration: 3 seconds
      const timer = setTimeout(() => {
        setIsAnimationPlaying(false);
        setBikeStatus('unlocked');
        console.log('Bike successfully unlocked!');
      }, 3000);
      
      return () => clearTimeout(timer);
    } else if ((!isAppUnlocked || !isKeyEnabled) && bikeStatus === 'unlocked') {
      // Lock the bike if either condition is not met
      setBikeStatus('locked');
      console.log('Bike locked - conditions not met');
    }
  }, [isAppUnlocked, isKeyEnabled, bikeStatus]);

  const handleAppToggle = () => {
    setIsAppUnlocked(!isAppUnlocked);
    console.log('App unlock toggled:', !isAppUnlocked ? 'unlocked' : 'locked');
  };

  const handleKeyToggle = () => {
    setIsKeyEnabled(!isKeyEnabled);
    console.log('Key ignition toggled:', !isKeyEnabled ? 'enabled' : 'waiting');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col relative overflow-hidden">
      {/* Unlock Animation Overlay */}
      <UnlockAnimation isPlaying={isAnimationPlaying} />
      
      {/* Header */}
      <div className="pt-16 pb-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Smart E-Bike</h1>
        <p className="text-gray-400 text-lg">Activate both controls to unlock</p>
      </div>

      {/* Bike Status Above Button (when unlocked) */}
      {bikeStatus === 'unlocked' && (
        <div className="px-8">
          <StatusIndicator 
            bikeStatus={bikeStatus} 
            keyStatus={isKeyEnabled ? 'enabled' : 'waiting'}
            showBikeStatusAbove={true}
          />
        </div>
      )}

      {/* Bike Status Above Button (when locked) */}
      {bikeStatus === 'locked' && (
        <div className="px-8 mb-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3">
              <span className="text-3xl">🔐</span>
              <div className="text-2xl">
                <span className="font-bold text-red-400">
                  Bike Locked
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main unlock section */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="w-full max-w-sm">
          <UnlockButton isUnlocked={isAppUnlocked} onToggle={handleAppToggle} />
        </div>
      </div>

      {/* Controls section */}
      <div className="pb-12 px-8 flex justify-center">
        <KeyIgnitionButton isEnabled={isKeyEnabled} onToggle={handleKeyToggle} />
      </div>

      {/* Status section */}
      <div className="pb-20 px-8">
        <StatusIndicator 
          bikeStatus={bikeStatus} 
          keyStatus={isKeyEnabled ? 'enabled' : 'waiting'}
        />
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Index;

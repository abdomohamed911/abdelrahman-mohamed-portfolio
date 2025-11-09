export const AnimatedBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blob 1 - Primary */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(195 100% 50%) 0%, transparent 70%)",
          animation: "blob-morph 10s ease-in-out infinite, floating 8s ease-in-out infinite",
        }}
      />
      
      {/* Blob 2 - Secondary */}
      <div
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(280 80% 60%) 0%, transparent 70%)",
          animation: "blob-morph 12s ease-in-out infinite reverse, floating 10s ease-in-out infinite 2s",
        }}
      />
      
      {/* Blob 3 - Accent */}
      <div
        className="absolute top-[40%] left-[30%] w-[400px] h-[400px] opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(340 80% 55%) 0%, transparent 70%)",
          animation: "blob-morph 15s ease-in-out infinite, floating 12s ease-in-out infinite 4s",
        }}
      />
      
      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: "radial-gradient(ellipse at top right, hsl(195 100% 50% / 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom left, hsl(280 80% 60% / 0.15) 0%, transparent 50%)",
        }}
      />
    </div>
  );
};

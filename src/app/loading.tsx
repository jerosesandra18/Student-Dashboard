export default function Loading() {
  return (
    <div className="min-h-screen bg-[#030712] text-white flex">
      {/* Sidebar Skeleton */}
      <div className="w-64 border-r border-slate-800 p-6 hidden md:block space-y-6">
        <div className="h-8 bg-slate-800 rounded-lg animate-pulse w-3/4" />
        <div className="space-y-3 pt-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-10 bg-slate-800/50 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
      
      {/* Bento Grid Skeleton */}
      <main className="flex-1 p-8 max-w-7xl mx-auto w-full space-y-8">
        <div className="h-12 bg-slate-800 rounded-xl animate-pulse w-1/3" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[160px]">
          <div className="md:col-span-2 md:row-span-2 bg-slate-800/40 rounded-3xl animate-pulse" />
          <div className="bg-slate-800/40 rounded-3xl animate-pulse" />
          <div className="bg-slate-800/40 rounded-3xl animate-pulse" />
          <div className="md:col-span-3 md:row-span-2 bg-slate-800/40 rounded-3xl animate-pulse" />
        </div>
      </main>
    </div>
  );
}